const FAVORITE_PREFIX = "sidemarks-favorite:";
const PAGE_CONTEXTS = ["page", "frame", "selection", "link", "editable", "image", "video", "audio"];

chrome.runtime.onInstalled.addListener(async () => {
  await chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  await rebuildContextMenus();
});

chrome.runtime.onStartup.addListener(async () => {
  await chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
  await rebuildContextMenus();
});

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.bookmarks) rebuildContextMenus();
});

async function rebuildContextMenus() {
  await chrome.contextMenus.removeAll();
  const { bookmarks = [] } = await chrome.storage.local.get("bookmarks");
  const favorites = bookmarks.filter((item) => item.favorite && /^https?:/.test(item.url));
  const favoriteContexts = [...PAGE_CONTEXTS, "action"];
  if (!favorites.length) {
    chrome.contextMenus.create({
      id: "sidemarks-no-favorites",
      title: "お気に入りはありません",
      enabled: false,
      contexts: favoriteContexts
    });
  } else {
    favorites.forEach((item) => {
      const title = item.title.length > 45 ? `${item.title.slice(0, 44)}…` : item.title;
      chrome.contextMenus.create({
        id: `${FAVORITE_PREFIX}${item.id}`,
        title: `★ ${title}`,
        contexts: favoriteContexts
      });
    });
  }
  chrome.contextMenus.create({
    id: "sidemarks-separator",
    type: "separator",
    contexts: favoriteContexts
  });
  chrome.contextMenus.create({
    id: "sidemarks-add-page",
    title: "＋ このページをSideMarksに追加",
    contexts: PAGE_CONTEXTS
  });
  chrome.contextMenus.create({
    id: "sidemarks-add-current-action",
    title: "＋ 現在のページをSideMarksに追加",
    contexts: ["action"]
  });
}

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  const menuId = String(info.menuItemId);
  if (menuId.startsWith(FAVORITE_PREFIX)) {
    const bookmarkId = menuId.slice(FAVORITE_PREFIX.length);
    const { bookmarks = [] } = await chrome.storage.local.get("bookmarks");
    const bookmark = bookmarks.find((item) => item.id === bookmarkId && item.favorite);
    if (!bookmark) return;
    if (tab?.id) await chrome.tabs.update(tab.id, { url: bookmark.url });
    return;
  }

  if (!["sidemarks-add-page", "sidemarks-add-current-action"].includes(menuId) || !tab?.url) return;
  await addTabToSideMarks(tab);
});

async function addTabToSideMarks(tab) {
  if (!tab?.url || !/^https?:/.test(tab.url)) return;
  const { bookmarks = [] } = await chrome.storage.local.get("bookmarks");
  if (!bookmarks.some((item) => item.url === tab.url)) {
    bookmarks.unshift({
      id: crypto.randomUUID(),
      title: tab.title || tab.url,
      url: tab.url,
      folder: "未分類",
      genreId: null,
      favorite: false,
      createdAt: Date.now()
    });
    await chrome.storage.local.set({ bookmarks });
  }
}
