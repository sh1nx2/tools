(() => {
  const STORAGE_KEY = "granblueProgress";
  const EMPTY_DATA = { started: false, progress: {}, goals: {}, inventory: {}, checks: {}, favoriteMaterials: [] };
  let master = null;
  let data = structuredClone(EMPTY_DATA);
  let view = "home";
  let materialScope = "priority";
  let bulkUndo = null;
  const $gb = (selector) => document.querySelector(selector);

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
  }

  function entityKey(groupId, item) {
    return groupId + ":" + item;
  }

  function normalizeData(value) {
    const source = value && typeof value === "object" ? value : {};
    return {
      started: source.started === true,
      progress: source.progress && typeof source.progress === "object" ? source.progress : {},
      goals: source.goals && typeof source.goals === "object" ? source.goals : {},
      inventory: source.inventory && typeof source.inventory === "object" ? source.inventory : {},
      checks: source.checks && typeof source.checks === "object" ? source.checks : {},
      favoriteMaterials: Array.isArray(source.favoriteMaterials) ? [...new Set(source.favoriteMaterials.filter((id) => typeof id === "string"))] : []
    };
  }

  async function saveData() {
    await chrome.storage.local.set({ [STORAGE_KEY]: data });
  }

  function allEntities() {
    return master.groups.flatMap((group) => group.items.map((item) => ({ group, item, key: entityKey(group.id, item) })));
  }

  function effectiveProgressEntities() {
    return master.groups.flatMap((group) => {
      if (group.progressAggregation !== "highestByAttribute") {
        return group.items.map((item) => ({ group, item, key: entityKey(group.id, item), current: data.progress[entityKey(group.id, item)] }));
      }
      const attributes = [...new Set(group.items.map((item) => item.split("・")[0]))];
      return attributes.map((attribute) => {
        const variants = group.items.filter((item) => item.startsWith(attribute + "・"));
        const best = variants.reduce((selected, item) => {
          const current = data.progress[entityKey(group.id, item)];
          return group.stages.indexOf(current) > group.stages.indexOf(selected.current) ? { item, current } : selected;
        }, { item: variants[0], current: "未設定" });
        return { group, item: attribute, key: entityKey(group.id, best.item), current: best.current };
      });
    });
  }

  function migrateLegacyOpusProgress() {
    const group = master.groups.find((entry) => entry.id === "opus" && entry.progressAggregation === "highestByAttribute");
    if (!group) return false;
    let changed = false;
    for (const attribute of ["火", "水", "土", "風", "光", "闇"]) {
      const legacyKey = entityKey("opus", attribute);
      if (data.progress[legacyKey]) {
        for (const variant of ["マグナ", "神石"]) {
          const nextKey = entityKey("opus", attribute + "・" + variant);
          if (!data.progress[nextKey]) data.progress[nextKey] = data.progress[legacyKey];
        }
        delete data.progress[legacyKey];
        changed = true;
      }
      if (data.goals[legacyKey]) {
        for (const variant of ["マグナ", "神石"]) {
          const nextKey = entityKey("opus", attribute + "・" + variant);
          if (!data.goals[nextKey]) data.goals[nextKey] = structuredClone(data.goals[legacyKey]);
        }
        delete data.goals[legacyKey];
        changed = true;
      }
      if (data.checks[legacyKey]) {
        for (const variant of ["マグナ", "神石"]) {
          const nextKey = entityKey("opus", attribute + "・" + variant);
          if (!data.checks[nextKey]) data.checks[nextKey] = structuredClone(data.checks[legacyKey]);
        }
        delete data.checks[legacyKey];
        changed = true;
      }
    }
    return changed;
  }

  function migratePriorityLevels() {
    let changed = false;
    for (const goal of Object.values(data.goals)) {
      if (goal?.priority === "top") {
        goal.priority = "priority";
        changed = true;
      }
    }
    return changed;
  }

  function goalEntities(scope = materialScope) {
    return allEntities().flatMap((entity) => {
      const current = data.progress[entity.key];
      if (!current || current === "未設定") return [];
      const goal = data.goals[entity.key];
      if (scope === "priority" && !["top", "priority"].includes(goal?.priority)) return [];
      const target = scope === "all" || !goal?.target ? entity.group.stages.at(-1) : goal.target;
      if (!target || entity.group.stages.indexOf(target) <= entity.group.stages.indexOf(current)) return [];
      return [{ ...entity, current, target, priority: goal?.priority || "normal" }];
    });
  }

  function resolveRequirement(requirement, goal) {
    const attribute = goal.item.split("・")[0];
    const replacements = { attribute, item: goal.item };
    const materialId = requirement.materialId.replace(/\{(attribute|item)\}/g, (_, key) => replacements[key]);
    return { ...requirement, materialId, definitionId: requirement.materialId, attribute, item: goal.item };
  }

  function materialDefinition(entry) {
    const definition = master.materials[entry.definitionId || entry.materialId] || master.materials[entry.materialId] || { name: entry.materialId, trackingMode: "check", important: false };
    return {
      ...definition,
      name: definition.name.replaceAll("{attribute}", entry.attribute || "").replaceAll("{item}", entry.item || "")
    };
  }

  function materialIcon(material) {
    const icons = {
      certificate: '<path d="M6 4h12v12H6zM9 8h6M9 11h4M9 16l-1 5 4-2 4 2-1-5"/>',
      crest: '<path d="M12 3 20 7v6c0 4-3 7-8 9-5-2-8-5-8-9V7zM8 12l3 3 5-6"/>',
      gem: '<path d="m12 3 7 6-7 12L5 9zM5 9h14M9 9l3 12 3-12-3-6z"/>',
      ingot: '<path d="m7 7 10-2 4 10-14 4-4-9zM7 7l4 9M3 10l14-3"/>',
      sand: '<path d="M7 3h10M7 21h10M8 4c0 4 1 6 4 8-3 2-4 4-4 8M16 4c0 4-1 6-4 8 3 2 4 4 4 8"/>',
      flame: '<path d="M13 3c1 5-3 5-1 9 1-2 3-3 4-5 3 3 4 6 3 9-1 4-4 6-8 5-4-1-6-4-6-7 0-4 3-6 5-9 0 3 1 4 3 5"/>',
      quartz: '<path d="m12 2 6 5-2 12-4 3-4-3L6 7zM6 7h12M9 7l3 15 3-15-3-5z"/>'
    };
    const content = icons[material.icon];
    return content ? `<span class="gb-material-icon" aria-hidden="true"><svg viewBox="0 0 24 24">${content}</svg></span>` : "";
  }

  function aggregateMaterials(scope = materialScope) {
    const materials = new Map();
    const incomplete = new Set();
    const priorityRank = { top: 0, priority: 0, normal: 1 };
    for (const goal of goalEntities(scope)) {
      const from = goal.group.stages.indexOf(goal.current);
      const to = goal.group.stages.indexOf(goal.target);
      for (let index = from + 1; index <= to; index += 1) {
        const stage = goal.group.stages[index];
        const recipe = goal.group.recipes?.[stage];
        if (!Array.isArray(recipe) || !recipe.length) {
          incomplete.add(goal.group.name + " " + goal.item + "：" + stage);
          continue;
        }
        for (const rawRequirement of recipe) {
          const requirement = resolveRequirement(rawRequirement, goal);
          const existing = materials.get(requirement.materialId) || { materialId: requirement.materialId, definitionId: requirement.definitionId, attribute: requirement.attribute, item: requirement.item, required: 0, goalKeys: new Set(), rank: 9 };
          existing.required += Number(requirement.amount) || 0;
          existing.goalKeys.add(goal.key);
          existing.rank = Math.min(existing.rank, priorityRank[goal.priority] ?? 2);
          materials.set(requirement.materialId, existing);
        }
      }
    }
    return {
      items: [...materials.values()].sort((a, b) => a.rank - b.rank || Number(materialDefinition(b).important) - Number(materialDefinition(a).important) || materialDefinition(a).name.localeCompare(materialDefinition(b).name, "ja")),
      incomplete: [...incomplete]
    };
  }

  function materialStatus(entry) {
    const material = materialDefinition(entry);
    const inventory = data.inventory[entry.materialId] || {};
    if (inventory.mode === "quantity" && Number.isFinite(Number(inventory.quantity)) && inventory.quantity !== "") {
      const owned = Math.max(0, Number(inventory.quantity));
      return { kind: owned >= entry.required ? "done" : "short", owned, shortage: Math.max(0, entry.required - owned) };
    }
    const checked = [...entry.goalKeys].length > 0 && [...entry.goalKeys].every((goalKey) => data.checks[goalKey]?.[entry.materialId] === true);
    if (inventory.mode === "check" && checked) return { kind: "done" };
    return { kind: "unknown", recommended: material?.trackingMode || "check" };
  }

  function materialScopeSummary(scope) {
    const aggregate = aggregateMaterials(scope);
    return {
      goals: goalEntities(scope).length,
      types: aggregate.items.length,
      required: aggregate.items.reduce((sum, entry) => sum + entry.required, 0)
    };
  }

  function renderHome() {
    const configured = effectiveProgressEntities().filter((entity) => entity.current && entity.current !== "未設定");
    const goals = goalEntities("priority");
    const stageProgress = configured.length
      ? Math.round(configured.reduce((sum, entity) => sum + Math.max(0, entity.group.stages.indexOf(entity.current) - 1) / Math.max(1, entity.group.stages.length - 2), 0) / configured.length * 100)
      : 0;
    const aggregate = aggregateMaterials("priority");
    const statuses = aggregate.items.map(materialStatus);
    const unknown = statuses.filter((status) => status.kind === "unknown").length;
    const shortage = statuses.filter((status) => status.kind === "short").length;
    const goalMarkup = goals.slice(0, 5).map((goal) => `
      <article class="gb-home-goal">
        <span>★</span>
        <div><strong>${escapeHtml(goal.item)}</strong><small>${escapeHtml(goal.group.name)}　${escapeHtml(goal.current)} → ${escapeHtml(goal.target)}</small></div>
        <button type="button" data-open-goal="${escapeHtml(goal.key)}">素材</button>
      </article>`).join("");
    $gb("#gbProgressHome").innerHTML = `
      <div class="gb-progress-overview">
        <div><small>育成進捗</small><strong>${stageProgress}%</strong><span>設定済み ${configured.length}件</span></div>
        <div><small>素材確認</small><strong>${aggregate.items.length - unknown} / ${aggregate.items.length}</strong><span>未確認 ${unknown}種類</span></div>
      </div>
      <section class="gb-home-section"><div class="gb-section-title"><h3>優先目標</h3><button type="button" data-go-view="goals">編集</button></div>
        ${goalMarkup || '<p class="gb-empty-note">優先目標はまだありません。現在の進捗だけでも保存できます。</p>'}
      </section>
      <section class="gb-home-section"><div class="gb-section-title"><h3>優先素材</h3><button type="button" data-go-view="materials">確認する</button></div>
        <p class="gb-material-glance">未確認 <strong>${unknown}</strong>種類　不足確認済み <strong>${shortage}</strong>種類</p>
      </section>`;
  }

  function renderWidget() {
    const widget = $gb("#granblueProgressWidget");
    widget.hidden = !data.started;
    if (!data.started) return;
    const configured = effectiveProgressEntities().filter((entity) => entity.current && entity.current !== "未設定");
    const stageProgress = configured.length
      ? Math.round(configured.reduce((sum, entity) => sum + Math.max(0, entity.group.stages.indexOf(entity.current) - 1) / Math.max(1, entity.group.stages.length - 2), 0) / configured.length * 100)
      : 0;
    const priorityGoals = goalEntities("priority").length;
    const allMaterials = aggregateMaterials("all").items;
    const statuses = allMaterials.map(materialStatus);
    const attention = statuses.filter((status) => status.kind !== "done").length;
    $gb("#gbWidgetMetrics").innerHTML = `
      <span><small>育成進捗</small><strong>${stageProgress}%</strong></span>
      <span><small>優先目標</small><strong>${priorityGoals}件</strong></span>
      <span><small>要確認素材</small><strong>${attention}種</strong></span>`;
    const favorites = allMaterials.filter((entry) => data.favoriteMaterials.includes(entry.materialId));
    $gb("#gbWidgetDetails").innerHTML = favorites.length ? favorites.map((entry) => {
      const status = materialStatus(entry);
      const owned = status.owned ?? data.inventory[entry.materialId]?.quantity;
      const detail = status.kind === "done" ? `所持 ${owned ?? "確認済み"} / 必要 ${entry.required}` : status.kind === "short" ? `所持 ${owned} / 必要 ${entry.required}（あと${status.shortage}）` : `必要 ${entry.required}・未確認`;
      return `<button type="button" class="gb-widget-material" data-widget-material="${escapeHtml(entry.materialId)}"><strong>★ ${escapeHtml(materialDefinition(entry).name)}</strong><span>${detail}</span></button>`;
    }).join("") : '<p class="gb-widget-empty">素材確認画面の☆から、ここに表示する素材を登録できます。</p>';
  }

  function renderGoals() {
    const container = $gb("#gbProgressGoals");
    const dialog = $gb("#granblueProgressDialog");
    const openGroups = new Set([...container.querySelectorAll(".gb-progress-group[open]")].map((details) => details.dataset.groupId));
    const previousScrollTop = dialog.scrollTop;
    container.innerHTML = master.groups.map((group) => {
      const bulkCurrentOptions = group.stages.map((stage) => `<option value="${escapeHtml(stage)}">${escapeHtml(stage)}</option>`).join("");
      const bulkTargetOptions = group.stages.slice(1).map((stage) => `<option value="${escapeHtml(stage)}">${escapeHtml(stage)}</option>`).join("");
      const rows = group.items.map((item) => {
        const key = entityKey(group.id, item);
        const current = data.progress[key] || "未設定";
        const goal = data.goals[key] || {};
        const currentIndex = group.stages.indexOf(current);
        const targets = group.stages.map((stage, index) => `<option value="${escapeHtml(stage)}" ${goal.target === stage ? "selected" : ""} ${index <= Math.max(0, currentIndex) ? "disabled" : ""}>${escapeHtml(stage)}</option>`).join("");
        return `<article class="gb-goal-row" data-entity-key="${escapeHtml(key)}" data-group-id="${escapeHtml(group.id)}">
          <strong>${escapeHtml(item)}</strong>
          <label>現在<select data-progress-current><option value="未設定">未設定</option>${group.stages.slice(1).map((stage) => `<option value="${escapeHtml(stage)}" ${current === stage ? "selected" : ""}>${escapeHtml(stage)}</option>`).join("")}</select></label>
          <label>目標<select data-progress-target><option value="">${escapeHtml(group.stages.at(-1))}（自動）</option>${targets}</select></label>
          <label class="gb-priority-toggle">優先<input data-progress-priority type="checkbox" ${["priority", "top"].includes(goal.priority) ? "checked" : ""}></label>
        </article>`;
      }).join("");
      return `<details class="gb-progress-group" data-group-id="${escapeHtml(group.id)}" ${openGroups.has(group.id) ? "open" : ""}>
        <summary><strong>${escapeHtml(group.name)}</strong><span>${group.items.filter((item) => data.progress[entityKey(group.id, item)] && data.progress[entityKey(group.id, item)] !== "未設定").length} / ${group.items.length}設定</span></summary>
        <div>
          <section class="gb-group-bulk" aria-label="${escapeHtml(group.name)}の一括設定">
            <strong>まとめて設定</strong>
            <div><label>現在<select data-bulk-current><option value="" selected disabled>選択</option>${bulkCurrentOptions}</select></label><button type="button" data-apply-group-bulk="current">適用</button></div>
            <div><label>目標<select data-bulk-target><option value="">最終強化（自動）</option>${bulkTargetOptions}</select></label><button type="button" data-apply-group-bulk="target">適用</button></div>
            <div><label>優先<select data-bulk-priority><option value="priority">優先にする</option><option value="normal">解除する</option></select></label><button type="button" data-apply-group-bulk="priority">適用</button></div>
          </section>
          ${rows}
        </div>
      </details>`;
    }).join("") + '<p class="gb-progress-help">現在が未設定の項目はそのままで問題ありません。目標を選ばない場合は、そのカテゴリの最終強化段階が自動目標になります。</p>';
    dialog.scrollTop = previousScrollTop;
  }

  function renderMaterials() {
    const aggregate = aggregateMaterials();
    const scopeLabels = { priority: "優先", all: "全体" };
    document.querySelectorAll("[data-material-scope]").forEach((button) => {
      const scope = button.dataset.materialScope;
      const summary = materialScopeSummary(scope);
      button.classList.toggle("active", scope === materialScope);
      button.innerHTML = `<strong>${scopeLabels[scope]}</strong><small>${summary.goals}目標・${summary.types}種類</small><span>必要数 ${summary.required.toLocaleString("ja-JP")}</span>`;
    });
    const unknownCount = aggregate.items.filter((entry) => materialStatus(entry).kind === "unknown").length;
    $gb("#gbUncheckedBadge").textContent = unknownCount;
    const uncheckedConfirmationMaterials = aggregate.items.filter((entry) => materialDefinition(entry).trackingMode === "check" && materialStatus(entry).kind !== "done");
    $gb("#gbCheckGeneralMaterialsButton").hidden = !uncheckedConfirmationMaterials.length;
    $gb("#gbCheckGeneralMaterialsButton").textContent = `確認素材 ${uncheckedConfirmationMaterials.length}種類を一括で所持済みにする`;
    $gb("#gbMaterialSummary").innerHTML = `
      <div class="gb-material-summary"><strong>${scopeLabels[materialScope]}の必要素材 ${aggregate.items.length}種類</strong><span>未確認 ${unknownCount}種類</span>${bulkUndo ? '<button type="button" data-undo-material-check>取り消す</button>' : ""}</div>
      ${aggregate.incomplete.length ? `<details class="gb-master-notice"><summary>素材データ未登録の段階 ${aggregate.incomplete.length}件</summary><p>推測値は表示していません。</p><ul>${aggregate.incomplete.map((label) => `<li>${escapeHtml(label)}</li>`).join("")}</ul></details>` : ""}`;
    $gb("#gbMaterialList").innerHTML = aggregate.items.length ? aggregate.items.map((entry) => {
      const material = materialDefinition(entry);
      const inventory = data.inventory[entry.materialId] || {};
      const mode = inventory.mode || "unknown";
      const status = materialStatus(entry);
      const statusText = status.kind === "unknown" ? "所持数を確認" : status.kind === "done" ? "✓ 必要数を確保" : "あと" + status.shortage;
      const allChecked = [...entry.goalKeys].every((goalKey) => data.checks[goalKey]?.[entry.materialId] === true);
      return `<article class="gb-material-row ${status.kind}" data-material-id="${escapeHtml(entry.materialId)}">
        <div class="gb-material-title">${materialIcon(material)}<button type="button" class="gb-material-favorite ${data.favoriteMaterials.includes(entry.materialId) ? "active" : ""}" data-material-favorite aria-label="${escapeHtml(material.name)}をウィジェットに表示" aria-pressed="${data.favoriteMaterials.includes(entry.materialId)}">★</button><strong>${escapeHtml(material.name)}</strong>${material.important ? "<b>重要</b>" : ""}<span>必要 ${entry.required}</span></div>
        <div class="gb-material-controls">
          <select data-material-mode aria-label="管理方法"><option value="unknown" ${mode === "unknown" ? "selected" : ""}>未確認</option><option value="quantity" ${mode === "quantity" ? "selected" : ""}>数量管理</option><option value="check" ${mode === "check" ? "selected" : ""}>達成チェック</option></select>
          ${mode === "quantity" ? `<div class="gb-quantity"><button type="button" data-quantity-step="-1">−</button><input data-material-quantity type="number" min="0" value="${inventory.quantity ?? ""}" placeholder="未確認"><button type="button" data-quantity-step="1">＋</button></div>` : ""}
          ${mode === "check" ? `<label class="gb-enough-check"><input data-material-enough type="checkbox" ${allChecked ? "checked" : ""}>必要数以上持っている</label>` : ""}
        </div>
        <small class="gb-material-status">${statusText}</small>
      </article>`;
    }).join("") : '<p class="gb-empty-note">この範囲に確認対象の素材はありません。進捗・目標から優先目標を設定してください。</p>';
  }

  function render() {
    renderWidget();
    $gb("#granblueProgressWelcome").hidden = data.started;
    $gb("#granblueProgressApp").hidden = !data.started;
    if (!data.started) return;
    document.querySelectorAll("[data-progress-view]").forEach((button) => button.classList.toggle("active", button.dataset.progressView === view));
    ["home", "goals", "materials"].forEach((name) => {
      $gb("#gbProgress" + name[0].toUpperCase() + name.slice(1)).hidden = view !== name;
    });
    renderHome();
    renderGoals();
    renderMaterials();
  }

  function setView(nextView) {
    view = nextView;
    render();
  }

  async function handleGoalChange(event) {
    const row = event.target.closest(".gb-goal-row");
    if (!row) return;
    const key = row.dataset.entityKey;
    const group = master.groups.find((entry) => entry.id === row.dataset.groupId);
    if (event.target.matches("[data-progress-current]")) {
      data.progress[key] = event.target.value;
      const goal = data.goals[key];
      if (goal?.target && group.stages.indexOf(goal.target) <= group.stages.indexOf(event.target.value)) {
        if (["priority", "top"].includes(goal.priority)) data.goals[key] = { target: "", priority: "priority" };
        else delete data.goals[key];
      }
    } else if (event.target.matches("[data-progress-target]")) {
      if (event.target.value) data.goals[key] = { target: event.target.value, priority: ["priority", "top"].includes(data.goals[key]?.priority) ? "priority" : "normal" };
      else if (["priority", "top"].includes(data.goals[key]?.priority)) data.goals[key] = { target: "", priority: "priority" };
      else delete data.goals[key];
    } else if (event.target.matches("[data-progress-priority]")) {
      if (event.target.checked) data.goals[key] = { target: data.goals[key]?.target || "", priority: "priority" };
      else if (data.goals[key]?.target) data.goals[key].priority = "normal";
      else delete data.goals[key];
    } else return;
    await saveData();
    render();
  }

  async function applyGroupBulk(event) {
    const button = event.target.closest("[data-apply-group-bulk]");
    if (!button) return;
    const details = button.closest(".gb-progress-group");
    const group = master.groups.find((entry) => entry.id === details?.dataset.groupId);
    if (!group) return;
    const type = button.dataset.applyGroupBulk;
    const select = details.querySelector(`[data-bulk-${type}]`);
    const value = select?.value ?? "";
    if (type === "current" && !value) return;
    const labels = { current: "現在の段階", target: "目標", priority: "優先度" };
    const displayValue = value || group.stages.at(-1) + "（自動）";
    if (!confirm(`${group.name}全員の${labels[type]}を「${displayValue}」へまとめて設定しますか？`)) return;
    let applied = 0;
    for (const item of group.items) {
      const key = entityKey(group.id, item);
      if (type === "current") {
        data.progress[key] = value;
        if (data.goals[key]?.target && group.stages.indexOf(data.goals[key].target) <= group.stages.indexOf(value)) {
          if (["priority", "top"].includes(data.goals[key].priority)) data.goals[key] = { target: "", priority: "priority" };
          else delete data.goals[key];
        }
        applied += 1;
      } else if (type === "target") {
        if (!value) {
          if (data.goals[key]) applied += 1;
          if (["priority", "top"].includes(data.goals[key]?.priority)) data.goals[key] = { target: "", priority: "priority" };
          else delete data.goals[key];
          continue;
        }
        const current = data.progress[key];
        if (!current || current === "未設定" || group.stages.indexOf(value) <= group.stages.indexOf(current)) continue;
        data.goals[key] = { target: value, priority: data.goals[key]?.priority || "normal" };
        applied += 1;
      } else if (type === "priority") {
        const current = data.progress[key];
        if (!current || current === "未設定") continue;
        if (value === "priority") data.goals[key] = { target: data.goals[key]?.target || "", priority: "priority" };
        else if (data.goals[key]?.target) data.goals[key].priority = "normal";
        else delete data.goals[key];
        applied += 1;
      }
    }
    await saveData();
    render();
    if (!applied) alert(type === "target" ? "現在の段階より先へ設定できる項目がありませんでした。" : "変更できる目標がありませんでした。");
  }

  async function handleMaterialChange(event) {
    const row = event.target.closest(".gb-material-row");
    if (!row) return;
    const materialId = row.dataset.materialId;
    const aggregateEntry = aggregateMaterials().items.find((entry) => entry.materialId === materialId);
    if (!aggregateEntry) return;
    data.inventory[materialId] ||= {};
    if (event.target.matches("[data-material-mode]")) {
      data.inventory[materialId].mode = event.target.value;
      if (event.target.value === "unknown") delete data.inventory[materialId].quantity;
    } else if (event.target.matches("[data-material-quantity]")) {
      data.inventory[materialId].mode = "quantity";
      data.inventory[materialId].quantity = event.target.value === "" ? "" : Math.max(0, Number(event.target.value) || 0);
    } else if (event.target.matches("[data-material-enough]")) {
      for (const goalKey of aggregateEntry.goalKeys) {
        data.checks[goalKey] ||= {};
        data.checks[goalKey][materialId] = event.target.checked;
      }
    } else return;
    await saveData();
    render();
  }

  async function stepQuantity(event) {
    const button = event.target.closest("[data-quantity-step]");
    if (!button) return;
    const row = button.closest(".gb-material-row");
    const materialId = row.dataset.materialId;
    const current = Number(data.inventory[materialId]?.quantity) || 0;
    data.inventory[materialId] = { ...(data.inventory[materialId] || {}), mode: "quantity", quantity: Math.max(0, current + Number(button.dataset.quantityStep)) };
    await saveData();
    render();
  }

  async function toggleMaterialFavorite(event) {
    const button = event.target.closest("[data-material-favorite]");
    if (!button) return false;
    const materialId = button.closest(".gb-material-row")?.dataset.materialId;
    if (!materialId) return false;
    if (data.favoriteMaterials.includes(materialId)) data.favoriteMaterials = data.favoriteMaterials.filter((id) => id !== materialId);
    else data.favoriteMaterials.push(materialId);
    await saveData();
    render();
    return true;
  }

  async function checkAllGeneralMaterials() {
    const entries = aggregateMaterials().items.filter((entry) => materialDefinition(entry).trackingMode === "check" && materialStatus(entry).kind !== "done");
    if (!entries.length) return;
    bulkUndo = { checks: structuredClone(data.checks), inventory: structuredClone(data.inventory) };
    for (const entry of entries) {
      data.inventory[entry.materialId] = { ...(data.inventory[entry.materialId] || {}), mode: "check" };
      for (const goalKey of entry.goalKeys) {
        data.checks[goalKey] ||= {};
        data.checks[goalKey][entry.materialId] = true;
      }
    }
    await saveData();
    render();
  }

  async function undoBulkCheck() {
    if (!bulkUndo) return;
    data.checks = bulkUndo.checks;
    data.inventory = bulkUndo.inventory;
    bulkUndo = null;
    await saveData();
    render();
  }

  async function initialize() {
    try {
      master = await fetch(chrome.runtime.getURL("granblue-progress-master.json")).then((response) => response.json());
    } catch (error) {
      console.error("進捗マスターを読み込めませんでした", error);
      return;
    }
    const saved = await chrome.storage.local.get(STORAGE_KEY);
    data = normalizeData(saved[STORAGE_KEY]);
    const migratedOpus = migrateLegacyOpusProgress();
    const migratedPriority = migratePriorityLevels();
    if (migratedOpus || migratedPriority) await saveData();
    $gb("#granblueProgressButton").addEventListener("click", () => {
      render();
      $gb("#granblueProgressDialog").showModal();
    });
    $gb("#gbWidgetSummary").addEventListener("click", () => {
      const summary = $gb("#gbWidgetSummary");
      const expanded = summary.getAttribute("aria-expanded") !== "true";
      summary.setAttribute("aria-expanded", String(expanded));
      $gb("#gbWidgetDetails").hidden = !expanded;
    });
    $gb("#gbWidgetDetails").addEventListener("click", (event) => {
      if (!event.target.closest("[data-widget-material]")) return;
      materialScope = "all";
      view = "materials";
      render();
      $gb("#granblueProgressDialog").showModal();
    });
    $gb("#closeGranblueProgressButton").addEventListener("click", () => $gb("#granblueProgressDialog").close());
    $gb("#startGranblueProgressButton").addEventListener("click", async () => {
      data.started = true;
      view = "goals";
      await saveData();
      render();
    });
    $gb("#skipGranblueProgressButton").addEventListener("click", () => $gb("#granblueProgressDialog").close());
    $gb(".gb-progress-tabs").addEventListener("click", (event) => {
      const button = event.target.closest("[data-progress-view]");
      if (button) setView(button.dataset.progressView);
    });
    $gb("#gbProgressHome").addEventListener("click", (event) => {
      const viewButton = event.target.closest("[data-go-view]");
      if (viewButton) setView(viewButton.dataset.goView);
      if (event.target.closest("[data-open-goal]")) {
        materialScope = "priority";
        setView("materials");
      }
    });
    $gb("#gbProgressGoals").addEventListener("change", handleGoalChange);
    $gb("#gbProgressGoals").addEventListener("click", applyGroupBulk);
    $gb(".gb-material-scope").addEventListener("click", (event) => {
      const button = event.target.closest("[data-material-scope]");
      if (!button) return;
      materialScope = button.dataset.materialScope;
      document.querySelectorAll("[data-material-scope]").forEach((item) => item.classList.toggle("active", item === button));
      renderMaterials();
    });
    $gb("#gbProgressMaterials").addEventListener("change", handleMaterialChange);
    $gb("#gbProgressMaterials").addEventListener("click", (event) => {
      if (event.target.closest("[data-material-favorite]")) { toggleMaterialFavorite(event); return; }
      if (event.target.closest("[data-quantity-step]")) stepQuantity(event);
      if (event.target.closest("[data-undo-material-check]")) undoBulkCheck();
    });
    $gb("#gbCheckGeneralMaterialsButton").addEventListener("click", checkAllGeneralMaterials);
    chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== "local" || !changes[STORAGE_KEY]) return;
      data = normalizeData(changes[STORAGE_KEY].newValue);
      if ($gb("#granblueProgressDialog").open) render();
      else renderWidget();
    });
    renderWidget();
  }

  initialize();
})();
