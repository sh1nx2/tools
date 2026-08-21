const DEFAULT_APPEARANCE = { actionColor: "#215c49", bookmarkOpacity: 66, useThemeCards: false, cardMaterial: "glass", tileColumns: 2, showHomeButton: true, showDeleteButton: true, showSplitViewControls: true, actionMenuPosition: "bottom", showTabRail: true, tabRailSide: "left", searchEngine: "web", searchSplitSide: "left", motionIntensity: "strong", interactionStyle: "lift", viewTransition: "fade", genreScrollStyle: "slim", soundEnabled: true, soundTheme: "wood", soundVolume: 40, showBackgroundOnlyButton: true, showBackgroundClock: true, showEventInNormalView: true, backgroundClockSize: 69, backgroundClockPositionX: 50, backgroundClockPositionY: 5.5 };
const DEFAULT_BACKGROUND = { image: "", opacity: 18, zoom: 100, x: 50, y: 0, fit: "height", layoutVersion: 2 };
const GAMEWITH_SCHEDULE_URL = "https://xn--bck3aza1a2if6kra4ee0hf.gamewith.jp/article/show/28687";
const GRANBLUE_ICON_IDS = new Set(["home", "quest", "rescue", "raid", "party", "enhance", "evolve", "inventory", "storage", "gacha", "boss", "high-difficulty", "coop-create", "coop-search", "solo", "sage", "drops", "weapon", "character", "summon", "event", "fire", "water", "earth", "wind", "light", "dark", "arcarum", "sandbox"]);
const ICON_CATEGORIES = {
  communication: new Set(["mail", "chat", "social", "phone", "people"]),
  media: new Set(["video", "music", "camera", "gamepad", "news", "headphones"]),
  work: new Set(["sheet", "document", "folder-generic", "cloud", "download", "tools", "code", "briefcase"]),
  lifestyle: new Set(["shop", "cart", "money", "bank", "travel", "map", "food", "book", "gift"])
};
const BUILTIN_ICONS = [
  ["home", "マイページ", '<path d="M3 11.5 12 4l9 7.5V21h-6v-6H9v6H3z"/>'],
  ["quest", "クエスト", '<path d="m14.5 4.5 5 5M13 6l5 5M4 20l6-6m2-8 6 6-8 8H4v-6z"/>'],
  ["rescue", "救援", '<path d="M12 3 4.5 6v5c0 4.7 3.1 8.2 7.5 10 4.4-1.8 7.5-5.3 7.5-10V6z"/><path d="M12 7v8m-4-4h8"/>'],
  ["raid", "マルチバトル", '<path d="m5 4 14 16M19 4 5 20M7 4l2 2m8-2-2 2M4 17l3 3m13-3-3 3"/>'],
  ["party", "編成", '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3.5 20c.5-4 2.4-6 5.5-6s5 2 5.5 6M14 15c3.8-.7 6 1 6.5 5"/>'],
  ["enhance", "強化", '<path d="m14 4 6 6-9 9H5v-6z"/><path d="m12 6 6 6M4 4l3 1-2 2z"/>'],
  ["evolve", "上限解放", '<path d="M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4"/><circle cx="12" cy="12" r="4"/>'],
  ["inventory", "リスト", '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'],
  ["storage", "倉庫", '<path d="M3 8h18v12H3zM5 4h14l2 4H3z"/><path d="M9 12h6"/>'],
  ["shop", "ショップ", '<path d="M5 8h14l-1 13H6zM8 9V7a4 4 0 0 1 8 0v2"/>'],
  ["gacha", "ガチャ", '<path d="M8 3h8l5 7-9 11L3 10z"/><path d="m8 3 4 7 4-7M3 10h18M12 10v11"/>'],
  ["boss", "高難度ボス", '<path d="M5 10c0-4 3-7 7-7s7 3 7 7v5l-3 5H8l-3-5z"/><path d="m8 4-3-1 1 4m10-3 3-1-1 4M9 12h.01M15 12h.01M9 17h6"/>'],
  ["high-difficulty", "高難度", '<path d="M12 3 3 20h18z"/><path d="M12 9v5m0 3h.01"/>'],
  ["coop-create", "共闘ルーム作成", '<path d="M4 6h10v14H4zM8 13h.01M17 8v8m-4-4h8"/>'],
  ["coop-search", "共闘ルーム検索", '<circle cx="10" cy="10" r="6"/><path d="m14.5 14.5 5 5M7 10h6M10 7v6"/>'],
  ["solo", "ソロ攻略", '<circle cx="9" cy="7" r="3"/><path d="M3.5 20c.5-4.5 2.3-7 5.5-7s5 2.5 5.5 7M17 5v10m-3-7h6"/>'],
  ["sage", "賢者", '<path d="M5 21c.5-5 2.8-8 7-8s6.5 3 7 8M8 12c-1.5-2-1-6 4-9 5 3 5.5 7 4 9"/><circle cx="12" cy="9" r="3"/><path d="M20 4v17M17.5 6.5 20 4l2.5 2.5M17 16h6"/>'],
  ["drops", "ドロップ情報", '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/><path d="M9 15c.5 1.5 1.5 2 3 2"/>'],
  ["weapon", "武器", '<path d="m15 4 5 5-10 10H5v-5zM13 6l5 5M4 20l3-3"/>'],
  ["character", "キャラクター", '<circle cx="12" cy="8" r="4"/><path d="M4 21c.7-5 3.3-7 8-7s7.3 2 8 7"/>'],
  ["summon", "召喚石", '<path d="m12 3 7 5v8l-7 5-7-5V8z"/><path d="m12 3 2 7-2 11-2-11zM5 8l5 2 9-2"/>'],
  ["event", "イベント", '<path d="M5 4v17M5 5h13l-3 4 3 4H5"/>'],
  ["fire", "火属性", '<path d="M13 3c1 5-3 5-3 9 0 2 1 3 2 4-4-1-5-4-3-8-5 4-5 12 3 13 7 1 11-2 11-7 0-4-2-8-5-11 0 4-2 6-4 7 1-5-1-7-2-11z"/>'],
  ["water", "水属性", '<path d="M12 3s7 8 7 12a7 7 0 0 1-14 0c0-4 7-12 7-12z"/><path d="M8 16c1 2 2 3 4 3"/>'],
  ["earth", "土属性", '<path d="M4 19h16L16 6l-4 6-2-3z"/><path d="M3 21h18"/>'],
  ["wind", "風属性", '<path d="M3 8h11c3 0 3-4 0-4-1 0-2 .5-2.5 1.5M3 12h16c3 0 3-4 0-4M3 16h10c3 0 3 4 0 4-1 0-2-.5-2.5-1.5"/>'],
  ["light", "光属性", '<circle cx="12" cy="12" r="4"/><path d="M12 2v3m0 14v3M2 12h3m14 0h3M5 5l2 2m10 10 2 2M19 5l-2 2M7 17l-2 2"/>'],
  ["dark", "闇属性", '<path d="M19 15.5A8 8 0 0 1 8.5 5 8.5 8.5 0 1 0 19 15.5z"/>'],
  ["arcarum", "アーカルム", '<circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5z"/>'],
  ["sandbox", "サンドボックス", '<path d="M3 18c3-5 6-5 9 0 3-5 6-5 9 0M4 21h16M12 4v9M8 7h8"/>'],
  ["guide", "攻略情報", '<path d="M4 5c3-1 5-.5 8 2v14c-3-2.5-5-3-8-2zM20 5c-3-1-5-.5-8 2v14c3-2.5 5-3 8-2z"/>'],
  ["ranking", "ランキング", '<path d="M8 4h8v5a4 4 0 0 1-8 0zM8 6H4c0 4 2 6 5 6M16 6h4c0 4-2 6-5 6M12 13v4M8 21h8M9 17h6"/>'],
  ["video", "動画", '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="m10 9 5 3-5 3z"/>'],
  ["sheet", "表・計算", '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M4 9h16M10 9v12M4 15h16"/>'],
  ["web", "Webサイト", '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 4 6 4 9s-1 6-4 9c-3-3-4-6-4-9s1-6 4-9"/>'],
  ["star", "お気に入り", '<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2L3 9.6l6.2-.9z"/>'],
  ["heart", "ハート", '<path d="M20.5 5.8c-2-2.2-5.4-1.8-7.1.4L12 8l-1.4-1.8C8.9 4 5.5 3.6 3.5 5.8 1.2 8.3 2 12 4.3 14.2L12 21l7.7-6.8C22 12 22.8 8.3 20.5 5.8z"/>'],
  ["search", "検索", '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m15.5 15.5 5 5"/>'],
  ["clock", "時計", '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/>'],
  ["calendar", "カレンダー", '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>'],
  ["mail", "メール", '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/>'],
  ["chat", "チャット", '<path d="M4 5h16v12H9l-5 4z"/><path d="M8 9h8m-8 4h5"/>'],
  ["social", "SNS", '<circle cx="6" cy="12" r="2.5"/><circle cx="18" cy="6" r="2.5"/><circle cx="18" cy="18" r="2.5"/><path d="m8.3 10.8 7.4-3.6m-7.4 6 7.4 3.6"/>'],
  ["phone", "電話", '<path d="M6 3h4l1 5-2.5 1.5a15 15 0 0 0 6 6L16 13l5 1v4c0 1.7-1.3 3-3 3C9.7 21 3 14.3 3 6c0-1.7 1.3-3 3-3z"/>'],
  ["people", "コミュニティ", '<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c.5-4 2.5-6 6-6s5.5 2 6 6m0-5c3-.3 5 1.5 6 5"/>'],
  ["music", "音楽", '<path d="M9 18V6l10-2v12"/><circle cx="6" cy="18" r="3"/><circle cx="16" cy="16" r="3"/>'],
  ["camera", "写真", '<rect x="3" y="6" width="18" height="14" rx="2"/><circle cx="12" cy="13" r="4"/><path d="m8 6 1.5-3h5L16 6"/>'],
  ["gamepad", "ゲーム", '<path d="M7 8h10c3 0 5 3 4 7l-1 4-5-3H9l-5 3-1-4c-1-4 1-7 4-7z"/><path d="M7 11v4m-2-2h4m7-1h.01m2 2h.01"/>'],
  ["news", "ニュース", '<path d="M4 4h16v16H4z"/><path d="M7 8h4v4H7zm7 0h3m-3 4h3M7 16h10"/>'],
  ["headphones", "音声", '<path d="M4 14v-2a8 8 0 0 1 16 0v2M4 14h4v7H6a2 2 0 0 1-2-2zm16 0h-4v7h2a2 2 0 0 0 2-2z"/>'],
  ["document", "文書", '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v5h5M9 12h6m-6 4h6"/>'],
  ["folder-generic", "フォルダ", '<path d="M3 6h7l2 2h9v12H3z"/>'],
  ["cloud", "クラウド", '<path d="M7 19h11a4 4 0 0 0 .5-8A7 7 0 0 0 5 10a4.5 4.5 0 0 0 2 9z"/>'],
  ["download", "ダウンロード", '<path d="M12 3v12m-5-5 5 5 5-5M4 20h16"/>'],
  ["tools", "ツール", '<path d="M14 6a4 4 0 0 0-5-3l2.5 2.5-3 3L6 6a4 4 0 0 0 4 5L4 17l3 3 6-6a4 4 0 0 0 5-5l-2.5 2.5-3-3z"/>'],
  ["code", "開発", '<path d="m8 6-5 6 5 6m8-12 5 6-5 6m-2-14-4 16"/>'],
  ["briefcase", "仕事", '<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V4h6v3m-12 5h18M10 12v2h4v-2"/>'],
  ["cart", "買い物", '<path d="M3 4h2l2 11h10l3-8H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>'],
  ["money", "お金", '<circle cx="12" cy="12" r="9"/><path d="M15.5 8.5c-1-1-2-1.5-3.5-1.5-2 0-3 1-3 2.5 0 3.5 6 1.5 6 5 0 1.5-1 2.5-3 2.5-1.5 0-2.8-.5-3.8-1.5M12 5v14"/>'],
  ["bank", "銀行", '<path d="m3 9 9-5 9 5M5 10h14M6 10v8m4-8v8m4-8v8m4-8v8M3 20h18"/>'],
  ["travel", "旅行", '<path d="M4 17 21 4l-5 16-4-6zM12 14l9-10"/>'],
  ["map", "地図", '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3zM9 3v15m6-12v15"/>'],
  ["food", "食事", '<path d="M7 3v8m-3-8v5c0 2 1 3 3 3s3-1 3-3V3M7 11v10m10-18v18m0-18c-4 2-4 8 0 9"/>'],
  ["book", "読書", '<path d="M4 5c3-1 5-.5 8 2v14c-3-2.5-5-3-8-2zM20 5c-3-1-5-.5-8 2v14c3-2.5 5-3 8-2z"/>'],
  ["gift", "プレゼント", '<path d="M3 10h18v11H3zM2 6h20v4H2zM12 6v15"/><path d="M12 6c-4 0-6-1-6-3 3-1 5 0 6 3zm0 0c4 0 6-1 6-3-3-1-5 0-6 3z"/>']
].map(([id, label, content]) => ({ id, label, content, category: GRANBLUE_ICON_IDS.has(id) ? "granblue" : Object.entries(ICON_CATEGORIES).find(([, ids]) => ids.has(id))?.[0] || "general" }));
const state = { bookmarks: [], topSites: [], openTabs: [], filter: "all", theme: "light", homeBookmarkId: null, currentUrl: "", splitView: null, collapsedFolders: new Set(), folderOrder: [], genres: [], favoriteTabIndex: 0, background: { ...DEFAULT_BACKGROUND }, genreBackgrounds: {}, backgroundTransition: "crossfade", backgroundPresets: [], backgroundPresetAssignments: {}, appearance: { ...DEFAULT_APPEARANCE }, eventSchedule: null, gameWithLastFetchedAt: 0 };
const $ = (selector) => document.querySelector(selector);
const list = $("#bookmarkList");
const emptyState = $("#emptyState");
let toastTimer;
let draggedBookmarkId = null;
let draggedFolder = null;
let movedToFolder = false;
let folderWasDragged = false;
let draggedNavigationKey = null;
let bulkMode = false;
const selectedBookmarkIds = new Set();
let lastUndoSnapshot = null;
let backgroundTransitionTimer;
let backgroundTransitionSequence = 0;
let viewTransitionTimer;
let bookmarkAutoScrollFrame = 0;
let bookmarkDragPointerY = null;
let clockDrag = null;
let uiAudioContext = null;
let editingCustomIcon = "";
let editingIconPreset = "";
let draggedBackgroundPresetId = null;
let tabShelfOpen = false;
let tabRefreshTimer = 0;

function normalizeBookmark(item) {
  if (!item || item.id === undefined || item.id === null || !item.title || !item.url) return null;
  return {
    ...item,
    id: String(item.id),
    title: String(item.title),
    url: String(item.url),
    folder: typeof item.folder === "string" && item.folder ? item.folder : "未分類",
    genreId: item.genreId === undefined || item.genreId === null || item.genreId === "" ? null : String(item.genreId),
    favorite: Boolean(item.favorite),
    customIcon: typeof item.customIcon === "string" && item.customIcon.startsWith("data:image/") ? item.customIcon : "",
    iconPreset: BUILTIN_ICONS.some((icon) => icon.id === item.iconPreset) ? item.iconPreset : ""
  };
}

function normalizeBookmarks(items) {
  return Array.isArray(items) ? items.map(normalizeBookmark).filter(Boolean) : [];
}

function normalizeGenre(genre) {
  if (!genre?.id || !genre?.name) return null;
  const iconColumns = Math.min(6, Math.max(2, Number(genre.iconColumns) || 4));
  return { ...genre, id: String(genre.id), name: String(genre.name), viewMode: genre.viewMode === "icons" ? "icons" : "list", iconColumns };
}

async function init() {
  let saved = await chrome.storage.local.get(["bookmarks", "theme", "homeBookmarkId", "collapsedFolders", "folderOrder", "genres", "favoriteTabIndex", "background", "genreBackgrounds", "backgroundTransition", "backgroundPresets", "backgroundPresetAssignments", "appearance", "eventSchedule", "gameWithLastFetchedAt", "tutorialSeen"]);
  const firstLaunch = !Array.isArray(saved.bookmarks);
  if (firstLaunch) {
    let packagedDefaults = {};
    try { packagedDefaults = await fetch(chrome.runtime.getURL("defaults.json")).then((response) => response.json()); }
    catch (error) { console.warn("初期データを読み込めませんでした", error); }
    const useTemplate = await chooseInitialSetup();
    const initialData = useTemplate && Array.isArray(packagedDefaults.bookmarks) ? packagedDefaults : {
      bookmarks: [], genres: [], favoriteTabIndex: 0, folderOrder: [], collapsedFolders: [],
      theme: "light", homeBookmarkId: null, appearance: { ...DEFAULT_APPEARANCE },
      eventSchedule: null, gameWithLastFetchedAt: 0, background: { ...DEFAULT_BACKGROUND },
      genreBackgrounds: {}, backgroundTransition: "crossfade"
    };
    saved = { ...initialData, ...saved, backgroundPresets: [], backgroundPresetAssignments: {}, tutorialSeen: false };
    await chrome.storage.local.set(saved);
  }
  state.bookmarks = normalizeBookmarks(saved.bookmarks);
  state.theme = saved.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  state.homeBookmarkId = saved.homeBookmarkId === undefined || saved.homeBookmarkId === null ? null : String(saved.homeBookmarkId);
  state.collapsedFolders = new Set(Array.isArray(saved.collapsedFolders) ? saved.collapsedFolders : []);
  state.folderOrder = Array.isArray(saved.folderOrder) ? saved.folderOrder : [];
  state.genres = Array.isArray(saved.genres) ? saved.genres.map(normalizeGenre).filter(Boolean) : [];
  state.favoriteTabIndex = Number.isInteger(saved.favoriteTabIndex) ? saved.favoriteTabIndex : 0;
  state.background = { ...state.background, ...(saved.background || {}) };
  state.genreBackgrounds = saved.genreBackgrounds && typeof saved.genreBackgrounds === "object" ? saved.genreBackgrounds : {};
  state.backgroundTransition = ["crossfade", "blur", "none"].includes(saved.backgroundTransition) ? saved.backgroundTransition : "crossfade";
  state.backgroundPresets = normalizeBackgroundPresets(saved.backgroundPresets);
  state.backgroundPresetAssignments = normalizeBackgroundPresetAssignments(saved.backgroundPresetAssignments, state.backgroundPresets);
  state.appearance = { ...state.appearance, ...(saved.appearance || {}) };
  state.eventSchedule = normalizeEventSchedule(saved.eventSchedule);
  state.gameWithLastFetchedAt = Number(saved.gameWithLastFetchedAt) || state.eventSchedule?.fetchedAt || 0;
  await refreshTopSites();
  await refreshOpenTabs();
  if (saved.background && saved.background.layoutVersion !== 2) {
    state.background.y = Number(saved.background.y ?? 50) - 50;
    state.background.layoutVersion = 2;
  }
  for (const [genreId, settings] of Object.entries(state.genreBackgrounds)) {
    state.genreBackgrounds[genreId] = normalizeBackgroundSettings(settings);
  }
  syncFolderOrder();
  await refreshCurrentUrl(false);
  applyTheme();
  applyAppearance();
  applyBackground();
  bindEvents();
  render();
  if (firstLaunch || saved.tutorialSeen === false) requestAnimationFrame(openTutorial);
  updateBackgroundClock();
  setInterval(updateBackgroundClock, 1000);
}

function chooseInitialSetup() {
  return new Promise((resolve) => {
    const dialog = $("#initialSetupDialog");
    const preventCancel = (event) => event.preventDefault();
    const finish = (useTemplate) => {
      dialog.removeEventListener("cancel", preventCancel);
      dialog.close();
      resolve(useTemplate);
    };
    dialog.addEventListener("cancel", preventCancel);
    $("#startWithTemplateButton").addEventListener("click", () => finish(true), { once: true });
    $("#startEmptyButton").addEventListener("click", () => finish(false), { once: true });
    dialog.showModal();
  });
}

function bindEvents() {
  $("#tabShelfButton").addEventListener("click", () => toggleTabShelf());
  $("#closeTabShelfButton").addEventListener("click", () => toggleTabShelf(false));
  $("#newTabButton").addEventListener("click", () => chrome.tabs.create({}));
  $("#tabSearchInput").addEventListener("input", renderOpenTabs);
  $("#addCurrentButton").addEventListener("click", addCurrentPage);
  $("#emptyAddButton").addEventListener("click", addCurrentPage);
  $("#searchForm").addEventListener("submit", handleSearchSubmit);
  $("#searchWebButton").addEventListener("click", () => selectSearchEngine("web"));
  $("#searchYouTubeButton").addEventListener("click", () => selectSearchEngine("youtube"));
  $("#searchLeftButton").addEventListener("click", () => selectSearchSplitSide("left"));
  $("#searchRightButton").addEventListener("click", () => selectSearchSplitSide("right"));
  updateSearchEngine();
  updateSearchSplitSide();
  $("#undoButton").addEventListener("click", undoLastAction);
  $("#toggleAllFoldersButton").addEventListener("click", toggleAllFolders);
  $("#filterBar").addEventListener("click", (event) => {
    const button = event.target.closest("[data-filter]");
    if (!button) return;
    state.filter = button.dataset.filter;
    render();
    playViewTransition();
  });
  $("#filterBar").addEventListener("wheel", handleFilterBarWheel, { passive: false });
  $("#filterBar").addEventListener("scroll", updateFilterScrollUI, { passive: true });
  $("#filterScrollLeft").addEventListener("click", () => scrollFilterBar(-1));
  $("#filterScrollRight").addEventListener("click", () => scrollFilterBar(1));
  window.addEventListener("resize", () => { updateFilterScrollUI(); updateIconGridSize(); });
  $("#decreaseIconColumns").addEventListener("click", () => changeViewColumns(-1));
  $("#increaseIconColumns").addEventListener("click", () => changeViewColumns(1));
  $("#themeButton").addEventListener("click", async () => { state.theme = state.theme === "dark" ? "light" : "dark"; state.backgroundPresetAssignments = {}; applyTheme(); await chrome.storage.local.set({ theme: state.theme, backgroundPresetAssignments: state.backgroundPresetAssignments }); });
  $("#backgroundButton").addEventListener("click", openBackgroundDialog);
  $("#backgroundOnlyButton").addEventListener("click", () => setBackgroundOnlyMode(!document.body.classList.contains("background-only")));
  $("#closeBackgroundButton").addEventListener("click", () => $("#backgroundDialog").close());
  $("#settingsButton").addEventListener("click", openSettingsDialog);
  $("#tutorialButton").addEventListener("click", openTutorial);
  $("#closeTutorialButton").addEventListener("click", closeTutorial);
  $("#finishTutorialButton").addEventListener("click", closeTutorial);
  $("#tutorialDialog").addEventListener("close", markTutorialSeen);
  $("#closeSettingsButton").addEventListener("click", () => { applyAppearance(); $("#settingsDialog").close(); });
  $("#settingsDialog").addEventListener("close", () => applyAppearance());
  $("#backgroundInput").addEventListener("change", loadBackgroundImage);
  $("#saveBackgroundPresetButton").addEventListener("click", saveCurrentBackgroundPreset);
  $("#extractThemeColorsButton").addEventListener("click", extractThemeColors);
  $("#backgroundMode").addEventListener("change", handleBackgroundModeChange);
  $("#backgroundTarget").addEventListener("change", handleBackgroundTargetChange);
  $("#backgroundTransition").addEventListener("change", markBackgroundPresetCustomized);
  $("#backgroundFit").addEventListener("change", () => { markBackgroundPresetCustomized(); previewBackgroundSettings(); });
  $("#useThemeCards").addEventListener("change", previewAppearanceSettings);
  $("#showHomeButton").addEventListener("change", previewAppearanceSettings);
  $("#showDeleteButton").addEventListener("change", previewAppearanceSettings);
  $("#showSplitViewControls").addEventListener("change", previewAppearanceSettings);
  $("#actionMenuPosition").addEventListener("change", previewAppearanceSettings);
  $("#showTabRail").addEventListener("change", previewAppearanceSettings);
  $("#tabRailSide").addEventListener("change", previewAppearanceSettings);
  $("#showBackgroundClock").addEventListener("change", previewAppearanceSettings);
  $("#showEventInNormalView").addEventListener("change", previewAppearanceSettings);
  $("#showBackgroundOnlyButton").addEventListener("change", previewAppearanceSettings);
  $("#cardMaterial").addEventListener("change", previewAppearanceSettings);
  $("#motionIntensity").addEventListener("change", previewAppearanceSettings);
  $("#interactionStyle").addEventListener("change", previewAppearanceSettings);
  $("#viewTransition").addEventListener("change", () => { previewAppearanceSettings(); playViewTransition(); });
  $("#genreScrollStyle").addEventListener("change", previewAppearanceSettings);
  $("#soundEnabled").addEventListener("change", previewSoundSetting);
  $("#soundTheme").addEventListener("change", previewSoundSetting);
  $("#appearanceCardPreview").addEventListener("pointerenter", () => playAppearancePreviewSound("hover"));
  $("#appearanceCardPreview").addEventListener("click", () => playAppearancePreviewSound("click"));
  $("#appearanceCardPreview").addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    playAppearancePreviewSound("click");
  });
  ["actionColor", "bookmarkOpacity", "soundVolume", "backgroundClockSize", "backgroundClockPositionX", "backgroundClockPositionY"].forEach((id) => $("#" + id).addEventListener("input", previewAppearanceSettings));
  $("#resetAppearanceButton").addEventListener("click", resetAppearancePreview);
  $("#resetBackgroundClockPositionButton").addEventListener("click", resetBackgroundClockPosition);
  $("#openEventScheduleButton").addEventListener("click", openEventScheduleDialog);
  $("#saveAppearanceButton").addEventListener("click", saveAppearance);
  $("#removeBackgroundButton").addEventListener("click", removeBackground);
  $("#saveBackgroundButton").addEventListener("click", saveBackground);
  ["Opacity", "Zoom", "PositionX", "PositionY"].forEach((name) => {
    $("#background" + name).addEventListener("input", () => { markBackgroundPresetCustomized(); previewBackgroundSettings(); });
  });
  $("#editForm").addEventListener("submit", saveEdit);
  $("#customIconInput").addEventListener("change", loadCustomIcon);
  $("#iconCategorySelect").addEventListener("change", renderBuiltinIconPicker);
  $("#removeCustomIconButton").addEventListener("click", () => { editingCustomIcon = ""; editingIconPreset = ""; updateCustomIconPreview(); });
  $("#folderSelect").addEventListener("change", handleFolderSelection);
  $("#bulkModeButton").addEventListener("click", () => toggleBulkMode(true));
  $("#closeBulkModeButton").addEventListener("click", () => toggleBulkMode(false));
  $("#selectVisibleButton").addEventListener("click", selectVisibleBookmarks);
  $("#openBulkEditButton").addEventListener("click", openBulkEditDialog);
  $("#closeBulkEditButton").addEventListener("click", () => $("#bulkEditDialog").close());
  $("#bulkFolderSelect").addEventListener("change", handleBulkFolderSelection);
  $("#saveBulkEditButton").addEventListener("click", applyBulkEdit);
  $("#bulkDeleteButton").addEventListener("click", deleteSelectedBookmarks);
  $("#suggestionsButton").addEventListener("click", openSuggestionsDialog);
  $("#closeSuggestionsButton").addEventListener("click", () => $("#suggestionsDialog").close());
  $("#moreButton").addEventListener("click", () => $("#dataDialog").showModal());
  $("#closeDataButton").addEventListener("click", () => $("#dataDialog").close());
  $("#exportButton").addEventListener("click", exportData);
  $("#exportCompleteButton").addEventListener("click", exportCompleteData);
  $("#exportSelectedButton").addEventListener("click", exportSelectedData);
  $("#importInput").addEventListener("change", importData);
  $("#normalEventSummary").addEventListener("click", toggleNormalEventDetails);
  $("#closeEventScheduleButton").addEventListener("click", () => $("#eventScheduleDialog").close());
  $("#fetchGameWithScheduleButton").addEventListener("click", fetchGameWithSchedule);
  $("#openGameWithScheduleButton").addEventListener("click", openGameWithScheduleSource);
  $("#saveEventScheduleButton").addEventListener("click", saveEventSchedule);
  $("#clearEventScheduleButton").addEventListener("click", clearEventSchedule);
  $("#splitLeftTab").addEventListener("click", () => focusSplitTab(state.splitView?.leftTabId));
  $("#splitRightTab").addEventListener("click", () => focusSplitTab(state.splitView?.rightTabId));
  chrome.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && changes.bookmarks) { state.bookmarks = normalizeBookmarks(changes.bookmarks.newValue); render(); }
  });
  chrome.tabs.onActivated.addListener(async () => { await refreshCurrentUrl(); scheduleOpenTabsRefresh(); });
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.active && changeInfo.url) refreshCurrentUrl();
    if (changeInfo.title !== undefined || changeInfo.url !== undefined || changeInfo.status !== undefined || changeInfo.audible !== undefined || changeInfo.pinned !== undefined || changeInfo.mutedInfo !== undefined) scheduleOpenTabsRefresh();
  });
  chrome.tabs.onCreated.addListener(scheduleOpenTabsRefresh);
  chrome.tabs.onRemoved.addListener(scheduleOpenTabsRefresh);
  chrome.tabs.onMoved.addListener(scheduleOpenTabsRefresh);
  chrome.tabs.onAttached.addListener(scheduleOpenTabsRefresh);
  chrome.tabs.onDetached.addListener(scheduleOpenTabsRefresh);
  chrome.windows.onFocusChanged.addListener(() => refreshCurrentUrl());
  $("#backgroundClock").addEventListener("pointerdown", startClockDrag);
  $("#backgroundClock").addEventListener("pointermove", moveClockDrag);
  $("#backgroundClock").addEventListener("pointerup", finishClockDrag);
  $("#backgroundClock").addEventListener("pointercancel", finishClockDrag);
  document.addEventListener("dragend", scheduleBookmarkDragCleanup, true);
  document.addEventListener("dragover", autoScrollBookmarkDrag, { passive: false });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && document.body.classList.contains("background-only") && !document.querySelector("dialog[open]")) setBackgroundOnlyMode(false);
  });
  document.addEventListener("click", (event) => {
    if (event.isTrusted && event.target.closest(".bookmark:not(.appearance-card-preview), #filterBar .filter")) playUISound("click");
  }, true);
}

async function toggleTabShelf(forceOpen = !tabShelfOpen) {
  tabShelfOpen = Boolean(forceOpen);
  $("#tabShelfButton").classList.toggle("active", tabShelfOpen);
  $("#tabShelfButton").setAttribute("aria-expanded", String(tabShelfOpen));
  $("#tabShelfButton").setAttribute("aria-label", tabShelfOpen ? "タブ一覧を閉じる" : "開いているタブを表示");
  document.body.classList.toggle("tab-shelf-open", tabShelfOpen);
  await refreshOpenTabs();
  if (tabShelfOpen) $("#tabSearchInput").focus();
}

function scheduleOpenTabsRefresh() {
  clearTimeout(tabRefreshTimer);
  tabRefreshTimer = setTimeout(() => refreshOpenTabs(), 80);
}

async function refreshOpenTabs(shouldRender = true) {
  try {
    state.openTabs = await chrome.tabs.query({ currentWindow: true });
    state.openTabs.sort((a, b) => a.index - b.index);
  } catch {
    state.openTabs = [];
  }
  if (shouldRender) renderOpenTabs();
}

function renderOpenTabs() {
  const query = $("#tabSearchInput").value.trim().toLocaleLowerCase("ja");
  const tabs = state.openTabs.filter((tab) => !query || `${tab.title || ""} ${tab.url || ""}`.toLocaleLowerCase("ja").includes(query));
  $("#emptyTabSearch").hidden = tabs.length > 0;
  const container = $("#openTabList");
  container.replaceChildren(...tabs.map(createOpenTabItem));
}

function createOpenTabItem(tab) {
  const row = document.createElement("article");
  row.className = `open-tab-item${tab.active ? " active" : ""}${tab.pinned ? " pinned" : ""}`;
  row.dataset.tabId = String(tab.id);

  const open = document.createElement("button");
  open.type = "button";
  open.className = "open-tab-main";
  open.title = tab.title || tab.url || "タブを開く";
  const favicon = document.createElement("span");
  favicon.className = "open-tab-favicon";
  const image = document.createElement("img");
  image.alt = "";
  image.src = faviconUrl(tab.url || "");
  image.addEventListener("error", () => { image.hidden = true; favicon.textContent = (tab.title || "?").slice(0, 1).toUpperCase(); }, { once: true });
  favicon.append(image);
  const text = document.createElement("span");
  text.className = "open-tab-text";
  const title = document.createElement("strong");
  title.textContent = tab.title || "無題のタブ";
  const detail = document.createElement("small");
  detail.textContent = `${tab.pinned ? "固定中 · " : ""}${safeDomain(tab.url || "")}`;
  text.append(title, detail);
  const audio = document.createElement("span");
  audio.className = "open-tab-audio-state";
  audio.textContent = tab.mutedInfo?.muted ? "🔇" : tab.audible ? "♪" : "";
  open.append(favicon, text, audio);
  open.addEventListener("click", async () => {
    try { await chrome.tabs.update(tab.id, { active: true }); }
    catch { showToast("タブを選択できませんでした"); }
  });

  const actions = document.createElement("div");
  actions.className = "open-tab-actions";
  actions.append(
    createTabAction(tab.pinned ? "固定を解除" : "タブを固定", tab.pinned ? "◆" : "◇", () => chrome.tabs.update(tab.id, { pinned: !tab.pinned })),
    createTabAction(tab.mutedInfo?.muted ? "ミュートを解除" : "タブをミュート", tab.mutedInfo?.muted ? "🔇" : "♬", () => chrome.tabs.update(tab.id, { muted: !tab.mutedInfo?.muted })),
    createTabAction("再読み込み", "↻", () => chrome.tabs.reload(tab.id)),
    createTabAction("タブを閉じる", "×", () => chrome.tabs.remove(tab.id), "close")
  );
  row.append(open, actions);
  return row;
}

function createTabAction(label, text, action, extraClass = "") {
  const button = document.createElement("button");
  button.type = "button";
  button.className = `open-tab-action ${extraClass}`.trim();
  button.title = label;
  button.setAttribute("aria-label", label);
  button.textContent = text;
  button.addEventListener("click", async () => {
    try { await action(); scheduleOpenTabsRefresh(); }
    catch { showToast(`${label}を実行できませんでした`); }
  });
  return button;
}

function scheduleBookmarkDragCleanup() {
  if (!draggedBookmarkId && !document.body.classList.contains("bookmark-dragging")) return;
  setTimeout(() => {
    if (draggedBookmarkId || document.body.classList.contains("bookmark-dragging")) clearBookmarkDragState();
  }, 0);
}

function autoScrollBookmarkDrag(event) {
  if (!draggedBookmarkId) return;
  bookmarkDragPointerY = event.clientY;
  if (!bookmarkAutoScrollFrame) bookmarkAutoScrollFrame = requestAnimationFrame(runBookmarkAutoScroll);
}

function runBookmarkAutoScroll() {
  bookmarkAutoScrollFrame = 0;
  if (!draggedBookmarkId || bookmarkDragPointerY === null) return;
  const edge = Math.min(140, Math.max(90, window.innerHeight * .24));
  const topDistance = edge - bookmarkDragPointerY;
  const bottomDistance = bookmarkDragPointerY - (window.innerHeight - edge);
  const distance = topDistance > 0 ? -topDistance : bottomDistance > 0 ? bottomDistance : 0;
  if (!distance) return;
  const strength = Math.min(1, Math.abs(distance) / edge);
  const previousScrollY = window.scrollY;
  window.scrollBy(0, Math.sign(distance) * Math.round(6 + strength * 28));
  if (window.scrollY === previousScrollY) return;
  bookmarkAutoScrollFrame = requestAnimationFrame(runBookmarkAutoScroll);
}

function getAudioContext() {
  if (!uiAudioContext) uiAudioContext = new AudioContext();
  if (uiAudioContext.state === "suspended") uiAudioContext.resume();
  return uiAudioContext;
}

function previewSoundSetting() {
  previewAppearanceSettings();
  if ($("#soundEnabled").checked) playUISound("click", Number($("#soundVolume").value), $("#soundTheme").value);
}

function playAppearancePreviewSound(type) {
  if (!$("#soundEnabled").checked) return;
  playUISound(type, Number($("#soundVolume").value), $("#soundTheme").value);
}

function playUISound(type, previewVolume = null, previewTheme = null) {
  if (previewVolume === null && !state.appearance.soundEnabled) return;
  try {
    const context = getAudioContext();
    if (context.state === "suspended" && !navigator.userActivation?.isActive) return;
    const now = context.currentTime;
    const volume = Math.min(100, Math.max(1, previewVolume ?? state.appearance.soundVolume ?? 40)) / 100;
    const theme = previewTheme || state.appearance.soundTheme || "wood";
    const profiles = {
      wood: { wave: "triangle", start: type === "hover" ? 720 : 390, end: type === "hover" ? 540 : 245, duration: type === "hover" ? .055 : .12, level: type === "hover" ? .12 : .23 },
      drop: { wave: "sine", start: type === "hover" ? 640 : 430, end: type === "hover" ? 860 : 760, duration: type === "hover" ? .07 : .13, level: type === "hover" ? .12 : .2 },
      glass: { wave: "sine", start: type === "hover" ? 1320 : 1480, end: type === "hover" ? 980 : 820, duration: type === "hover" ? .08 : .18, level: type === "hover" ? .08 : .15 },
      digital: { wave: "square", start: type === "hover" ? 920 : 780, end: type === "hover" ? 620 : 390, duration: type === "hover" ? .04 : .075, level: type === "hover" ? .045 : .075 },
      click: { wave: "square", start: type === "hover" ? 560 : 480, end: type === "hover" ? 420 : 310, duration: type === "hover" ? .025 : .05, level: type === "hover" ? .035 : .065 }
    };
    const profile = profiles[theme] || profiles.wood;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = profile.wave;
    oscillator.frequency.setValueAtTime(profile.start, now);
    oscillator.frequency.exponentialRampToValueAtTime(profile.end, now + profile.duration * .9);
    gain.gain.setValueAtTime(Math.max(.0001, volume * profile.level), now);
    gain.gain.exponentialRampToValueAtTime(.0001, now + profile.duration);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + profile.duration + .01);
  } catch { /* Audio may be unavailable until Chrome receives a user gesture. */ }
}

function handleFilterBarWheel(event) {
  const bar = $("#filterBar");
  const maxScroll = bar.scrollWidth - bar.clientWidth;
  if (maxScroll <= 0) return;
  const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
  const canMove = delta < 0 ? bar.scrollLeft > 0 : bar.scrollLeft < maxScroll;
  if (!canMove) return;
  event.preventDefault();
  bar.scrollBy({ left: delta, behavior: "smooth" });
}

function scrollFilterBar(direction) {
  const bar = $("#filterBar");
  bar.scrollBy({ left: direction * Math.max(120, bar.clientWidth * .62), behavior: "smooth" });
}

function updateFilterScrollUI() {
  const bar = $("#filterBar");
  const shell = $("#filterScrollShell");
  const maxScroll = Math.max(0, bar.scrollWidth - bar.clientWidth);
  const canScrollLeft = bar.scrollLeft > 2;
  const canScrollRight = bar.scrollLeft < maxScroll - 2;
  shell.classList.toggle("has-overflow", maxScroll > 2);
  shell.classList.toggle("can-scroll-left", canScrollLeft);
  shell.classList.toggle("can-scroll-right", canScrollRight);
  $("#filterScrollLeft").disabled = !canScrollLeft;
  $("#filterScrollRight").disabled = !canScrollRight;
}

function setBackgroundOnlyMode(enabled) {
  document.body.classList.toggle("background-only", enabled);
  const button = $("#backgroundOnlyButton");
  button.title = enabled ? "ブックマーク表示に戻る" : "背景だけを表示";
  button.setAttribute("aria-label", button.title);
  button.setAttribute("aria-pressed", String(enabled));
  button.focus();
}

function updateBackgroundClock() {
  const now = new Date();
  $("#backgroundClockTime").textContent = now.toLocaleTimeString("ja-JP", { hour: "2-digit", minute: "2-digit" });
  $("#backgroundClockDate").textContent = now.toLocaleDateString("ja-JP", { month: "short", day: "numeric", weekday: "short" });
  updateEventCountdown(now);
}

function normalizeEventSchedule(value) {
  if (!value || typeof value !== "object") return null;
  const entries = Array.isArray(value.entries) ? value.entries.filter((entry) => entry?.label && !Number.isNaN(Date.parse(entry.start)) && !Number.isNaN(Date.parse(entry.end))).map((entry) => ({ label: String(entry.label), start: new Date(entry.start).toISOString(), end: new Date(entry.end).toISOString() })).sort((a, b) => new Date(a.start) - new Date(b.start)) : [];
  const start = !Number.isNaN(Date.parse(value.start)) ? new Date(value.start).toISOString() : entries[0]?.start;
  const end = !Number.isNaN(Date.parse(value.end)) ? new Date(value.end).toISOString() : entries.at(-1)?.end;
  if (!start || !end) return null;
  return { title: String(value.title || "イベント"), attribute: String(value.attribute || ""), start, end, entries, sourceUrl: value.sourceUrl || "", fetchedAt: Number(value.fetchedAt) || 0 };
}

function updateEventCountdown(now = new Date()) {
  const normalPanel = $("#normalEventPanel");
  const schedule = state.eventSchedule;
  if (!schedule) { normalPanel.hidden = true; return; }
  const current = schedule.entries.find((entry) => new Date(entry.start) <= now && now <= new Date(entry.end));
  const next = schedule.entries.find((entry) => new Date(entry.start) > now);
  let text = "";
  if (current) text = `${current.label} 開催中`;
  else if (next) text = `${next.label}まで ${formatCountdown(new Date(next.start) - now)}`;
  else if (now < new Date(schedule.start)) text = `開催まで ${formatCountdown(new Date(schedule.start) - now)}`;
  else if (now <= new Date(schedule.end)) text = "開催中";
  renderNormalEventPanel(schedule, now, text, normalPanel);
}

function renderNormalEventPanel(schedule, now, text, panel) {
  const visible = state.appearance.showEventInNormalView !== false && Boolean(text);
  panel.hidden = !visible;
  if (!visible) return;
  const upcoming = schedule.entries.filter((entry) => new Date(entry.end) >= now);
  const rows = upcoming.length ? upcoming.slice(0, 3) : [{ label: "全体期間", start: schedule.start, end: schedule.end }];
  $("#normalEventTitle").textContent = schedule.title;
  $("#normalEventCountdown").textContent = text;
  $("#normalEventNextDate").textContent = rows[0] ? `${rows[0].label} ${formatEventDate(rows[0].start)}` : "";
  const rowElements = rows.map((entry) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "normal-event-row";
    const active = new Date(entry.start) <= now && now <= new Date(entry.end);
    row.innerHTML = "<strong></strong><span></span>";
    row.querySelector("strong").textContent = entry.label;
    row.querySelector("span").textContent = active ? `開催中・${formatEventDate(entry.start)}` : formatEventDate(entry.start);
    row.addEventListener("click", openEventScheduleDialog);
    return row;
  });
  $("#normalEventDetails").replaceChildren(...rowElements);
}

function toggleNormalEventDetails() {
  const details = $("#normalEventDetails");
  const expanded = details.hidden;
  details.hidden = !expanded;
  $("#normalEventSummary").setAttribute("aria-expanded", String(expanded));
}

function formatEventDate(value) {
  return new Date(value).toLocaleString("ja-JP", { month: "numeric", day: "numeric", weekday: "short", hour: "2-digit", minute: "2-digit" });
}

function formatCountdown(milliseconds) {
  const totalMinutes = Math.max(0, Math.floor(milliseconds / 60000));
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor(totalMinutes % 1440 / 60);
  const minutes = totalMinutes % 60;
  return days ? `${days}日 ${hours}時間` : hours ? `${hours}時間 ${minutes}分` : `${minutes}分`;
}

async function openEventScheduleDialog() {
  if ($("#settingsDialog").open) await saveAppearance();
  loadEventScheduleEditor(state.eventSchedule);
  renderEventScheduleSummary(state.eventSchedule);
  $("#eventScheduleDialog").showModal();
}

function loadEventScheduleEditor(schedule) {
  $("#eventScheduleTitle").value = schedule?.title || "";
  $("#eventScheduleAttribute").value = schedule?.attribute || "";
  $("#eventScheduleStart").value = toDateTimeLocal(schedule?.start);
  $("#eventScheduleEnd").value = toDateTimeLocal(schedule?.end);
  $("#eventScheduleRows").value = (schedule?.entries || []).map((entry) => `${entry.label} | ${toDateTimeLocal(entry.start)} | ${toDateTimeLocal(entry.end)}`).join("\n");
  $("#scheduleSourceStatus").textContent = schedule?.fetchedAt ? `GameWithから取得：${new Date(schedule.fetchedAt).toLocaleString("ja-JP")}` : "手動入力または未取得";
}

function toDateTimeLocal(value) {
  if (!value || Number.isNaN(Date.parse(value))) return "";
  const date = new Date(value);
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
}

function readEventScheduleEditor() {
  const startValue = $("#eventScheduleStart").value;
  const endValue = $("#eventScheduleEnd").value;
  if (!startValue || !endValue || new Date(startValue) >= new Date(endValue)) throw new Error("全体の開始・終了日時を確認してください");
  const entries = $("#eventScheduleRows").value.split(/\r?\n/).filter((line) => line.trim()).map((line) => {
    const [label, start, end] = line.split("|").map((part) => part?.trim());
    if (!label || !start || !end || Number.isNaN(Date.parse(start)) || Number.isNaN(Date.parse(end)) || new Date(start) >= new Date(end)) throw new Error(`詳細日程を確認してください：${line}`);
    return { label, start: new Date(start).toISOString(), end: new Date(end).toISOString() };
  }).sort((a, b) => new Date(a.start) - new Date(b.start));
  return { title: $("#eventScheduleTitle").value.trim() || "イベント", attribute: $("#eventScheduleAttribute").value.trim(), start: new Date(startValue).toISOString(), end: new Date(endValue).toISOString(), entries, sourceUrl: state.eventSchedule?.sourceUrl || "", fetchedAt: state.eventSchedule?.fetchedAt || 0 };
}

async function saveEventSchedule() {
  try {
    state.eventSchedule = readEventScheduleEditor();
    await chrome.storage.local.set({ eventSchedule: state.eventSchedule });
    updateEventCountdown();
    $("#eventScheduleDialog").close();
    showToast("古戦場の日程を保存しました");
  } catch (error) { showToast(error.message || "日程を保存できませんでした"); }
}

async function clearEventSchedule() {
  if (state.eventSchedule && !confirm("保存している古戦場の日程を削除しますか？")) return;
  state.eventSchedule = null;
  await chrome.storage.local.remove("eventSchedule");
  updateEventCountdown();
  $("#eventScheduleDialog").close();
  showToast("古戦場の日程を削除しました");
}

function renderEventScheduleSummary(schedule) {
  const summary = $("#scheduleSummary");
  if (!schedule) { summary.hidden = true; summary.replaceChildren(); return; }
  const rows = [{ label: "全体期間", start: schedule.start, end: schedule.end }, ...schedule.entries];
  summary.replaceChildren(...rows.map((entry) => {
    const row = document.createElement("div");
    row.innerHTML = `<strong></strong><span></span>`;
    row.querySelector("strong").textContent = entry.label;
    row.querySelector("span").textContent = `${formatEventDate(entry.start)} ～ ${formatEventDate(entry.end)}`;
    return row;
  }));
  summary.hidden = false;
}

async function fetchGameWithSchedule() {
  const lastFetched = state.gameWithLastFetchedAt;
  if (Date.now() - lastFetched < 24 * 60 * 60 * 1000) return showToast(`次回更新は${new Date(lastFetched + 86400000).toLocaleString("ja-JP")}以降です`);
  try {
    const granted = await chrome.permissions.request({ origins: ["https://*.gamewith.jp/*"] });
    if (!granted) return showToast("GameWithへのアクセスが許可されませんでした");
    const response = await fetch(GAMEWITH_SCHEDULE_URL, { cache: "no-store", credentials: "omit" });
    if (!response.ok) throw new Error();
    const schedule = parseGameWithSchedule(await response.text());
    state.gameWithLastFetchedAt = Date.now();
    state.eventSchedule = { ...schedule, sourceUrl: GAMEWITH_SCHEDULE_URL, fetchedAt: state.gameWithLastFetchedAt };
    await chrome.storage.local.set({ eventSchedule: state.eventSchedule, gameWithLastFetchedAt: state.gameWithLastFetchedAt });
    loadEventScheduleEditor(state.eventSchedule);
    renderEventScheduleSummary(state.eventSchedule);
    updateEventCountdown();
    showToast("GameWithから日程を更新しました");
  } catch { showToast("日程を取得できませんでした。手動入力を利用してください"); }
}

function parseGameWithSchedule(html) {
  const documentNode = new DOMParser().parseFromString(html, "text/html");
  const pageText = documentNode.body.textContent.replace(/\s+/g, " ");
  const overallRow = [...documentNode.querySelectorAll("tr")].find((row) => row.textContent.includes("全体期間"));
  if (!overallRow) throw new Error();
  const overallDates = parseJapaneseDates(overallRow.textContent);
  if (overallDates.length < 2) throw new Error();
  const year = overallDates[0].getFullYear();
  const month = overallDates[0].getMonth() + 1;
  const rules = ["予選集計", "インターバル", "SPバトル", "1戦目", "2戦目", "3戦目", "4戦目", "予選"];
  const entries = [];
  for (const row of documentNode.querySelectorAll("tr")) {
    const text = row.textContent.replace(/\s+/g, " ").trim();
    const label = rules.find((rule) => text.includes(rule));
    if (!label || entries.some((entry) => entry.label === label)) continue;
    const dates = parseJapaneseDates(text, year, month);
    if (dates.length >= 2) entries.push({ label, start: dates[0].toISOString(), end: dates[1].toISOString() });
  }
  const attribute = pageText.match(/([火水土風光闇])有利古戦場/)?.[1] || "";
  return { title: `${month}月${attribute ? attribute + "有利" : ""}古戦場`, attribute, start: overallDates[0].toISOString(), end: overallDates[1].toISOString(), entries: entries.sort((a, b) => new Date(a.start) - new Date(b.start)) };
}

function parseJapaneseDates(text, defaultYear = new Date().getFullYear(), defaultMonth = 1) {
  const dates = [];
  const pattern = /(?:(\d{4})年)?\s*(?:(\d{1,2})月)?\s*(\d{1,2})日(?:\([^)]*\))?\s*(\d{1,2}):(\d{2})/g;
  for (const match of text.matchAll(pattern)) {
    const year = Number(match[1] || defaultYear);
    const month = Number(match[2] || defaultMonth);
    dates.push(new Date(year, month - 1, Number(match[3]), Number(match[4]), Number(match[5])));
  }
  return dates;
}

async function openGameWithScheduleSource() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (tab?.id) chrome.tabs.update(tab.id, { url: state.eventSchedule?.sourceUrl || GAMEWITH_SCHEDULE_URL });
}

function resetBackgroundClockPosition() {
  $("#backgroundClockPositionX").value = DEFAULT_APPEARANCE.backgroundClockPositionX;
  $("#backgroundClockPositionY").value = DEFAULT_APPEARANCE.backgroundClockPositionY;
  previewAppearanceSettings();
}

function startClockDrag(event) {
  if (!document.body.classList.contains("background-only") || event.button !== 0) return;
  const clock = $("#backgroundClock");
  const rect = clock.getBoundingClientRect();
  clockDrag = { pointerId: event.pointerId, offsetX: event.clientX - rect.left, offsetY: event.clientY - rect.top, moved: false };
  clock.setPointerCapture(event.pointerId);
  clock.classList.add("dragging");
  event.preventDefault();
}

function moveClockDrag(event) {
  if (!clockDrag || clockDrag.pointerId !== event.pointerId) return;
  clockDrag.moved = true;
  const clock = $("#backgroundClock");
  const rect = clock.getBoundingClientRect();
  const availableX = Math.max(window.innerWidth - rect.width, 1);
  const availableY = Math.max(window.innerHeight - rect.height, 1);
  let left = Math.min(availableX, Math.max(0, event.clientX - clockDrag.offsetX));
  let top = Math.min(availableY, Math.max(0, event.clientY - clockDrag.offsetY));
  const snapDistance = 12;
  const snapX = [0, availableX / 2, availableX].find((point) => Math.abs(left - point) <= snapDistance);
  const snapY = [0, availableY / 2, availableY].find((point) => Math.abs(top - point) <= snapDistance);
  if (snapX !== undefined) left = snapX;
  if (snapY !== undefined) top = snapY;
  const x = Math.round(left / availableX * 1000) / 10;
  const y = Math.round(top / availableY * 1000) / 10;
  $("#backgroundClockPositionX").value = x;
  $("#backgroundClockPositionY").value = y;
  applyClockPosition(x, y);
  updateClockGuide("#clockGuideX", snapX === undefined ? null : left + rect.width / 2, "left");
  updateClockGuide("#clockGuideY", snapY === undefined ? null : top + rect.height / 2, "top");
  event.preventDefault();
}

function updateClockGuide(selector, position, property) {
  const guide = $(selector);
  guide.classList.toggle("visible", position !== null);
  if (position !== null) guide.style[property] = `${position}px`;
}

async function finishClockDrag(event) {
  if (!clockDrag || clockDrag.pointerId !== event.pointerId) return;
  const moved = clockDrag.moved;
  clockDrag = null;
  $("#backgroundClock").classList.remove("dragging");
  $("#clockGuideX").classList.remove("visible");
  $("#clockGuideY").classList.remove("visible");
  if (moved) {
    state.appearance.backgroundClockPositionX = Number($("#backgroundClockPositionX").value);
    state.appearance.backgroundClockPositionY = Number($("#backgroundClockPositionY").value);
    await chrome.storage.local.set({ appearance: state.appearance });
  }
}

function applyClockPosition(x, y) {
  const root = document.documentElement;
  root.style.setProperty("--background-clock-x", `${x}%`);
  root.style.setProperty("--background-clock-y", `${y}%`);
  root.style.setProperty("--background-clock-translate-x", `${-x}%`);
  root.style.setProperty("--background-clock-translate-y", `${-y}%`);
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  $("#themeButton").textContent = state.theme === "dark" ? "☀" : "☾";
  applyAppearance();
}

function applyAppearance(settings = state.appearance) {
  const root = document.documentElement;
  root.style.setProperty("--action-color", settings.actionColor);
  root.style.setProperty("--accent", settings.actionColor);
  root.style.setProperty("--accent-hover", settings.actionColor);
  root.style.setProperty("--action-text", contrastText(settings.actionColor));
  root.style.setProperty("--bookmark-opacity", `${settings.bookmarkOpacity}%`);
  const pageBase = state.theme === "dark" ? "#171b19" : "#f4f3ef";
  const cardColor = settings.useThemeCards ? settings.actionColor : (state.theme === "dark" ? "#202522" : "#fffefb");
  root.style.setProperty("--ui-base", cardColor);
  root.style.setProperty("--ui-ink", contrastText(blendHex(cardColor, pageBase, settings.bookmarkOpacity / 100)));
  root.style.setProperty("--bookmark-background", hexToRgba(cardColor, settings.bookmarkOpacity / 100));
  root.style.setProperty("--bookmark-hover-background", hexToRgba(cardColor, Math.min(1, settings.bookmarkOpacity / 100 + .12)));
  document.body.dataset.cardMaterial = ["glass", "flat"].includes(settings.cardMaterial) ? settings.cardMaterial : "glass";
  document.body.dataset.motion = ["weak", "medium", "strong"].includes(settings.motionIntensity) ? settings.motionIntensity : "medium";
  document.body.dataset.interactionStyle = ["lift", "slide", "tilt", "spotlight", "icon", "invert"].includes(settings.interactionStyle) ? settings.interactionStyle : "lift";
  document.body.dataset.viewTransition = ["none", "fade", "slide", "scale", "cascade"].includes(settings.viewTransition) ? settings.viewTransition : "fade";
  document.body.dataset.actionPosition = settings.actionMenuPosition === "top" ? "top" : "bottom";
  document.body.dataset.tabRailSide = settings.tabRailSide === "right" ? "right" : "left";
  document.body.dataset.genreScroll = ["slim", "arrows"].includes(settings.genreScrollStyle) ? settings.genreScrollStyle : "slim";
  document.body.classList.toggle("theme-colored-bookmarks", Boolean(settings.useThemeCards));
  document.body.classList.toggle("hide-home-buttons", !settings.showHomeButton);
  document.body.classList.toggle("hide-delete-buttons", !settings.showDeleteButton);
  document.body.classList.toggle("hide-split-view-controls", settings.showSplitViewControls !== true);
  document.body.classList.toggle("hide-tab-rail", settings.showTabRail === false);
  document.body.classList.toggle("hide-background-clock", settings.showBackgroundClock === false);
  document.body.classList.toggle("hide-normal-event", settings.showEventInNormalView === false);
  document.body.classList.toggle("hide-background-only-button", settings.showBackgroundOnlyButton !== true);
  root.style.setProperty("--background-clock-size", `${Number(settings.backgroundClockSize) || DEFAULT_APPEARANCE.backgroundClockSize}px`);
  const clockX = Number.isFinite(Number(settings.backgroundClockPositionX)) ? Number(settings.backgroundClockPositionX) : DEFAULT_APPEARANCE.backgroundClockPositionX;
  const clockY = Number.isFinite(Number(settings.backgroundClockPositionY)) ? Number(settings.backgroundClockPositionY) : DEFAULT_APPEARANCE.backgroundClockPositionY;
  applyClockPosition(clockX, clockY);
  updateSearchEngine();
  updateSearchSplitSide();
  updateEventCountdown();
  requestAnimationFrame(updateFilterScrollUI);
}

function hexToRgba(hex, alpha) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function blendHex(foreground, background, alpha) {
  const channels = (hex) => {
    const value = hex.replace("#", "");
    return [0, 2, 4].map((start) => parseInt(value.slice(start, start + 2), 16));
  };
  const front = channels(foreground);
  const back = channels(background);
  return `#${front.map((value, index) => Math.round(value * alpha + back[index] * (1 - alpha)).toString(16).padStart(2, "0")).join("")}`;
}

function contrastText(hex) {
  const value = hex.replace("#", "");
  const r = parseInt(value.slice(0, 2), 16) / 255;
  const g = parseInt(value.slice(2, 4), 16) / 255;
  const b = parseInt(value.slice(4, 6), 16) / 255;
  const luminance = .2126 * r + .7152 * g + .0722 * b;
  return luminance > .58 ? "#18201c" : "#ffffff";
}

async function applyBackground() {
  const container = $("#customBackground");
  const layers = [...container.querySelectorAll(".background-layer")];
  const settings = getActiveBackground();
  const source = settings.image || "";
  const signature = JSON.stringify([source, settings.opacity, settings.zoom, settings.x, settings.y, settings.fit]);
  container.dataset.transition = state.backgroundTransition;
  if (container.dataset.signature === signature) return;
  container.dataset.signature = signature;
  container.classList.toggle("has-image", Boolean(source));
  document.body.classList.toggle("background-active", Boolean(source));
  clearTimeout(backgroundTransitionTimer);
  const transitionSequence = ++backgroundTransitionSequence;

  const current = layers.find((layer) => layer.classList.contains("active")) || layers[0];
  const next = layers.find((layer) => layer !== current);
  const configure = (layer) => {
    if (source) layer.src = source;
    else layer.removeAttribute("src");
    layer.style.setProperty("--layer-opacity", String(settings.opacity / 100));
    setBackgroundImageLayout(layer, settings.zoom, settings.x, settings.y, settings.fit);
  };
  const waitForImage = async (layer) => {
    if (!source || (layer.complete && layer.naturalWidth)) return true;
    try { await layer.decode(); return layer.naturalWidth > 0; } catch { return false; }
  };

  if (!current.getAttribute("src")) {
    current.classList.remove("active", "blur-hidden");
    configure(current);
    if (!await waitForImage(current)) { container.dataset.signature = ""; return; }
    if (transitionSequence !== backgroundTransitionSequence) return;
    next.classList.remove("active", "blur-hidden");
    next.removeAttribute("src");
    if (state.backgroundTransition === "none") current.classList.toggle("active", Boolean(source));
    else {
      void current.offsetWidth;
      requestAnimationFrame(() => {
        if (transitionSequence === backgroundTransitionSequence) current.classList.toggle("active", Boolean(source));
      });
    }
    return;
  }

  next.classList.remove("active", "blur-hidden");
  configure(next);
  if (!await waitForImage(next)) { container.dataset.signature = ""; return; }
  if (transitionSequence !== backgroundTransitionSequence) return;

  if (state.backgroundTransition === "none") {
    current.classList.remove("active", "blur-hidden");
    current.removeAttribute("src");
    next.classList.toggle("active", Boolean(source));
    return;
  }

  next.classList.toggle("blur-hidden", state.backgroundTransition === "blur");
  void next.offsetWidth;
  requestAnimationFrame(() => {
    if (transitionSequence !== backgroundTransitionSequence) return;
    current.classList.remove("active");
    current.classList.toggle("blur-hidden", state.backgroundTransition === "blur");
    next.classList.toggle("active", Boolean(source));
    next.classList.remove("blur-hidden");
  });
  backgroundTransitionTimer = setTimeout(() => {
    if (transitionSequence !== backgroundTransitionSequence) return;
    current.classList.remove("blur-hidden");
    current.removeAttribute("src");
  }, 620);
}

function openBackgroundDialog() {
  renderBackgroundTargets();
  $("#applyBackgroundAdjustmentsToAll").checked = false;
  const backgroundKey = getActiveBackgroundKey();
  $("#backgroundTarget").value = backgroundKey || "__all__";
  loadBackgroundTarget(backgroundKey);
  $("#backgroundTransition").value = state.backgroundTransition;
  renderBackgroundPresets();
  $("#backgroundDialog").showModal();
  requestAnimationFrame(sizeBackgroundPreview);
}

function renderBackgroundTargets() {
  const target = $("#backgroundTarget");
  const options = [
    ["__all__", "すべて（共通背景）"],
    ["__favorite__", "お気に入り"],
    ["__unassigned__", "未分類"],
    ...state.genres.map((genre) => [genre.id, genre.name])
  ];
  target.replaceChildren(...options.map(([value, label]) => Object.assign(document.createElement("option"), { value, textContent: label })));
}

function handleBackgroundTargetChange() {
  const selected = $("#backgroundTarget").value;
  loadBackgroundTarget(selected === "__all__" ? null : selected);
  renderBackgroundPresets();
}

function loadBackgroundTarget(backgroundKey) {
  const row = $("#backgroundModeRow");
  row.hidden = !backgroundKey;
  row.dataset.backgroundKey = backgroundKey || "";
  const activeGenre = state.genres.find((genre) => genre.id === backgroundKey);
  $("#backgroundModeLabel").textContent = backgroundKey === "__favorite__" ? "お気に入りの背景" : backgroundKey === "__unassigned__" ? "未分類の背景" : activeGenre ? `「${activeGenre.name}」の背景` : "この表示の背景";
  $("#backgroundMode").value = backgroundKey && state.genreBackgrounds[backgroundKey] ? "custom" : "inherit";
  $("#backgroundTransition").value = state.backgroundTransition;
  const settings = backgroundKey && state.genreBackgrounds[backgroundKey] ? state.genreBackgrounds[backgroundKey] : state.background;
  loadBackgroundEditor(settings);
  setBackgroundEditorDisabled(Boolean(backgroundKey && $("#backgroundMode").value === "inherit"));
  updateRemoveBackgroundLabel();
  previewBackgroundSettings();
}

function getActiveBackgroundKey() {
  if (state.filter === "favorite") return "__favorite__";
  if (state.filter === "unassigned") return "__unassigned__";
  if (!state.filter.startsWith("genre:")) return null;
  const genreId = state.filter.slice(6);
  return state.genres.some((genre) => genre.id === genreId) ? genreId : null;
}

function getActiveBackground() {
  const backgroundKey = getActiveBackgroundKey();
  return backgroundKey && state.genreBackgrounds[backgroundKey] ? state.genreBackgrounds[backgroundKey] : state.background;
}

function normalizeBackgroundSettings(settings = {}) {
  if (!settings || typeof settings !== "object") settings = {};
  const normalized = { ...DEFAULT_BACKGROUND, ...settings };
  if (settings.layoutVersion !== 2) normalized.y = Number(settings.y ?? 50) - 50;
  normalized.layoutVersion = 2;
  return normalized;
}

function normalizePresetAppearance(appearance = {}) {
  return {
    actionColor: /^#[0-9a-f]{6}$/i.test(appearance.actionColor || "") ? appearance.actionColor : DEFAULT_APPEARANCE.actionColor,
    bookmarkOpacity: Number.isFinite(Number(appearance.bookmarkOpacity)) ? Math.min(100, Math.max(0, Number(appearance.bookmarkOpacity))) : DEFAULT_APPEARANCE.bookmarkOpacity,
    useThemeCards: Boolean(appearance.useThemeCards),
    cardMaterial: appearance.cardMaterial === "flat" ? "flat" : "glass"
  };
}

function normalizeBackgroundPresets(presets) {
  if (!Array.isArray(presets)) return [];
  const ids = new Set();
  return presets.flatMap((preset) => {
    if (!preset || typeof preset.name !== "string" || !preset.name.trim()) return [];
    const id = typeof preset.id === "string" && preset.id && !ids.has(preset.id) ? preset.id : crypto.randomUUID();
    ids.add(id);
    return [{
      id,
      name: preset.name.trim().slice(0, 40),
      background: normalizeBackgroundSettings(preset.background),
      appearance: normalizePresetAppearance(preset.appearance),
      theme: preset.theme === "dark" ? "dark" : "light",
      transition: ["crossfade", "blur", "none"].includes(preset.transition) ? preset.transition : "crossfade"
    }];
  });
}

function normalizeBackgroundPresetAssignments(assignments, presets = state.backgroundPresets) {
  if (!assignments || typeof assignments !== "object") return {};
  const validPresetIds = new Set(["__default__", ...presets.map((preset) => preset.id)]);
  const validKeys = new Set(["__all__", "__favorite__", "__unassigned__", ...state.genres.map((genre) => genre.id)]);
  return Object.fromEntries(Object.entries(assignments).filter(([key, id]) => validKeys.has(key) && validPresetIds.has(id)));
}

function getBackgroundEditorKey() {
  if ($("#backgroundDialog").open) return $("#backgroundModeRow").dataset.backgroundKey || null;
  return getActiveBackgroundKey();
}

function currentBackgroundPresetKey() { return getBackgroundEditorKey() || "__all__"; }

function capturePresetAppearance(source = state.appearance) {
  return normalizePresetAppearance(source);
}

function renderBackgroundPresets() {
  const container = $("#backgroundPresetList");
  const activeId = state.backgroundPresetAssignments[currentBackgroundPresetKey()] || "";
  const presets = [{ id: "__default__", name: "標準", background: { ...DEFAULT_BACKGROUND }, appearance: capturePresetAppearance(DEFAULT_APPEARANCE), theme: "light", transition: "crossfade", fixed: true }, ...state.backgroundPresets];
  container.replaceChildren(...presets.map((preset) => {
    const card = document.createElement("article");
    card.className = `background-preset-card${activeId === preset.id ? " selected" : ""}`;
    card.dataset.presetId = preset.id;
    card.draggable = !preset.fixed;
    const apply = document.createElement("button");
    apply.type = "button";
    apply.className = "background-preset-apply";
    apply.title = `「${preset.name}」を適用`;
    const thumb = document.createElement("span");
    thumb.className = "background-preset-thumb";
    if (preset.background.image) {
      const image = document.createElement("img");
      image.alt = "";
      image.src = preset.background.image;
      thumb.append(image);
    } else thumb.textContent = preset.fixed ? "標準" : "画像なし";
    const name = document.createElement("strong");
    name.textContent = preset.name;
    const swatch = document.createElement("i");
    swatch.style.background = preset.appearance.actionColor;
    apply.append(thumb, name, swatch);
    apply.addEventListener("click", () => applyBackgroundPreset(preset));
    card.append(apply);
    if (!preset.fixed) {
      const actions = document.createElement("div");
      actions.className = "background-preset-actions";
      const rename = Object.assign(document.createElement("button"), { type: "button", textContent: "✎", title: "名前を変更" });
      const remove = Object.assign(document.createElement("button"), { type: "button", textContent: "🗑", title: "削除" });
      rename.addEventListener("click", () => renameBackgroundPreset(preset));
      remove.addEventListener("click", () => deleteBackgroundPreset(preset));
      actions.append(rename, remove);
      card.append(actions);
      card.addEventListener("dragstart", (event) => { draggedBackgroundPresetId = preset.id; event.dataTransfer.effectAllowed = "move"; card.classList.add("dragging"); });
      card.addEventListener("dragover", (event) => { if (!draggedBackgroundPresetId || draggedBackgroundPresetId === preset.id) return; event.preventDefault(); card.classList.add("drop-target"); });
      card.addEventListener("dragleave", () => card.classList.remove("drop-target"));
      card.addEventListener("drop", async (event) => { event.preventDefault(); await reorderBackgroundPreset(draggedBackgroundPresetId, preset.id); });
      card.addEventListener("dragend", () => { draggedBackgroundPresetId = null; container.querySelectorAll(".dragging, .drop-target").forEach((item) => item.classList.remove("dragging", "drop-target")); });
    }
    return card;
  }));
}

function markBackgroundPresetCustomized() {
  const key = currentBackgroundPresetKey();
  if (!state.backgroundPresetAssignments[key]) return;
  delete state.backgroundPresetAssignments[key];
  chrome.storage.local.set({ backgroundPresetAssignments: state.backgroundPresetAssignments });
  renderBackgroundPresets();
}

async function saveCurrentBackgroundPreset() {
  const entered = prompt("プリセット名を入力してください", "新しい背景");
  const name = entered?.trim().slice(0, 40);
  if (!name) return;
  const preset = {
    id: crypto.randomUUID(),
    name,
    background: readBackgroundEditor(),
    appearance: capturePresetAppearance(),
    theme: state.theme,
    transition: $("#backgroundTransition").value
  };
  state.backgroundPresets.push(preset);
  renderBackgroundPresets();
  try {
    await chrome.storage.local.set({ backgroundPresets: state.backgroundPresets });
    showToast(`「${name}」を保存しました`);
  } catch {
    state.backgroundPresets = state.backgroundPresets.filter((item) => item.id !== preset.id);
    renderBackgroundPresets();
    showToast("背景プリセットを保存できませんでした");
  }
}

async function applyBackgroundPreset(preset, silent = false) {
  const key = currentBackgroundPresetKey();
  const backgroundKey = getBackgroundEditorKey();
  const isDefault = preset.id === "__default__";
  const background = normalizeBackgroundSettings(preset.background);
  if (backgroundKey) {
    if (isDefault) delete state.genreBackgrounds[backgroundKey];
    else state.genreBackgrounds[backgroundKey] = background;
  } else state.background = background;
  state.appearance = { ...state.appearance, ...normalizePresetAppearance(preset.appearance) };
  state.theme = preset.theme === "dark" ? "dark" : "light";
  state.backgroundTransition = ["crossfade", "blur", "none"].includes(preset.transition) ? preset.transition : "crossfade";
  state.backgroundPresetAssignments[key] = preset.id;
  await chrome.storage.local.set({ background: state.background, genreBackgrounds: state.genreBackgrounds, appearance: state.appearance, theme: state.theme, backgroundTransition: state.backgroundTransition, backgroundPresetAssignments: state.backgroundPresetAssignments });
  if (backgroundKey) $("#backgroundMode").value = isDefault ? "inherit" : "custom";
  loadBackgroundEditor(isDefault && backgroundKey ? state.background : background);
  setBackgroundEditorDisabled(Boolean(backgroundKey && isDefault));
  $("#backgroundTransition").value = state.backgroundTransition;
  applyTheme();
  await applyBackground();
  renderBackgroundPresets();
  render();
  if (!silent) showToast(`「${preset.name}」を適用しました`);
}

async function renameBackgroundPreset(preset) {
  const entered = prompt("プリセット名を変更してください", preset.name);
  const name = entered?.trim().slice(0, 40);
  if (!name || name === preset.name) return;
  preset.name = name;
  await chrome.storage.local.set({ backgroundPresets: state.backgroundPresets });
  renderBackgroundPresets();
}

async function deleteBackgroundPreset(preset) {
  if (!confirm(`背景プリセット「${preset.name}」を削除しますか？\n現在適用中の背景はそのまま残ります。`)) return;
  state.backgroundPresets = state.backgroundPresets.filter((item) => item.id !== preset.id);
  for (const [key, id] of Object.entries(state.backgroundPresetAssignments)) if (id === preset.id) delete state.backgroundPresetAssignments[key];
  await chrome.storage.local.set({ backgroundPresets: state.backgroundPresets, backgroundPresetAssignments: state.backgroundPresetAssignments });
  renderBackgroundPresets();
  showToast("背景プリセットを削除しました");
}

async function reorderBackgroundPreset(sourceId, targetId) {
  if (!sourceId || sourceId === targetId) return;
  const sourceIndex = state.backgroundPresets.findIndex((preset) => preset.id === sourceId);
  const targetIndex = state.backgroundPresets.findIndex((preset) => preset.id === targetId);
  if (sourceIndex < 0 || targetIndex < 0) return;
  const [source] = state.backgroundPresets.splice(sourceIndex, 1);
  state.backgroundPresets.splice(targetIndex, 0, source);
  draggedBackgroundPresetId = null;
  await chrome.storage.local.set({ backgroundPresets: state.backgroundPresets });
  renderBackgroundPresets();
}

function loadBackgroundEditor(settings) {
  const normalized = normalizeBackgroundSettings(settings);
  $("#backgroundOpacity").value = normalized.opacity;
  $("#backgroundZoom").value = normalized.zoom;
  $("#backgroundPositionX").value = normalized.x;
  $("#backgroundPositionY").value = normalized.y;
  $("#backgroundFit").value = normalized.fit;
  if (normalized.image) $("#backgroundPreviewImage").src = normalized.image;
  else $("#backgroundPreviewImage").removeAttribute("src");
  $("#extractThemeColorsButton").disabled = !normalized.image;
  renderThemeColorCandidates([]);
}

function readBackgroundEditor() {
  return {
    image: $("#backgroundPreviewImage").getAttribute("src") || "",
    opacity: Number($("#backgroundOpacity").value),
    zoom: Number($("#backgroundZoom").value),
    x: Number($("#backgroundPositionX").value),
    y: Number($("#backgroundPositionY").value),
    fit: $("#backgroundFit").value,
    layoutVersion: 2
  };
}

function handleBackgroundModeChange() {
  markBackgroundPresetCustomized();
  const backgroundKey = $("#backgroundModeRow").dataset.backgroundKey;
  const custom = $("#backgroundMode").value === "custom";
  loadBackgroundEditor(custom ? (state.genreBackgrounds[backgroundKey] || state.background) : state.background);
  setBackgroundEditorDisabled(!custom);
  updateRemoveBackgroundLabel();
  previewBackgroundSettings();
}

function setBackgroundEditorDisabled(disabled) {
  ["backgroundInput", "backgroundFit", "backgroundOpacity", "backgroundZoom", "backgroundPositionX", "backgroundPositionY", "removeBackgroundButton"].forEach((id) => { $("#" + id).disabled = disabled; });
  $("#extractThemeColorsButton").disabled = disabled || !$("#backgroundPreviewImage").getAttribute("src");
  $(".background-upload").classList.toggle("disabled", disabled);
}

function updateRemoveBackgroundLabel() {
  const backgroundKey = $("#backgroundModeRow").dataset.backgroundKey;
  $("#removeBackgroundButton").textContent = backgroundKey ? "専用背景を解除" : "背景を削除";
}

function openTutorial() {
  const dialog = $("#tutorialDialog");
  if (!dialog.open) dialog.showModal();
}

function closeTutorial() {
  const dialog = $("#tutorialDialog");
  if (dialog.open) dialog.close();
}

async function markTutorialSeen() {
  await chrome.storage.local.set({ tutorialSeen: true });
}

function openSettingsDialog() {
  setAppearanceInputs(state.appearance);
  previewAppearanceSettings();
  $("#settingsDialog").showModal();
}

function setAppearanceInputs(settings) {
  $("#actionColor").value = settings.actionColor;
  $("#bookmarkOpacity").value = settings.bookmarkOpacity;
  $("#useThemeCards").checked = Boolean(settings.useThemeCards);
  $("#cardMaterial").value = ["glass", "flat"].includes(settings.cardMaterial) ? settings.cardMaterial : "glass";
  $("#motionIntensity").value = ["weak", "medium", "strong"].includes(settings.motionIntensity) ? settings.motionIntensity : "medium";
  $("#interactionStyle").value = ["lift", "slide", "tilt", "spotlight", "icon", "invert"].includes(settings.interactionStyle) ? settings.interactionStyle : "lift";
  $("#viewTransition").value = ["none", "fade", "slide", "scale", "cascade"].includes(settings.viewTransition) ? settings.viewTransition : "fade";
  $("#genreScrollStyle").value = ["slim", "arrows"].includes(settings.genreScrollStyle) ? settings.genreScrollStyle : "slim";
  $("#soundEnabled").checked = settings.soundEnabled === true;
  $("#soundTheme").value = ["wood", "drop", "glass", "digital", "click"].includes(settings.soundTheme) ? settings.soundTheme : "wood";
  $("#soundVolume").value = Number(settings.soundVolume) || DEFAULT_APPEARANCE.soundVolume;
  $("#showHomeButton").checked = Boolean(settings.showHomeButton);
  $("#showDeleteButton").checked = settings.showDeleteButton !== false;
  $("#showSplitViewControls").checked = settings.showSplitViewControls === true;
  $("#actionMenuPosition").value = settings.actionMenuPosition === "top" ? "top" : "bottom";
  $("#showTabRail").checked = settings.showTabRail !== false;
  $("#tabRailSide").value = settings.tabRailSide === "right" ? "right" : "left";
  $("#showBackgroundClock").checked = settings.showBackgroundClock !== false;
  $("#showEventInNormalView").checked = settings.showEventInNormalView !== false;
  $("#showBackgroundOnlyButton").checked = settings.showBackgroundOnlyButton === true;
  $("#backgroundClockSize").value = Number(settings.backgroundClockSize) || DEFAULT_APPEARANCE.backgroundClockSize;
  $("#backgroundClockPositionX").value = Number.isFinite(Number(settings.backgroundClockPositionX)) ? Number(settings.backgroundClockPositionX) : DEFAULT_APPEARANCE.backgroundClockPositionX;
  $("#backgroundClockPositionY").value = Number.isFinite(Number(settings.backgroundClockPositionY)) ? Number(settings.backgroundClockPositionY) : DEFAULT_APPEARANCE.backgroundClockPositionY;
}

function resetAppearancePreview() {
  setAppearanceInputs(DEFAULT_APPEARANCE);
  previewAppearanceSettings();
  showToast("初期設定をプレビューしています");
}

async function saveAppearance() {
  state.appearance = {
    actionColor: $("#actionColor").value,
    bookmarkOpacity: Number($("#bookmarkOpacity").value),
    useThemeCards: $("#useThemeCards").checked,
    cardMaterial: $("#cardMaterial").value,
    tileColumns: Math.min(6, Math.max(1, Number(state.appearance.tileColumns) || 2)),
    searchEngine: state.appearance.searchEngine === "youtube" ? "youtube" : "web",
    searchSplitSide: state.appearance.searchSplitSide === "right" ? "right" : "left",
    motionIntensity: $("#motionIntensity").value,
    interactionStyle: $("#interactionStyle").value,
    viewTransition: $("#viewTransition").value,
    genreScrollStyle: $("#genreScrollStyle").value,
    soundEnabled: $("#soundEnabled").checked,
    soundTheme: $("#soundTheme").value,
    soundVolume: Number($("#soundVolume").value),
    showHomeButton: $("#showHomeButton").checked,
    showDeleteButton: $("#showDeleteButton").checked,
    showSplitViewControls: $("#showSplitViewControls").checked,
    actionMenuPosition: $("#actionMenuPosition").value,
    showTabRail: $("#showTabRail").checked,
    tabRailSide: $("#tabRailSide").value,
    showBackgroundOnlyButton: $("#showBackgroundOnlyButton").checked,
    showBackgroundClock: $("#showBackgroundClock").checked,
    showEventInNormalView: $("#showEventInNormalView").checked,
    backgroundClockSize: Number($("#backgroundClockSize").value),
    backgroundClockPositionX: Number($("#backgroundClockPositionX").value),
    backgroundClockPositionY: Number($("#backgroundClockPositionY").value)
  };
  state.backgroundPresetAssignments = {};
  await chrome.storage.local.set({ appearance: state.appearance, backgroundPresetAssignments: state.backgroundPresetAssignments });
  applyAppearance();
  $("#settingsDialog").close();
  showToast("表示設定を保存しました");
}

function previewAppearanceSettings() {
  const settings = {
    actionColor: $("#actionColor").value,
    bookmarkOpacity: Number($("#bookmarkOpacity").value),
    useThemeCards: $("#useThemeCards").checked,
    cardMaterial: $("#cardMaterial").value,
    tileColumns: Math.min(6, Math.max(1, Number(state.appearance.tileColumns) || 2)),
    searchEngine: state.appearance.searchEngine === "youtube" ? "youtube" : "web",
    searchSplitSide: state.appearance.searchSplitSide === "right" ? "right" : "left",
    motionIntensity: $("#motionIntensity").value,
    interactionStyle: $("#interactionStyle").value,
    viewTransition: $("#viewTransition").value,
    genreScrollStyle: $("#genreScrollStyle").value,
    soundEnabled: $("#soundEnabled").checked,
    soundTheme: $("#soundTheme").value,
    soundVolume: Number($("#soundVolume").value),
    showHomeButton: $("#showHomeButton").checked,
    showDeleteButton: $("#showDeleteButton").checked,
    showSplitViewControls: $("#showSplitViewControls").checked,
    actionMenuPosition: $("#actionMenuPosition").value,
    showTabRail: $("#showTabRail").checked,
    tabRailSide: $("#tabRailSide").value,
    showBackgroundOnlyButton: $("#showBackgroundOnlyButton").checked,
    showBackgroundClock: $("#showBackgroundClock").checked,
    showEventInNormalView: $("#showEventInNormalView").checked,
    backgroundClockSize: Number($("#backgroundClockSize").value),
    backgroundClockPositionX: Number($("#backgroundClockPositionX").value),
    backgroundClockPositionY: Number($("#backgroundClockPositionY").value)
  };
  $("#bookmarkOpacityOutput").value = `${settings.bookmarkOpacity}%`;
  $("#soundVolumeOutput").value = `${settings.soundVolume}%`;
  $("#backgroundClockSizeOutput").value = `${settings.backgroundClockSize}px`;
  applyAppearance(settings);
}

function sizeBackgroundPreview() {
  const preview = $("#backgroundPreview");
  const availableWidth = Math.max(preview.parentElement.clientWidth, 1);
  const viewportRatio = Math.max(window.innerWidth, 1) / Math.max(window.innerHeight, 1);
  let width = availableWidth;
  let height = width / viewportRatio;
  if (height > 320) {
    height = 320;
    width = height * viewportRatio;
  }
  preview.style.width = `${Math.round(width)}px`;
  preview.style.height = `${Math.round(height)}px`;
}

function previewBackgroundSettings() {
  const preview = $("#backgroundPreviewImage");
  const opacity = Number($("#backgroundOpacity").value);
  const zoom = Number($("#backgroundZoom").value);
  const x = Number($("#backgroundPositionX").value);
  const y = Number($("#backgroundPositionY").value);
  const fit = $("#backgroundFit").value;
  preview.style.opacity = String(opacity / 100);
  setBackgroundImageLayout(preview, zoom, x, y, fit);
  $("#backgroundPreviewEmpty").hidden = Boolean(preview.getAttribute("src"));
  $("#opacityOutput").value = `${opacity}%`;
  $("#zoomOutput").value = `${zoom}%`;
  $("#positionXOutput").value = `${x}%`;
  $("#positionYOutput").value = `${y > 0 ? "+" : ""}${y}%`;
}

function setBackgroundImageLayout(image, zoom, x, y, fit) {
  const size = `${zoom}%`;
  image.style.width = fit === "height" ? "auto" : size;
  image.style.height = fit === "width" ? "auto" : size;
  image.style.left = `${x}%`;
  image.style.top = `calc(50% + ${y}%)`;
  image.style.objectFit = fit === "cover" ? "cover" : "contain";
  image.style.transform = `translate(-${x}%, -50%)`;
}

async function loadBackgroundImage(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    markBackgroundPresetCustomized();
    const imageData = await resizeBackgroundImage(file);
    $("#backgroundPreviewImage").src = imageData;
    $("#extractThemeColorsButton").disabled = false;
    renderThemeColorCandidates([]);
    previewBackgroundSettings();
  } catch { showToast("画像を読み込めませんでした"); }
  event.target.value = "";
}

async function extractThemeColors() {
  const image = $("#backgroundPreviewImage");
  if (!image.getAttribute("src")) return showToast("先に背景画像を選択してください");
  try {
    if (!image.complete || !image.naturalWidth) await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = 72;
    canvas.height = 72;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    const buckets = new Map();
    for (let index = 0; index < pixels.length; index += 16) {
      if (pixels[index + 3] < 100) continue;
      const r = pixels[index], g = pixels[index + 1], b = pixels[index + 2];
      const brightness = (r + g + b) / 3;
      if (brightness < 18 || brightness > 242) continue;
      const qr = Math.round(r / 24) * 24;
      const qg = Math.round(g / 24) * 24;
      const qb = Math.round(b / 24) * 24;
      const key = `${Math.min(qr, 255)},${Math.min(qg, 255)},${Math.min(qb, 255)}`;
      buckets.set(key, (buckets.get(key) || 0) + 1);
    }
    const ranked = [...buckets].map(([key, count]) => {
      const rgb = key.split(",").map(Number);
      const saturation = Math.max(...rgb) - Math.min(...rgb);
      return { rgb, score: count * (1 + saturation / 180) };
    }).sort((a, b) => b.score - a.score);
    const chosen = [];
    for (const candidate of ranked) {
      if (chosen.every(({ rgb }) => Math.hypot(...rgb.map((value, i) => value - candidate.rgb[i])) > 62)) chosen.push(candidate);
      if (chosen.length === 3) break;
    }
    const colors = chosen.map(({ rgb }) => `#${rgb.map((value) => value.toString(16).padStart(2, "0")).join("")}`);
    if (!colors.length) return showToast("画像から色を抽出できませんでした");
    renderThemeColorCandidates(colors);
  } catch { showToast("テーマカラーを作成できませんでした"); }
}

function renderThemeColorCandidates(colors) {
  const container = $("#extractedThemeColors");
  container.replaceChildren(...colors.map((color) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "theme-color-candidate";
    button.style.background = color;
    button.title = `${color}をテーマカラーに設定`;
    button.setAttribute("aria-label", button.title);
    button.setAttribute("aria-pressed", "false");
    button.addEventListener("click", () => {
      container.querySelectorAll(".theme-color-candidate").forEach((candidate) => {
        candidate.classList.toggle("selected", candidate === button);
        candidate.setAttribute("aria-pressed", String(candidate === button));
      });
      applyExtractedThemeColor(color);
    });
    return button;
  }));
}

async function applyExtractedThemeColor(color) {
  state.appearance.actionColor = color;
  state.backgroundPresetAssignments = {};
  await chrome.storage.local.set({ appearance: state.appearance, backgroundPresetAssignments: state.backgroundPresetAssignments });
  applyAppearance();
  renderBackgroundPresets();
  showToast("テーマカラーを変更しました");
}

async function resizeBackgroundImage(file) {
  const bitmap = await createImageBitmap(file);
  const maxSide = 1920;
  const scale = Math.min(1, maxSide / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(bitmap.width * scale);
  canvas.height = Math.round(bitmap.height * scale);
  canvas.getContext("2d").drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();
  if (file.type === "image/png") return canvas.toDataURL("image/png");
  if (file.type === "image/webp") return canvas.toDataURL("image/webp", .9);
  return canvas.toDataURL("image/jpeg", .86);
}

async function saveBackground() {
  const backgroundKey = $("#backgroundModeRow").dataset.backgroundKey;
  state.backgroundTransition = $("#backgroundTransition").value;
  const editedSettings = readBackgroundEditor();
  if (backgroundKey) {
    if ($("#backgroundMode").value === "inherit") delete state.genreBackgrounds[backgroundKey];
    else state.genreBackgrounds[backgroundKey] = editedSettings;
  } else {
    state.background = editedSettings;
  }
  const applyToAll = $("#applyBackgroundAdjustmentsToAll").checked;
  if (applyToAll) {
    const adjustments = pickBackgroundAdjustments(editedSettings);
    state.background = { ...state.background, ...adjustments };
    state.genreBackgrounds = Object.fromEntries(Object.entries(state.genreBackgrounds).map(([key, settings]) => [key, { ...settings, ...adjustments }]));
    state.backgroundPresetAssignments = {};
  }
  await chrome.storage.local.set({ background: state.background, genreBackgrounds: state.genreBackgrounds, backgroundTransition: state.backgroundTransition, backgroundPresetAssignments: state.backgroundPresetAssignments });
  applyBackground();
  $("#backgroundDialog").close();
  showToast(applyToAll ? "調整値をすべての背景へ反映しました" : backgroundKey ? "専用背景の設定を保存しました" : "共通背景を保存しました");
}

function pickBackgroundAdjustments(settings) {
  return {
    opacity: settings.opacity,
    zoom: settings.zoom,
    x: settings.x,
    y: settings.y,
    fit: settings.fit,
    layoutVersion: 2
  };
}

async function removeBackground() {
  markBackgroundPresetCustomized();
  const backgroundKey = $("#backgroundModeRow").dataset.backgroundKey;
  state.backgroundTransition = $("#backgroundTransition").value;
  if (backgroundKey) {
    delete state.genreBackgrounds[backgroundKey];
    await chrome.storage.local.set({ genreBackgrounds: state.genreBackgrounds, backgroundTransition: state.backgroundTransition });
  } else {
    state.background = { ...DEFAULT_BACKGROUND };
    await chrome.storage.local.remove("background");
    await chrome.storage.local.set({ backgroundTransition: state.backgroundTransition });
  }
  applyBackground();
  $("#backgroundDialog").close();
  showToast(backgroundKey ? "専用背景を解除しました" : "背景画像を削除しました");
}

async function addCurrentPage() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab?.url || !/^https?:/.test(tab.url)) return showToast("このページは追加できません");
  const existing = state.bookmarks.find((item) => item.url === tab.url);
  if (existing) return showToast("すでに追加されています");
  const activeGenreId = state.filter.startsWith("genre:") ? state.filter.slice(6) : null;
  const undoSnapshot = createUndoSnapshot();
  state.bookmarks.unshift({ id: crypto.randomUUID(), title: tab.title || tab.url, url: tab.url, folder: "未分類", genreId: activeGenreId, favorite: false, createdAt: Date.now() });
  await persist("ページを追加しました", undoSnapshot);
}

function buildSearchUrl(query) {
  const encoded = encodeURIComponent(query);
  return state.appearance.searchEngine === "youtube"
    ? `https://www.youtube.com/results?search_query=${encoded}`
    : `https://www.google.com/search?q=${encoded}`;
}

async function selectSearchEngine(engine) {
  state.appearance.searchEngine = engine === "youtube" ? "youtube" : "web";
  updateSearchEngine();
  await chrome.storage.local.set({ appearance: state.appearance });
}

function updateSearchEngine() {
  const engine = state.appearance.searchEngine === "youtube" ? "youtube" : "web";
  $("#searchWebButton").classList.toggle("selected", engine === "web");
  $("#searchYouTubeButton").classList.toggle("selected", engine === "youtube");
  $("#searchWebButton").setAttribute("aria-pressed", String(engine === "web"));
  $("#searchYouTubeButton").setAttribute("aria-pressed", String(engine === "youtube"));
  $("#searchQuery").placeholder = engine === "youtube" ? "YouTubeを検索" : "Webを検索";
}

function handleSearchSubmit(event) {
  event.preventDefault();
  openSearchResult(state.splitView ? state.appearance.searchSplitSide : null);
}

async function selectSearchSplitSide(side) {
  state.appearance.searchSplitSide = side === "right" ? "right" : "left";
  updateSearchSplitSide();
  await chrome.storage.local.set({ appearance: state.appearance });
}

function updateSearchSplitSide() {
  const side = state.appearance.searchSplitSide === "right" ? "right" : "left";
  $("#searchLeftButton").classList.toggle("selected", side === "left");
  $("#searchRightButton").classList.toggle("selected", side === "right");
  $("#searchLeftButton").setAttribute("aria-pressed", String(side === "left"));
  $("#searchRightButton").setAttribute("aria-pressed", String(side === "right"));
}

async function openSearchResult(side = null) {
  const query = $("#searchQuery").value.trim();
  if (!query) { $("#searchQuery").focus(); return showToast("検索キーワードを入力してください"); }
  const url = buildSearchUrl(query);
  let tabId = null;
  if (state.splitView && side) tabId = side === "left" ? state.splitView.leftTabId : state.splitView.rightTabId;
  if (!tabId) {
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    tabId = activeTab?.id;
  }
  if (!tabId) return showToast("検索結果を開けませんでした");
  try {
    await chrome.tabs.update(tabId, { url });
    showToast(state.splitView && side ? `${side === "left" ? "左" : "右"}側で検索しました` : "現在のタブで検索しました");
    await refreshCurrentUrl();
  } catch { showToast("検索結果を開けませんでした"); }
}

function filteredItems() {
  return state.bookmarks.filter((item) => {
    const genreFilter = state.filter.startsWith("genre:") ? state.filter.slice(6) : null;
    if (state.filter === "favorite") return item.favorite;
    if (state.filter === "unassigned") return !hasValidGenre(item);
    return !genreFilter || item.genreId === genreFilter;
  });
}

async function refreshTopSites() {
  try { state.topSites = (await chrome.topSites.get()).filter((site) => /^https?:/.test(site.url)); }
  catch { state.topSites = []; }
}

function renderBookmarkSuggestions() {
  const section = $("#bookmarkSuggestions");
  const registered = new Set(state.bookmarks.map((item) => normalizeUrl(item.url)));
  const suggestions = state.topSites.filter((site) => !registered.has(normalizeUrl(site.url))).slice(0, 6);
  section.hidden = !suggestions.length;
  $("#noBookmarkSuggestions").hidden = Boolean(suggestions.length);
  const container = $("#bookmarkSuggestionList");
  container.replaceChildren(...suggestions.map((site) => {
    const row = document.createElement("div");
    row.className = "bookmark-suggestion";
    const icon = document.createElement("button");
    icon.type = "button";
    icon.className = "suggestion-icon";
    setBookmarkIcon(icon, { title: site.title, url: site.url, customIcon: "", iconPreset: "" });
    const open = document.createElement("button");
    open.type = "button";
    open.className = "suggestion-open";
    open.textContent = site.title || safeDomain(site.url);
    open.title = `${site.url}\n現在のタブで開く`;
    open.addEventListener("click", async () => {
      const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
      if (activeTab?.id) await chrome.tabs.update(activeTab.id, { url: site.url });
    });
    const add = Object.assign(document.createElement("button"), { type: "button", textContent: "+", title: "ブックマークに追加" });
    add.className = "suggestion-add";
    add.addEventListener("click", () => addSuggestedSite(site));
    icon.addEventListener("click", () => open.click());
    icon.title = "現在のタブで開く";
    icon.setAttribute("aria-label", `${site.title || safeDomain(site.url)}を現在のタブで開く`);
    row.append(icon, open, add);
    return row;
  }));
}

async function openSuggestionsDialog() {
  await refreshTopSites();
  renderBookmarkSuggestions();
  $("#suggestionsDialog").showModal();
}

async function addSuggestedSite(site) {
  if (state.bookmarks.some((item) => normalizeUrl(item.url) === normalizeUrl(site.url))) return renderBookmarkSuggestions();
  const activeGenreId = state.filter.startsWith("genre:") ? state.filter.slice(6) : null;
  const undoSnapshot = createUndoSnapshot();
  state.bookmarks.unshift({ id: crypto.randomUUID(), title: site.title || site.url, url: site.url, folder: "未分類", genreId: activeGenreId, favorite: false, createdAt: Date.now() });
  await persist("おすすめから追加しました", undoSnapshot);
  renderBookmarkSuggestions();
}

function render() {
  syncFolderOrder();
  if (state.filter.startsWith("genre:") && !state.genres.some((genre) => genre.id === state.filter.slice(6))) state.filter = "all";
  if (state.filter === "unassigned" && !state.bookmarks.some((item) => !hasValidGenre(item))) state.filter = "all";
  applyBackground();
  const items = filteredItems();
  document.body.classList.toggle("has-bookmarks", state.bookmarks.length > 0);
  document.body.classList.toggle("compact-view", items.length > 10);
  list.replaceChildren();
  renderFilterBar();
  for (const id of [...selectedBookmarkIds]) if (!state.bookmarks.some((item) => item.id === id)) selectedBookmarkIds.delete(id);
  updateBulkToolbar();
  const selectedGenre = state.filter.startsWith("genre:") ? state.genres.find((genre) => genre.id === state.filter.slice(6)) : null;
  const iconView = Boolean(selectedGenre?.viewMode === "icons" && !bulkMode);
  list.classList.toggle("icon-view", iconView);
  list.classList.toggle("tile-view", !iconView);
  list.style.setProperty("--icon-columns", String(selectedGenre?.iconColumns || 4));
  const tileColumns = Math.min(6, Math.max(1, Number(state.appearance.tileColumns) || 2));
  list.style.setProperty("--tile-columns", String(tileColumns));
  list.dataset.tileColumns = String(tileColumns);
  $("#iconGridControls").hidden = bulkMode;
  $("#decreaseIconColumns").disabled = iconView ? (selectedGenre?.iconColumns || 4) <= 2 : tileColumns <= 1;
  $("#increaseIconColumns").disabled = iconView ? (selectedGenre?.iconColumns || 4) >= 6 : tileColumns >= 6;
  $("#listHeading").textContent = state.filter === "favorite" ? "すべてのジャンルのお気に入り" : state.filter === "unassigned" ? "ジャンル未分類" : selectedGenre?.name || "すべてのブックマーク";
  emptyState.hidden = items.length > 0;
  if (!items.length) {
    emptyState.querySelector("h2").textContent = state.bookmarks.length ? "見つかりませんでした" : "ページを集めましょう";
    emptyState.querySelector("p").textContent = state.bookmarks.length ? "ほかのジャンルや「すべて」を確認してみてください。" : "今見ているページを追加すると、ここからすぐに開けます。";
    $("#emptyAddButton").hidden = state.bookmarks.length > 0;
    return;
  }
  const grouped = new Map();
  for (const item of items) {
    const folder = item.folder || "未分類";
    if (!grouped.has(folder)) grouped.set(folder, []);
    grouped.get(folder).push(item);
  }
  const visibleFolders = state.folderOrder.filter((name) => grouped.has(name));
  const hideOnlyUnclassifiedHeading = Boolean(selectedGenre && visibleFolders.length === 1 && visibleFolders[0] === "未分類");
  updateFolderToggleButton(visibleFolders, hideOnlyUnclassifiedHeading);
  for (const [folderIndex, folder] of visibleFolders.entries()) {
    if (hideOnlyUnclassifiedHeading) {
      for (const item of grouped.get(folder)) list.append(createItem(item));
      continue;
    }
      list.append(createFolderDropZone(folder, false, folderIndex === 0 ? "先頭へ移動" : "ここに挿入"));
      const heading = document.createElement("div");
      heading.className = "folder-title";
      heading.dataset.folder = folder;
      heading.draggable = true;
      heading.innerHTML = `<span class="folder-chevron">${state.collapsedFolders.has(folder) ? "▸" : "▾"}</span><span class="folder-name"></span><button class="folder-edit" type="button" title="フォルダ名を変更" aria-label="「${escapeAttr(folder)}」の名前を変更">✎</button><span class="folder-drop-hint">ここに移動</span>`;
      heading.querySelector(".folder-name").textContent = folder;
      heading.title = `クリックで折りたたみ・展開／鉛筆で名前変更`;
      heading.querySelector(".folder-edit").addEventListener("click", (event) => { event.stopPropagation(); renameFolder(folder); });
      heading.addEventListener("click", () => {
        if (folderWasDragged) return void (folderWasDragged = false);
        toggleFolder(folder);
      });
      heading.addEventListener("dragstart", (event) => {
        if (event.target.closest(".folder-edit")) return void event.preventDefault();
        if (draggedBookmarkId) return;
        draggedFolder = folder;
        folderWasDragged = true;
        event.dataTransfer.effectAllowed = "move";
        event.dataTransfer.setData("text/plain", `folder:${folder}`);
        heading.classList.add("dragging");
        document.body.classList.add("folder-dragging");
      });
      heading.addEventListener("dragover", (event) => {
        if (!draggedFolder && !draggedBookmarkId) return;
        event.preventDefault();
        event.stopPropagation();
        event.dataTransfer.dropEffect = "move";
        heading.classList.add("drop-target");
      });
      heading.addEventListener("dragleave", () => heading.classList.remove("drop-target"));
      heading.addEventListener("drop", async (event) => {
        if (!draggedFolder && !draggedBookmarkId) return;
        event.preventDefault();
        event.stopPropagation();
        heading.classList.remove("drop-target");
        if (draggedBookmarkId) return moveBookmarkToFolder(getDroppedBookmarkId(event), folder, true);
        const rect = heading.getBoundingClientRect();
        return reorderFolder(draggedFolder, folder, event.clientY >= rect.top + rect.height / 2);
      });
      heading.addEventListener("dragend", () => {
        heading.classList.remove("dragging");
        document.querySelectorAll(".drop-target, .folder-drop-zone.active").forEach((el) => el.classList.remove("drop-target", "active"));
        draggedFolder = null;
        document.body.classList.remove("folder-dragging");
        setTimeout(() => { folderWasDragged = false; }, 0);
      });
      list.append(heading);
    if (state.collapsedFolders.has(folder)) {
      list.append(createBookmarkFolderDropZone(folder));
      continue;
    }
    for (const item of grouped.get(folder)) list.append(createItem(item));
    list.append(createBookmarkFolderDropZone(folder));
  }
  if (!hideOnlyUnclassifiedHeading) list.append(createFolderDropZone(visibleFolders.at(-1), true, "末尾へ移動"));
  if (iconView) requestAnimationFrame(updateIconGridSize);
}

function playViewTransition() {
  const transition = document.body.dataset.viewTransition || state.appearance.viewTransition || "fade";
  if (transition === "none" || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  clearTimeout(viewTransitionTimer);
  list.classList.remove("view-transitioning");
  void list.offsetWidth;
  list.classList.add("view-transitioning");
  viewTransitionTimer = setTimeout(() => list.classList.remove("view-transitioning"), 420);
}

async function changeViewColumns(change) {
  const genre = state.filter.startsWith("genre:") ? state.genres.find((item) => item.id === state.filter.slice(6)) : null;
  if (genre?.viewMode === "icons") {
    genre.iconColumns = Math.min(6, Math.max(2, (genre.iconColumns || 4) + change));
    await chrome.storage.local.set({ genres: state.genres });
  } else {
    state.appearance.tileColumns = Math.min(6, Math.max(1, (Number(state.appearance.tileColumns) || 2) + change));
    await chrome.storage.local.set({ appearance: state.appearance });
  }
  render();
  playViewTransition();
}

function updateIconGridSize() {
  if (!list.classList.contains("icon-view")) return;
  const columns = Number(list.style.getPropertyValue("--icon-columns")) || 4;
  const gap = 9;
  const cellWidth = (list.clientWidth - gap * (columns - 1)) / columns;
  const iconSize = Math.round(Math.min(120, Math.max(38, cellWidth - 16)));
  list.style.setProperty("--app-icon-size", `${iconSize}px`);
  list.style.setProperty("--app-icon-image-size", `${Math.round(iconSize * .58)}px`);
}

function renderFilterBar() {
  const bar = $("#filterBar");
  const unassignedCount = state.bookmarks.filter((item) => !hasValidGenre(item)).length;
  const navigationButtons = state.genres.map((genre) => createGenreButton(genre));
  const favoriteButton = createFavoriteButton();
  navigationButtons.splice(Math.min(Math.max(state.favoriteTabIndex, 0), navigationButtons.length), 0, favoriteButton);
  const buttons = [
    createFilterButton("all", "すべて", state.bookmarks.length),
    ...(unassignedCount ? [createFilterButton("unassigned", "未分類", unassignedCount)] : []),
    ...navigationButtons,
    createAddGenreButton()
  ];
  bar.replaceChildren(...buttons);
  requestAnimationFrame(updateFilterScrollUI);
}

function createFavoriteButton() {
  const button = createFilterButton("favorite", "★ お気に入り", state.bookmarks.filter((item) => item.favorite).length);
  button.classList.add("genre-filter");
  button.title = "ドラッグで並べ替え";
  attachNavigationDrag(button, "favorite");
  return button;
}

function hasValidGenre(item) {
  return Boolean(item.genreId && state.genres.some((genre) => genre.id === item.genreId));
}

function createGenreButton(genre) {
  const button = createFilterButton(
    `genre:${genre.id}`,
    genre.name,
    state.bookmarks.filter((item) => item.genreId === genre.id).length
  );
  button.classList.add("genre-filter");
  button.draggable = true;
  button.title = "ドラッグで並べ替え・ダブルクリックで名前変更";
  const viewToggle = document.createElement("span");
  viewToggle.className = "filter-view-toggle";
  viewToggle.setAttribute("role", "button");
  viewToggle.setAttribute("aria-label", `${genre.name}を${genre.viewMode === "icons" ? "タイル" : "アイコン"}表示に切り替え`);
  viewToggle.textContent = genre.viewMode === "icons" ? "☷" : "▦";
  viewToggle.title = genre.viewMode === "icons" ? "タイル表示に切り替え" : "アイコン表示に切り替え";
  viewToggle.addEventListener("click", (event) => { event.stopPropagation(); toggleGenreViewMode(genre); });
  viewToggle.addEventListener("dblclick", (event) => event.stopPropagation());
  const remove = document.createElement("span");
  remove.className = "filter-delete";
  remove.setAttribute("role", "button");
  remove.setAttribute("aria-label", `「${genre.name}」を削除`);
  remove.textContent = "×";
  remove.title = `「${genre.name}」を削除`;
  remove.addEventListener("click", (event) => { event.stopPropagation(); deleteGenre(genre); });
  button.append(viewToggle, remove);
  button.addEventListener("dblclick", (event) => { event.preventDefault(); renameGenre(genre); });
  attachNavigationDrag(button, genre.id);
  return button;
}

function attachNavigationDrag(button, key) {
  button.draggable = true;
  button.addEventListener("dragstart", (event) => {
    if (event.target.closest(".filter-delete, .filter-view-toggle")) return void event.preventDefault();
    draggedNavigationKey = key;
    event.dataTransfer.effectAllowed = "move";
    button.classList.add("dragging");
  });
  button.addEventListener("dragover", (event) => {
    if (!draggedNavigationKey || draggedNavigationKey === key) return;
    event.preventDefault();
    const after = event.clientX >= button.getBoundingClientRect().left + button.offsetWidth / 2;
    button.classList.toggle("drop-before", !after);
    button.classList.toggle("drop-after", after);
  });
  button.addEventListener("dragleave", () => button.classList.remove("drop-before", "drop-after"));
  button.addEventListener("drop", async (event) => {
    if (!draggedNavigationKey || draggedNavigationKey === key) return;
    event.preventDefault();
    const after = event.clientX >= button.getBoundingClientRect().left + button.offsetWidth / 2;
    await reorderNavigation(draggedNavigationKey, key, after);
  });
  button.addEventListener("dragend", () => {
    draggedNavigationKey = null;
    document.querySelectorAll(".genre-filter").forEach((el) => el.classList.remove("dragging", "drop-before", "drop-after"));
  });
}

async function toggleGenreViewMode(genre) {
  genre.viewMode = genre.viewMode === "icons" ? "list" : "icons";
  await chrome.storage.local.set({ genres: state.genres });
  render();
  playViewTransition();
  showToast(genre.viewMode === "icons" ? "アイコン表示に切り替えました" : "タイル表示に切り替えました");
}

function createAddGenreButton() {
  const button = document.createElement("button");
  button.className = "filter add-genre";
  button.type = "button";
  button.textContent = "＋";
  button.title = "ジャンルを追加";
  button.setAttribute("aria-label", "ジャンルを追加");
  button.addEventListener("click", addGenre);
  return button;
}

async function addGenre() {
  const entered = prompt("新しいジャンル名");
  if (entered === null) return;
  const name = entered.trim();
  if (!name) return;
  if (state.genres.some((genre) => genre.name === name)) return showToast("同じ名前のジャンルがあります");
  const undoSnapshot = createUndoSnapshot();
  const genre = { id: crypto.randomUUID(), name, viewMode: "list", iconColumns: 4 };
  const favoriteWasLast = state.favoriteTabIndex >= state.genres.length;
  state.genres.push(genre);
  if (favoriteWasLast) state.favoriteTabIndex = state.genres.length;
  state.filter = `genre:${genre.id}`;
  await chrome.storage.local.set({ genres: state.genres, favoriteTabIndex: state.favoriteTabIndex });
  render();
  showUndoToast(`「${name}」を追加しました`, undoSnapshot);
}

async function renameGenre(genre) {
  const entered = prompt(`「${genre.name}」の新しい名前`, genre.name);
  if (entered === null) return;
  const name = entered.trim();
  if (!name || name === genre.name) return;
  if (state.genres.some((item) => item.id !== genre.id && item.name === name)) return showToast("同じ名前のジャンルがあります");
  const undoSnapshot = createUndoSnapshot();
  genre.name = name;
  await chrome.storage.local.set({ genres: state.genres });
  render();
  showUndoToast("ジャンル名を変更しました", undoSnapshot);
}

async function deleteGenre(genre) {
  if (!confirm(`ジャンル「${genre.name}」を削除しますか？\nブックマーク自体は削除されず「ジャンルなし」になります。`)) return;
  const undoSnapshot = createUndoSnapshot();
  const deletedIndex = state.genres.findIndex((item) => item.id === genre.id);
  state.genres = state.genres.filter((item) => item.id !== genre.id);
  if (deletedIndex >= 0 && deletedIndex < state.favoriteTabIndex) state.favoriteTabIndex -= 1;
  state.bookmarks.forEach((item) => { if (item.genreId === genre.id) item.genreId = null; });
  delete state.genreBackgrounds[genre.id];
  delete state.backgroundPresetAssignments[genre.id];
  if (state.filter === `genre:${genre.id}`) state.filter = "all";
  await chrome.storage.local.set({ genres: state.genres, bookmarks: state.bookmarks, favoriteTabIndex: state.favoriteTabIndex, genreBackgrounds: state.genreBackgrounds, backgroundPresetAssignments: state.backgroundPresetAssignments });
  render();
  showUndoToast(`「${genre.name}」を削除しました`, undoSnapshot);
}

async function reorderNavigation(sourceKey, targetKey, placeAfter) {
  if (!sourceKey || sourceKey === targetKey) return;
  const undoSnapshot = createUndoSnapshot();
  const genreById = new Map(state.genres.map((genre) => [genre.id, genre]));
  const keys = state.genres.map((genre) => genre.id);
  keys.splice(Math.min(Math.max(state.favoriteTabIndex, 0), keys.length), 0, "favorite");
  const reordered = keys.filter((key) => key !== sourceKey);
  let targetIndex = reordered.indexOf(targetKey);
  if (targetIndex < 0) return;
  if (placeAfter) targetIndex += 1;
  reordered.splice(targetIndex, 0, sourceKey);
  state.favoriteTabIndex = reordered.indexOf("favorite");
  state.genres = reordered.filter((key) => key !== "favorite").map((key) => genreById.get(key)).filter(Boolean);
  draggedNavigationKey = null;
  await chrome.storage.local.set({ genres: state.genres, favoriteTabIndex: state.favoriteTabIndex });
  render();
  showUndoToast("タブの順番を変更しました", undoSnapshot);
}

function createFilterButton(filter, label, count) {
  const button = document.createElement("button");
  button.className = `filter${state.filter === filter ? " active" : ""}`;
  button.dataset.filter = filter;
  button.type = "button";
  const labelSpan = document.createElement("span");
  labelSpan.textContent = label;
  const countSpan = document.createElement("span");
  countSpan.className = "filter-count";
  countSpan.textContent = count;
  button.append(labelSpan, countSpan);
  return button;
}

function createFolderDropZone(targetFolder, placeAfter, label) {
  const zone = document.createElement("div");
  zone.className = "folder-drop-zone folder-order-drop-zone";
  const orderHint = document.createElement("span");
  orderHint.className = "folder-order-drop-hint";
  orderHint.textContent = label;
  zone.append(orderHint);
  zone.addEventListener("dragover", (event) => {
    if (!draggedFolder || !targetFolder) return;
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "move";
    zone.classList.add("active");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("active"));
  zone.addEventListener("drop", async (event) => {
    if (!draggedFolder || !targetFolder) return;
    event.preventDefault();
    event.stopPropagation();
    zone.classList.remove("active");
    await reorderFolder(draggedFolder, targetFolder, placeAfter);
  });
  return zone;
}

function createBookmarkFolderDropZone(targetFolder) {
  const zone = document.createElement("div");
  zone.className = "folder-drop-zone bookmark-folder-drop-zone";
  const hint = document.createElement("span");
  hint.className = "bookmark-folder-drop-hint";
  hint.textContent = `「${targetFolder}」の末尾へ移動`;
  zone.append(hint);
  zone.addEventListener("dragover", (event) => {
    if (!draggedBookmarkId) return;
    event.preventDefault();
    event.stopPropagation();
    event.dataTransfer.dropEffect = "move";
    zone.classList.add("active");
  });
  zone.addEventListener("dragleave", () => zone.classList.remove("active"));
  zone.addEventListener("drop", async (event) => {
    if (!draggedBookmarkId) return;
    event.preventDefault();
    event.stopPropagation();
    zone.classList.remove("active");
    await moveBookmarkToFolder(getDroppedBookmarkId(event), targetFolder, true);
  });
  return zone;
}

function syncFolderOrder() {
  const existing = [...new Set(state.bookmarks.map((item) => item.folder || "未分類"))];
  state.folderOrder = [
    ...state.folderOrder.filter((folder) => existing.includes(folder)),
    ...existing.filter((folder) => !state.folderOrder.includes(folder))
  ];
}

function createBuiltinIconSvg(preset, className = "") {
  const icon = BUILTIN_ICONS.find((entry) => entry.id === preset);
  if (!icon) return null;
  const wrapper = document.createElement("span");
  wrapper.innerHTML = `<svg class="${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${icon.content}</svg>`;
  return wrapper.firstElementChild;
}

function setBookmarkIcon(container, item) {
  container.replaceChildren();
  if (item.customIcon) {
    const image = document.createElement("img");
    image.alt = "";
    image.src = item.customIcon;
    image.addEventListener("error", () => setStandardFavicon(container, item), { once: true });
    container.append(image);
    return;
  }
  const preset = createBuiltinIconSvg(item.iconPreset, "builtin-bookmark-icon");
  if (preset) return void container.append(preset);
  setStandardFavicon(container, item);
}

function setStandardFavicon(container, item) {
  container.replaceChildren();
  const image = document.createElement("img");
  image.alt = "";
  image.src = faviconUrl(item.url);
  image.addEventListener("error", () => { image.remove(); container.textContent = item.title.trim().charAt(0).toUpperCase() || "?"; }, { once: true });
  container.append(image);
}

function createItem(item) {
  const row = document.createElement("article");
  const isHome = state.homeBookmarkId === item.id;
  const isCurrent = normalizeUrl(item.url) === normalizeUrl(state.currentUrl);
  row.className = `bookmark${isCurrent ? " is-current" : ""}${selectedBookmarkIds.has(item.id) ? " is-selected" : ""}`;
  row.draggable = !bulkMode;
  row.dataset.id = item.id;
  const domain = safeDomain(item.url);
  row.innerHTML = `${bulkMode ? `<label class="bulk-check" title="選択"><input type="checkbox" ${selectedBookmarkIds.has(item.id) ? "checked" : ""} aria-label="${escapeAttr(item.title)}を選択"></label>` : ""}<div class="favicon"></div><a class="bookmark-link" href="${escapeAttr(item.url)}"><div class="bookmark-title"></div><div class="bookmark-url"></div></a><div class="item-actions"><button class="set-home ${isHome ? "active" : ""}" title="Chromeのホームに設定" aria-label="Chromeのホームに設定">⌂</button><button class="favorite ${item.favorite ? "active" : ""}" title="お気に入り">★</button><button class="delete-item" title="削除" aria-label="削除"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M9 7V4h6v3m-8 0 1 13h8l1-13M10 10v7m4-7v7"/></svg></button><button class="edit" title="編集">•••</button></div>`;
  row.querySelector(".bookmark-title").textContent = item.title;
  const favicon = row.querySelector(".favicon");
  setBookmarkIcon(favicon, item);
  if (isHome) {
    const badge = document.createElement("span");
    badge.className = "home-badge";
    badge.textContent = "HOME";
    row.querySelector(".bookmark-title").append(badge);
  }
  if (state.filter === "all") {
    const badge = document.createElement("span");
    const genre = state.genres.find((entry) => entry.id === item.genreId);
    badge.className = genre ? "genre-badge" : "unassigned-badge";
    badge.textContent = genre?.name || "ジャンル未分類";
    badge.title = genre ? `ジャンル：${genre.name}` : "ジャンル未分類";
    row.querySelector(".bookmark-title").append(badge);
  }
  row.querySelector(".bookmark-url").textContent = domain;
  row.addEventListener("pointerenter", () => {
    if (!draggedBookmarkId && !draggedFolder) playUISound("hover");
  });
  row.title = `${item.title}\n${item.url}`;
  row.querySelector(".bookmark-link").draggable = false;
  row.querySelector(".favicon").draggable = false;
  row.querySelector(".favicon img")?.setAttribute("draggable", "false");
  row.querySelector(".bulk-check input")?.addEventListener("change", (event) => setBookmarkSelected(item.id, event.target.checked));
  row.querySelector(".bookmark-link").addEventListener("click", async (event) => {
    event.preventDefault();
    if (bulkMode) return setBookmarkSelected(item.id, !selectedBookmarkIds.has(item.id));
    const [activeTab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (activeTab?.id) await chrome.tabs.update(activeTab.id, { url: item.url });
  });
  row.addEventListener("click", (event) => {
    if (event.target.closest("a, button, input, label")) return;
    row.querySelector(".bookmark-link").click();
  });
  row.querySelector(".set-home").addEventListener("click", () => selectAsHome(item));
  row.querySelector(".favorite").addEventListener("click", async () => { const undoSnapshot = createUndoSnapshot(); item.favorite = !item.favorite; await persist(item.favorite ? "お気に入りに追加しました" : "お気に入りから外しました", undoSnapshot); });
  row.querySelector(".delete-item").addEventListener("click", () => deleteBookmark(item));
  row.querySelector(".edit").addEventListener("click", () => openEditor(item));
  row.addEventListener("dragstart", (event) => {
    event.stopPropagation();
    const sourceTop = row.getBoundingClientRect().top;
    draggedBookmarkId = item.id;
    movedToFolder = false;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", item.id);
    event.dataTransfer.setDragImage(row, 20, 20);
    row.classList.add("dragging");
    document.body.classList.add("bookmark-dragging");
    const shiftedBy = row.getBoundingClientRect().top - sourceTop;
    if (Math.abs(shiftedBy) > 1) window.scrollBy(0, shiftedBy);
  });
  row.addEventListener("dragend", async () => {
    row.classList.remove("dragging");
    document.querySelectorAll(".drop-target, .folder-drop-zone.active").forEach((el) => el.classList.remove("drop-target", "active"));
    clearBookmarkDragState();
    if (!movedToFolder) await saveOrderFromDom();
    movedToFolder = false;
  });
  row.addEventListener("dragover", handleDragOver);
  row.addEventListener("dragenter", () => {
    if (draggedFolder) {
      if (draggedFolder !== (item.folder || "未分類")) row.classList.add("folder-order-target");
      return;
    }
    const dragged = state.bookmarks.find((bookmark) => bookmark.id === draggedBookmarkId);
    if (dragged && (dragged.folder || "未分類") !== (item.folder || "未分類")) row.classList.add("drop-target");
  });
  row.addEventListener("dragleave", () => row.classList.remove("drop-target", "folder-order-target"));
  row.addEventListener("drop", async (event) => {
    row.classList.remove("drop-target", "folder-order-target");
    if (draggedFolder) {
      event.preventDefault();
      event.stopPropagation();
      const rect = row.getBoundingClientRect();
      return reorderFolder(draggedFolder, item.folder || "未分類", event.clientY >= rect.top + rect.height / 2);
    }
    const bookmarkId = getDroppedBookmarkId(event);
    const dragged = state.bookmarks.find((bookmark) => bookmark.id === bookmarkId);
    if (!dragged) return;
    event.preventDefault();
    event.stopPropagation();
    if ((dragged.folder || "未分類") === (item.folder || "未分類")) return;
    await moveBookmarkToFolder(bookmarkId, item.folder || "未分類");
  });
  return row;
}

function toggleBulkMode(enabled) {
  bulkMode = enabled;
  if (!enabled) selectedBookmarkIds.clear();
  document.body.classList.toggle("bulk-selecting", enabled);
  render();
}

function setBookmarkSelected(id, selected) {
  if (selected) selectedBookmarkIds.add(id);
  else selectedBookmarkIds.delete(id);
  render();
}

function selectVisibleBookmarks() {
  const ids = filteredItems().map((item) => item.id);
  const allSelected = ids.length > 0 && ids.every((id) => selectedBookmarkIds.has(id));
  ids.forEach((id) => allSelected ? selectedBookmarkIds.delete(id) : selectedBookmarkIds.add(id));
  render();
}

function updateBulkToolbar() {
  $("#bulkToolbar").hidden = !bulkMode;
  $("#bulkModeButton").hidden = bulkMode;
  $("#bulkSelectionCount").textContent = `${selectedBookmarkIds.size}件選択`;
  $("#openBulkEditButton").disabled = selectedBookmarkIds.size === 0;
  const visibleIds = filteredItems().map((item) => item.id);
  const allVisibleSelected = visibleIds.length > 0 && visibleIds.every((id) => selectedBookmarkIds.has(id));
  $("#selectVisibleButton").textContent = allVisibleSelected ? "表示中の選択を解除" : "表示中をすべて選択";
}

function openBulkEditDialog() {
  if (!selectedBookmarkIds.size) return;
  $("#bulkEditCount").textContent = `${selectedBookmarkIds.size}件のブックマークを変更します。`;
  const folders = [...new Set(state.bookmarks.map((item) => item.folder || "未分類"))];
  $("#bulkFolderSelect").replaceChildren(
    Object.assign(document.createElement("option"), { value: "keep", textContent: "変更しない" }),
    ...folders.map((name) => Object.assign(document.createElement("option"), { value: `folder:${name}`, textContent: name })),
    Object.assign(document.createElement("option"), { value: "new", textContent: "＋ 新しいフォルダを作成…" })
  );
  $("#bulkGenreSelect").replaceChildren(
    Object.assign(document.createElement("option"), { value: "keep", textContent: "変更しない" }),
    Object.assign(document.createElement("option"), { value: "none", textContent: "ジャンルなし" }),
    ...state.genres.map((genre) => Object.assign(document.createElement("option"), { value: genre.id, textContent: genre.name }))
  );
  $("#bulkFavoriteSelect").value = "keep";
  $("#bulkEditDialog").showModal();
}

function handleBulkFolderSelection() {
  const select = $("#bulkFolderSelect");
  if (select.value !== "new") return;
  const newName = prompt("新しいフォルダ名を入力してください", "")?.trim().slice(0, 40);
  if (!newName || newName === "__new__") return void (select.value = "keep");
  const value = `folder:${newName}`;
  let option = [...select.options].find((entry) => entry.value === value);
  if (!option) {
    option = Object.assign(document.createElement("option"), { value, textContent: newName });
    select.insertBefore(option, select.querySelector('option[value="new"]'));
  }
  select.value = value;
}

async function applyBulkEdit() {
  if (!selectedBookmarkIds.size) return;
  const folderValue = $("#bulkFolderSelect").value;
  const genreValue = $("#bulkGenreSelect").value;
  const favoriteValue = $("#bulkFavoriteSelect").value;
  if (folderValue === "keep" && genreValue === "keep" && favoriteValue === "keep") return showToast("変更内容を選択してください");
  const undoSnapshot = createUndoSnapshot();
  state.bookmarks.forEach((item) => {
    if (!selectedBookmarkIds.has(item.id)) return;
    if (folderValue.startsWith("folder:")) item.folder = folderValue.slice(7);
    if (genreValue !== "keep") item.genreId = genreValue === "none" ? null : genreValue;
    if (favoriteValue !== "keep") item.favorite = favoriteValue === "add";
  });
  const count = selectedBookmarkIds.size;
  $("#bulkEditDialog").close();
  bulkMode = false;
  selectedBookmarkIds.clear();
  document.body.classList.remove("bulk-selecting");
  await persist(`${count}件を変更しました`, undoSnapshot);
}

async function deleteSelectedBookmarks() {
  if (!selectedBookmarkIds.size || !confirm(`${selectedBookmarkIds.size}件のブックマークを削除しますか？`)) return;
  const undoSnapshot = createUndoSnapshot();
  const deletedIds = new Set(selectedBookmarkIds);
  state.bookmarks = state.bookmarks.filter((item) => !deletedIds.has(item.id));
  if (state.homeBookmarkId && deletedIds.has(state.homeBookmarkId)) {
    state.homeBookmarkId = null;
    await chrome.storage.local.remove("homeBookmarkId");
  }
  const count = deletedIds.size;
  $("#bulkEditDialog").close();
  bulkMode = false;
  selectedBookmarkIds.clear();
  document.body.classList.remove("bulk-selecting");
  await persist(`${count}件を削除しました`, undoSnapshot);
}

async function deleteBookmark(item) {
  const undoSnapshot = createUndoSnapshot();
  state.bookmarks = state.bookmarks.filter((bookmark) => bookmark.id !== item.id);
  if (state.homeBookmarkId === item.id) {
    state.homeBookmarkId = null;
    await chrome.storage.local.remove("homeBookmarkId");
  }
  await persist("ブックマークを削除しました", undoSnapshot);
}

function handleDragOver(event) {
  event.preventDefault();
  if (draggedFolder) {
    event.dataTransfer.dropEffect = "move";
    return;
  }
  const dragging = list.querySelector(".dragging");
  const target = event.target.closest(".bookmark");
  if (!dragging || !target || dragging === target) return;
  const draggedItem = state.bookmarks.find((item) => item.id === draggedBookmarkId);
  const targetItem = state.bookmarks.find((item) => item.id === target.dataset.id);
  if (draggedItem && targetItem && (draggedItem.folder || "未分類") !== (targetItem.folder || "未分類")) {
    event.dataTransfer.dropEffect = "move";
    return;
  }
  const rect = target.getBoundingClientRect();
  target.parentNode.insertBefore(dragging, event.clientY < rect.top + rect.height / 2 ? target : target.nextSibling);
}

async function saveOrderFromDom() {
  const ids = [...list.querySelectorAll(".bookmark")].map((el) => el.dataset.id);
  if (ids.length < 2) return render();
  const undoSnapshot = createUndoSnapshot();
  const byId = new Map(state.bookmarks.map((item) => [item.id, item]));
  const visibleIds = new Set(ids);
  let nextIndex = 0;
  state.bookmarks = state.bookmarks.map((item) => {
    if (!visibleIds.has(item.id)) return item;
    const reordered = byId.get(ids[nextIndex]);
    nextIndex += 1;
    return reordered || item;
  });
  await chrome.storage.local.set({ bookmarks: state.bookmarks });
  render();
  showUndoToast("表示順を変更しました", undoSnapshot);
}

function updateCustomIconPreview(item = null) {
  const preview = $("#customIconPreview");
  const title = item?.title || $("#titleInput").value.trim();
  const url = item?.url || $("#urlInput").value.trim();
  setBookmarkIcon(preview, { title, url, customIcon: editingCustomIcon, iconPreset: editingIconPreset });
  $("#removeCustomIconButton").disabled = !editingCustomIcon && !editingIconPreset;
  $("#builtinIconPicker").querySelectorAll(".builtin-icon-option").forEach((button) => button.classList.toggle("selected", button.dataset.preset === editingIconPreset));
}

function renderBuiltinIconPicker() {
  const picker = $("#builtinIconPicker");
  const category = $("#iconCategorySelect").value || "general";
  picker.replaceChildren(...BUILTIN_ICONS.filter((icon) => icon.category === category).map((icon) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "builtin-icon-option";
    button.dataset.preset = icon.id;
    button.title = icon.label;
    button.setAttribute("aria-label", icon.label);
    button.append(createBuiltinIconSvg(icon.id));
    button.addEventListener("click", () => {
      editingIconPreset = icon.id;
      editingCustomIcon = "";
      updateCustomIconPreview();
    });
    return button;
  }));
}

async function loadCustomIcon(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const bitmap = await createImageBitmap(file);
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const scale = Math.min(canvas.width / bitmap.width, canvas.height / bitmap.height);
    const width = Math.max(1, Math.round(bitmap.width * scale));
    const height = Math.max(1, Math.round(bitmap.height * scale));
    canvas.getContext("2d").drawImage(bitmap, Math.round((128 - width) / 2), Math.round((128 - height) / 2), width, height);
    bitmap.close();
    editingCustomIcon = canvas.toDataURL("image/png");
    editingIconPreset = "";
    updateCustomIconPreview();
  } catch {
    showToast("アイコン画像を読み込めませんでした");
  }
  event.target.value = "";
}

function openEditor(item) {
  $("#editingId").value = item.id;
  $("#titleInput").value = item.title;
  $("#urlInput").value = item.url;
  editingCustomIcon = item.customIcon || "";
  editingIconPreset = item.iconPreset || "";
  $("#iconCategorySelect").value = BUILTIN_ICONS.find((icon) => icon.id === editingIconPreset)?.category || "general";
  renderBuiltinIconPicker();
  updateCustomIconPreview(item);
  const folders = [...new Set(state.bookmarks.map((x) => x.folder || "未分類"))];
  const select = $("#folderSelect");
  select.replaceChildren(
    ...folders.map((name) => Object.assign(document.createElement("option"), { value: name, textContent: name })),
    Object.assign(document.createElement("option"), { value: "__new__", textContent: "＋ 新しいフォルダを作成…" })
  );
  select.value = item.folder || "未分類";
  select.dataset.previousFolder = select.value;
  const genreSelect = $("#genreSelect");
  genreSelect.replaceChildren(
    Object.assign(document.createElement("option"), { value: "", textContent: "ジャンルなし" }),
    ...state.genres.map((genre) => Object.assign(document.createElement("option"), { value: genre.id, textContent: genre.name }))
  );
  genreSelect.value = item.genreId || "";
  $("#editDialog").showModal();
  $("#titleInput").focus();
}

async function saveEdit(event) {
  const submitter = event.submitter;
  if (!submitter || submitter.value === "cancel") return;
  event.preventDefault();
  const item = state.bookmarks.find((x) => x.id === $("#editingId").value);
  if (!item) return;
  const undoSnapshot = createUndoSnapshot();
  if (submitter.value === "delete") {
    state.bookmarks = state.bookmarks.filter((x) => x.id !== item.id);
    if (state.homeBookmarkId === item.id) {
      state.homeBookmarkId = null;
      await chrome.storage.local.remove("homeBookmarkId");
    }
    $("#editDialog").close();
    return persist("ブックマークを削除しました", undoSnapshot);
  }
  item.title = $("#titleInput").value.trim();
  item.url = $("#urlInput").value.trim();
  item.customIcon = editingCustomIcon;
  item.iconPreset = editingIconPreset;
  item.folder = $("#folderSelect").value || "未分類";
  item.genreId = $("#genreSelect").value || null;
  $("#editDialog").close();
  await persist("変更を保存しました", undoSnapshot);
}

async function persist(message, undoSnapshot = null) { await chrome.storage.local.set({ bookmarks: state.bookmarks }); render(); undoSnapshot ? showUndoToast(message, undoSnapshot) : showToast(message); }

function handleFolderSelection() {
  const select = $("#folderSelect");
  if (select.value !== "__new__") {
    select.dataset.previousFolder = select.value;
    return;
  }
  const previous = select.dataset.previousFolder || "未分類";
  const entered = prompt("新しいフォルダ名を入力してください", "");
  const newName = entered?.trim().slice(0, 40);
  if (!newName || newName === "__new__") {
    select.value = previous;
    return;
  }
  const existing = [...select.options].find((option) => option.value === newName);
  if (!existing) {
    const option = Object.assign(document.createElement("option"), { value: newName, textContent: newName });
    select.insertBefore(option, select.querySelector('option[value="__new__"]'));
  }
  select.value = newName;
  select.dataset.previousFolder = newName;
}

async function renameFolder(oldName) {
  const entered = prompt(`「${oldName}」の新しい名前`, oldName);
  if (entered === null) return;
  const newName = entered.trim();
  if (!newName || newName === oldName) return;
  const mergesWithExisting = state.bookmarks.some((item) => (item.folder || "未分類") === newName && (item.folder || "未分類") !== oldName);
  if (mergesWithExisting && !confirm(`「${newName}」はすでに存在します。\n同じフォルダとして統合しますか？`)) return;
  const undoSnapshot = createUndoSnapshot();
  state.bookmarks.forEach((item) => {
    if ((item.folder || "未分類") === oldName) item.folder = newName;
  });
  if (state.collapsedFolders.delete(oldName)) state.collapsedFolders.add(newName);
  state.folderOrder = state.folderOrder.map((folder) => folder === oldName ? newName : folder);
  state.folderOrder = [...new Set(state.folderOrder)];
  await chrome.storage.local.set({ collapsedFolders: [...state.collapsedFolders], folderOrder: state.folderOrder });
  await persist(`フォルダ名を「${newName}」に変更しました`, undoSnapshot);
}

async function toggleFolder(folder) {
  if (state.collapsedFolders.has(folder)) state.collapsedFolders.delete(folder);
  else state.collapsedFolders.add(folder);
  await chrome.storage.local.set({ collapsedFolders: [...state.collapsedFolders] });
  render();
}

function updateFolderToggleButton(visibleFolders, hideOnlyUnclassifiedHeading) {
  const button = $("#toggleAllFoldersButton");
  button.hidden = hideOnlyUnclassifiedHeading || visibleFolders.length === 0;
  if (button.hidden) return;
  const allCollapsed = visibleFolders.every((folder) => state.collapsedFolders.has(folder));
  button.textContent = allCollapsed ? "▸" : "▾";
  button.title = allCollapsed ? "表示中のフォルダをすべて展開" : "表示中のフォルダをすべて折りたたむ";
  button.setAttribute("aria-label", button.title);
}

async function toggleAllFolders() {
  const visibleFolders = [...new Set(filteredItems().map((item) => item.folder || "未分類"))];
  const allCollapsed = visibleFolders.length > 0 && visibleFolders.every((folder) => state.collapsedFolders.has(folder));
  visibleFolders.forEach((folder) => allCollapsed ? state.collapsedFolders.delete(folder) : state.collapsedFolders.add(folder));
  await chrome.storage.local.set({ collapsedFolders: [...state.collapsedFolders] });
  render();
  showToast(allCollapsed ? "表示中のフォルダを展開しました" : "表示中のフォルダを折りたたみました");
}

async function moveBookmarkToFolder(bookmarkId, folder, appendToEnd = false) {
  const item = state.bookmarks.find((bookmark) => bookmark.id === bookmarkId);
  if (!item) return;
  movedToFolder = true;
  if ((item.folder || "未分類") === folder && !appendToEnd) {
    showToast(`すでに「${folder}」に入っています`);
    render();
    clearBookmarkDragState();
    return;
  }
  const undoSnapshot = createUndoSnapshot();
  const sourceIndex = state.bookmarks.indexOf(item);
  item.folder = folder;
  state.bookmarks.splice(sourceIndex, 1);
  const lastTargetIndex = state.bookmarks.findLastIndex((bookmark) => (bookmark.folder || "未分類") === folder);
  state.bookmarks.splice(lastTargetIndex + 1, 0, item);
  await persist(appendToEnd ? `「${folder}」の末尾へ移動しました` : `「${folder}」へ移動しました`, undoSnapshot);
  clearBookmarkDragState();
}

function clearBookmarkDragState() {
  draggedBookmarkId = null;
  bookmarkDragPointerY = null;
  if (bookmarkAutoScrollFrame) cancelAnimationFrame(bookmarkAutoScrollFrame);
  bookmarkAutoScrollFrame = 0;
  document.body.classList.remove("bookmark-dragging");
  document.querySelectorAll(".drop-target, .folder-drop-zone.active").forEach((element) => element.classList.remove("drop-target", "active"));
}

function getDroppedBookmarkId(event) {
  const payload = event.dataTransfer?.getData("text/plain") || "";
  if (payload && !payload.startsWith("folder:")) return payload;
  return draggedBookmarkId;
}

async function reorderFolder(source, target, placeAfter) {
  if (!source || source === target) return render();
  const undoSnapshot = createUndoSnapshot();
  const order = state.folderOrder.filter((folder) => folder !== source);
  let targetIndex = order.indexOf(target);
  if (targetIndex < 0) return;
  if (placeAfter) targetIndex += 1;
  order.splice(targetIndex, 0, source);
  state.folderOrder = order;
  draggedFolder = null;
  document.body.classList.remove("folder-dragging");
  await chrome.storage.local.set({ folderOrder: state.folderOrder });
  render();
  showUndoToast("分類の順番を変更しました", undoSnapshot);
}

async function selectAsHome(item) {
  state.homeBookmarkId = item.id;
  await chrome.storage.local.set({ homeBookmarkId: item.id });
  try { await navigator.clipboard.writeText(item.url); } catch { /* 設定画面はそのまま開く */ }
  render();
  showToast("URLをコピーしました。ホームボタン欄に貼り付けてください");
  setTimeout(() => chrome.tabs.create({ url: "chrome://settings/appearance" }), 450);
}

function safeDomain(url) { try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; } }
function normalizeUrl(url) {
  try {
    const parsed = new URL(url);
    if (parsed.hostname === "game.granbluefantasy.jp") {
      return parsed.href;
    }
    parsed.hash = "";
    if (parsed.pathname !== "/") parsed.pathname = parsed.pathname.replace(/\/$/, "");
    return parsed.href;
  } catch { return url || ""; }
}

async function refreshCurrentUrl(shouldRender = true) {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const nextUrl = tab?.url || "";
  const previousUrl = state.currentUrl;
  const previousSplitSignature = state.splitView ? `${state.splitView.leftTabId}:${state.splitView.rightTabId}:${state.splitView.activeTabId}:${state.splitView.leftTitle}:${state.splitView.rightTitle}` : "";
  state.splitView = null;
  if (tab && Number.isInteger(tab.splitViewId) && tab.splitViewId !== chrome.tabs.SPLIT_VIEW_ID_NONE) {
    const windowTabs = await chrome.tabs.query({ windowId: tab.windowId });
    const splitTabs = windowTabs.filter((candidate) => candidate.splitViewId === tab.splitViewId).sort((a, b) => a.index - b.index);
    const [left, right] = splitTabs;
    if (left?.id && right?.id) {
      state.splitView = {
        activeTabId: tab.id,
        leftTabId: left.id,
        rightTabId: right.id,
        leftTitle: left.title || safeDomain(left.url || "") || "左側のページ",
        rightTitle: right.title || safeDomain(right.url || "") || "右側のページ"
      };
    }
  }
  state.currentUrl = nextUrl;
  updateSplitViewStatus();
  const nextSplitSignature = state.splitView ? `${state.splitView.leftTabId}:${state.splitView.rightTabId}:${state.splitView.activeTabId}:${state.splitView.leftTitle}:${state.splitView.rightTitle}` : "";
  if (shouldRender && (nextUrl !== previousUrl || previousSplitSignature !== nextSplitSignature)) render();
}

function updateSplitViewStatus() {
  const panel = $("#splitViewStatus");
  const visible = Boolean(state.splitView);
  panel.hidden = !visible;
  document.body.classList.toggle("split-view-active", Boolean(state.splitView));
  if (!visible) return;
  $("#splitLeftTitle").textContent = state.splitView.leftTitle;
  $("#splitRightTitle").textContent = state.splitView.rightTitle;
  $("#splitLeftTab").title = `左側：${state.splitView.leftTitle}`;
  $("#splitRightTab").title = `右側：${state.splitView.rightTitle}`;
  $("#splitLeftTab").classList.toggle("active", state.splitView.activeTabId === state.splitView.leftTabId);
  $("#splitRightTab").classList.toggle("active", state.splitView.activeTabId === state.splitView.rightTabId);
}

async function focusSplitTab(tabId) {
  if (!tabId) return;
  try {
    await chrome.tabs.update(tabId, { active: true });
    await refreshCurrentUrl();
  } catch { showToast("分割表示のページを選択できませんでした"); }
}

function faviconUrl(url) { return `chrome-extension://${chrome.runtime.id}/_favicon/?pageUrl=${encodeURIComponent(url)}&size=32`; }
function escapeAttr(value) { return value.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;"); }
function createUndoSnapshot() {
  return {
    bookmarks: structuredClone(state.bookmarks),
    genres: structuredClone(state.genres),
    favoriteTabIndex: state.favoriteTabIndex,
    folderOrder: [...state.folderOrder],
    collapsedFolders: [...state.collapsedFolders],
    homeBookmarkId: state.homeBookmarkId,
    genreBackgrounds: structuredClone(state.genreBackgrounds),
    filter: state.filter
  };
}

async function restoreUndoSnapshot(snapshot) {
  state.bookmarks = structuredClone(snapshot.bookmarks);
  state.genres = structuredClone(snapshot.genres);
  state.favoriteTabIndex = snapshot.favoriteTabIndex;
  state.folderOrder = [...snapshot.folderOrder];
  state.collapsedFolders = new Set(snapshot.collapsedFolders);
  state.homeBookmarkId = snapshot.homeBookmarkId;
  state.genreBackgrounds = structuredClone(snapshot.genreBackgrounds || {});
  state.filter = snapshot.filter;
  await chrome.storage.local.set({ bookmarks: state.bookmarks, genres: state.genres, favoriteTabIndex: state.favoriteTabIndex, folderOrder: state.folderOrder, collapsedFolders: [...state.collapsedFolders], homeBookmarkId: state.homeBookmarkId, genreBackgrounds: state.genreBackgrounds });
  lastUndoSnapshot = null;
  updateUndoButton();
  render();
  showToast("操作を元に戻しました");
}

function updateUndoButton() {
  const button = $("#undoButton");
  button.disabled = !lastUndoSnapshot;
  button.title = lastUndoSnapshot ? "直前の操作を元に戻す" : "元に戻せる操作はありません";
}

async function undoLastAction() {
  if (!lastUndoSnapshot) return;
  const snapshot = lastUndoSnapshot;
  lastUndoSnapshot = null;
  updateUndoButton();
  await restoreUndoSnapshot(snapshot);
}

function showToast(message) {
  const toast = $("#toast");
  toast.replaceChildren(Object.assign(document.createElement("span"), { textContent: message }));
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

function showUndoToast(message, snapshot) {
  lastUndoSnapshot = snapshot;
  updateUndoButton();
  showToast(message);
}

function exportData() {
  downloadBackup(createBackupData(false), `sidemarks-${new Date().toISOString().slice(0, 10)}.json`);
}

function createBackupData(includeBackgrounds) {
  const lightweightPresets = state.backgroundPresets.map((preset) => ({ ...preset, background: { ...preset.background, image: "" } }));
  const data = { version: 10, backupType: includeBackgrounds ? "complete" : "lightweight", bookmarks: state.bookmarks, genres: state.genres, favoriteTabIndex: state.favoriteTabIndex, folderOrder: state.folderOrder, collapsedFolders: [...state.collapsedFolders], theme: state.theme, homeBookmarkId: state.homeBookmarkId, appearance: state.appearance, backgroundPresets: lightweightPresets, backgroundPresetAssignments: state.backgroundPresetAssignments, eventSchedule: state.eventSchedule };
  if (includeBackgrounds) Object.assign(data, { background: state.background, genreBackgrounds: state.genreBackgrounds, backgroundTransition: state.backgroundTransition, backgroundPresets: structuredClone(state.backgroundPresets) });
  return data;
}

function exportCompleteData() {
  const data = createBackupData(true);
  const json = JSON.stringify(data, null, 2);
  const bytes = new Blob([json]).size;
  const size = bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.ceil(bytes / 1024))} KB`;
  const message = `完全バックアップの推定サイズは約${size}です。\n\n背景画像、背景プリセット画像、登録URL、各種設定が含まれます。個人の移行・復元用として保存し、他人への共有には注意してください。\n\n書き出しますか？`;
  if (!confirm(message)) return;
  downloadBackup(data, `sidemarks-complete-${new Date().toISOString().slice(0, 10)}.json`, json);
}

function exportSelectedData() {
  const sections = [
    ["bookmarks", $("#backupBookmarks").checked],
    ["appearance", $("#backupAppearance").checked],
    ["backgrounds", $("#backupBackgrounds").checked],
    ["schedule", $("#backupSchedule").checked]
  ].filter(([, selected]) => selected).map(([name]) => name);
  if (!sections.length) { showToast("書き出す項目を選んでください"); return; }
  const data = { version: 11, backupType: "selected", selectedSections: sections };
  if (sections.includes("bookmarks")) Object.assign(data, { bookmarks: state.bookmarks, genres: state.genres, favoriteTabIndex: state.favoriteTabIndex, folderOrder: state.folderOrder, collapsedFolders: [...state.collapsedFolders], homeBookmarkId: state.homeBookmarkId });
  if (sections.includes("appearance")) Object.assign(data, { theme: state.theme, appearance: state.appearance });
  if (sections.includes("backgrounds")) Object.assign(data, { background: state.background, genreBackgrounds: state.genreBackgrounds, backgroundTransition: state.backgroundTransition, backgroundPresets: structuredClone(state.backgroundPresets), backgroundPresetAssignments: state.backgroundPresetAssignments });
  if (sections.includes("schedule")) data.eventSchedule = state.eventSchedule;
  const json = JSON.stringify(data, null, 2);
  if (sections.includes("backgrounds")) {
    const bytes = new Blob([json]).size;
    const size = bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.max(1, Math.ceil(bytes / 1024))} KB`;
    if (!confirm(`背景画像を含む選択バックアップの推定サイズは約${size}です。\n個人的な画像が含まれる可能性があります。書き出しますか？`)) return;
  }
  downloadBackup(data, `sidemarks-selected-${new Date().toISOString().slice(0, 10)}.json`, json);
}

function downloadBackup(data, filename, preparedJson = null) {
  const blob = new Blob([preparedJson || JSON.stringify(data, null, 2)], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  setTimeout(() => URL.revokeObjectURL(link.href), 1000);
}

async function importData(event) {
  try {
    const parsed = JSON.parse(await event.target.files[0].text());
    const validSections = ["bookmarks", "appearance", "backgrounds", "schedule"];
    const isSelected = parsed.backupType === "selected" && Array.isArray(parsed.selectedSections);
    const sections = isSelected ? parsed.selectedSections.filter((section) => validSections.includes(section)) : validSections;
    if ((isSelected && !sections.length) || (!isSelected && !Array.isArray(parsed.bookmarks))) throw new Error();
    const isComplete = parsed.backupType === "complete";
    if (isComplete && !confirm("完全バックアップを読み込みます。\n現在のブックマーク、設定、背景画像がバックアップ内容に置き換わります。続けますか？")) { event.target.value = ""; return; }
    if (isSelected) {
      const sectionLabels = { bookmarks: "ブックマークと分類", appearance: "表示・操作設定", backgrounds: "背景画像とプリセット", schedule: "古戦場日程" };
      if (!confirm(`次の項目を読み込みます。\n\n${sections.map((section) => `・${sectionLabels[section]}`).join("\n")}\n\n対象項目は現在の内容から置き換わります。続けますか？`)) { event.target.value = ""; return; }
    }
    if (sections.includes("bookmarks")) {
      if (!Array.isArray(parsed.bookmarks)) throw new Error();
      state.bookmarks = normalizeBookmarks(parsed.bookmarks);
      state.genres = Array.isArray(parsed.genres) ? parsed.genres.map(normalizeGenre).filter(Boolean) : [];
      state.favoriteTabIndex = Number.isInteger(parsed.favoriteTabIndex) ? parsed.favoriteTabIndex : 0;
      state.folderOrder = Array.isArray(parsed.folderOrder) ? parsed.folderOrder : [];
      state.collapsedFolders = new Set(Array.isArray(parsed.collapsedFolders) ? parsed.collapsedFolders : []);
      state.homeBookmarkId = parsed.homeBookmarkId === undefined || parsed.homeBookmarkId === null ? null : String(parsed.homeBookmarkId);
    }
    const importedGenreIds = new Set(["__favorite__", "__unassigned__", ...state.genres.map((genre) => genre.id)]);
    if (isComplete || (isSelected && sections.includes("backgrounds"))) {
      state.background = parsed.background && typeof parsed.background === "object" ? normalizeBackgroundSettings(parsed.background) : { ...DEFAULT_BACKGROUND };
      const importedBackgrounds = parsed.genreBackgrounds && typeof parsed.genreBackgrounds === "object" ? parsed.genreBackgrounds : {};
      state.genreBackgrounds = Object.fromEntries(Object.entries(importedBackgrounds).filter(([key, settings]) => importedGenreIds.has(key) && settings && typeof settings === "object").map(([key, settings]) => [key, normalizeBackgroundSettings(settings)]));
      state.backgroundTransition = ["crossfade", "blur", "none"].includes(parsed.backgroundTransition) ? parsed.backgroundTransition : "crossfade";
      state.backgroundPresets = normalizeBackgroundPresets(parsed.backgroundPresets);
      state.backgroundPresetAssignments = normalizeBackgroundPresetAssignments(parsed.backgroundPresetAssignments, state.backgroundPresets);
    } else if (!isSelected) {
      state.backgroundPresets = normalizeBackgroundPresets(parsed.backgroundPresets);
      state.backgroundPresetAssignments = normalizeBackgroundPresetAssignments(parsed.backgroundPresetAssignments, state.backgroundPresets);
      state.genreBackgrounds = Object.fromEntries(Object.entries(state.genreBackgrounds).filter(([genreId]) => importedGenreIds.has(genreId)));
    }
    if (sections.includes("appearance")) {
      if (parsed.theme === "light" || parsed.theme === "dark") state.theme = parsed.theme;
      state.appearance = parsed.appearance && typeof parsed.appearance === "object" ? { ...state.appearance, ...parsed.appearance } : state.appearance;
    }
    if (sections.includes("schedule") && Object.hasOwn(parsed, "eventSchedule")) state.eventSchedule = normalizeEventSchedule(parsed.eventSchedule);
    const importedSettings = { genres: state.genres, favoriteTabIndex: state.favoriteTabIndex, folderOrder: state.folderOrder, collapsedFolders: [...state.collapsedFolders], theme: state.theme, homeBookmarkId: state.homeBookmarkId, appearance: state.appearance, genreBackgrounds: state.genreBackgrounds, backgroundPresets: state.backgroundPresets, backgroundPresetAssignments: state.backgroundPresetAssignments, eventSchedule: state.eventSchedule };
    if (isComplete || sections.includes("backgrounds")) Object.assign(importedSettings, { background: state.background, backgroundTransition: state.backgroundTransition });
    await chrome.storage.local.set(importedSettings);
    applyTheme();
    applyAppearance();
    await persist(isComplete ? "完全バックアップを復元しました" : isSelected ? "選択した項目を復元しました" : "軽量バックアップを読み込みました");
    $("#dataDialog").close();
  } catch { showToast("読み込めないファイルです"); }
  event.target.value = "";
}

init();
