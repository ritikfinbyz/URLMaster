// Function to send URL data to background script
function sendUrlDataToBackground(url, time) {
    chrome.runtime.sendMessage({ url: url, time: time });
    console.log({ url: url, time: time });
  }
  
  // Function to update current URL and time
  function updateInfo() {
    var url = window.location.href;
    var time = new Date().toLocaleTimeString();
    document.getElementById("currentUrl").textContent = "Current URL: " + url;
    document.getElementById("currentTime").textContent = "Current Time: " + time;
    sendUrlDataToBackground(url, time); // Send URL data to background script
  }
  
  // Call the function initially
  updateInfo();
  
  // Update URL and time on page load and whenever the URL changes
  window.addEventListener("load", updateInfo);
  window.addEventListener("hashchange", updateInfo);
  window.addEventListener("popstate", updateInfo);
  