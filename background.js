chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension Installed");
  });


chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: capturePage,
  });
});

function capturePage() {
  const pageContent = document.documentElement.outerHTML;
  chrome.storage.local.set({ pageContent }, () => {
    console.log('Page content saved');
  });
}