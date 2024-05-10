// Background script
chrome.tabs.onCreated.addListener(function(tab) {
    displayCurrentUrl();
  });
  
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
      displayCurrentUrl();
    }
  });
  
  function displayCurrentUrl() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      if (tabs && tabs.length > 0) {
        var currentUrl = tabs[0].url;
        console.log("Current URL:", currentUrl);
      }
    });
  }
  