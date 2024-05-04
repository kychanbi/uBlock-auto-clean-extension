export function removeBlockedTab() {
  chrome.tabs.query({
    currentWindow: true,
    active: true
  }, function (tabs:chrome.tabs.Tab[]) {
    if (isBlockedSite(tabs[0])) {
      tabs[0].id && chrome.tabs.remove(tabs[0].id);
    }
  });
}

export function isBlockedSite(tab: chrome.tabs.Tab){
  return tab?.pendingUrl?.includes('chrome-extension') && tab.pendingUrl?.includes('document-blocked') || tab.url?.includes('chrome-extension') && tab.url?.includes('document-blocked');
}
