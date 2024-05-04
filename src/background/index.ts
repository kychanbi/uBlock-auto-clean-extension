import {isBlockedSite, removeBlockedTab} from '../utils/utils';

console.info('chrome-ext template-react-ts background script')
console.info('updated 2')

chrome.tabs.onCreated.addListener(async function(tab: chrome.tabs.Tab) {
  console.log('onCreated', tab)
  removeBlockedTab();
});
chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab) => {
  console.log('onUpdated', changeInfo, tab)
  if (changeInfo.status === 'complete' && tab.url) {
    if(isBlockedSite(tab)){
      chrome.tabs.remove(tabId);
    }
  }
});

export {}

