function saveUrlData(url, time) {
  const log = {
    url: url,
    time: time,
  };

  // Store the data in chrome.storage.local
  chrome.storage.local.set({ 'urlLog': log }, function() {
    console.log('Data has been saved to chrome.storage');
  });
}

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
  if (message.url && message.time) {
    saveUrlData(message.url, message.time);
  }
});
