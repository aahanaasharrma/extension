// background.js

// Set up the default blocked websites on installation
chrome.runtime.onInstalled.addListener(() => {
  const defaultBlockedWebsites = [
    "www.instagram.com",
    "www.facebook.com",
    "www.pornhub.com",
    "www.wikihow.com",
    "alexadevsrm.com",
    "www.srmkzilla.net"
  ];

  chrome.storage.sync.set({ blockedWebsites: defaultBlockedWebsites }, () => {
    console.log("Default blocked websites set:", defaultBlockedWebsites);
  });
});

// Function to check if a website is blocked
function isWebsiteBlocked(hostname, callback) {
  chrome.storage.sync.get("blockedWebsites", (data) => {
    const blockedWebsites = data.blockedWebsites || [];
    const isBlocked = blockedWebsites.some((blockedSite) => {
      const regex = new RegExp(`^${blockedSite.replace(/\./g, "\\.")}$`);
      return regex.test(hostname);
    });
    callback(isBlocked);
  });
}

// Block the page content if the website is blocked
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    const currentHostname = new URL(changeInfo.url).hostname.toLowerCase();
    isWebsiteBlocked(currentHostname, (isBlocked) => {
      if (isBlocked) {
        // Block the page by redirecting it to the blocked page
        const blockedPage = chrome.runtime.getURL("blocked.html");
        chrome.tabs.update(tabId, { url: blockedPage });
      }
    });
  }
});

// Listen for messages from the popup (popup.js)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "addBlockedWebsite") {
    const websiteToAdd = message.website;
    if (websiteToAdd) {
      chrome.storage.sync.get("blockedWebsites", (data) => {
        const blockedWebsites = data.blockedWebsites || [];
        if (!blockedWebsites.includes(websiteToAdd)) {
          blockedWebsites.push(websiteToAdd);
          chrome.storage.sync.set({ blockedWebsites }, () => {
            sendResponse({ success: true });
          });
        } else {
          sendResponse({ success: false, message: "Website is already blocked." });
        }
      });
    }
  } else if (message.action === "removeBlockedWebsite") {
    const websiteToRemove = message.website;
    if (websiteToRemove) {
      chrome.storage.sync.get("blockedWebsites", (data) => {
        let blockedWebsites = data.blockedWebsites || [];
        blockedWebsites = blockedWebsites.filter((blockedSite) => blockedSite !== websiteToRemove);
        chrome.storage.sync.set({ blockedWebsites }, () => {
          sendResponse({ success: true });
        });
      });
    }
  }
  return true; // Indicates that the response will be sent asynchronously
});
// Block the page content if the website is blocked
chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.url) {
    const currentHostname = new URL(changeInfo.url).hostname.toLowerCase();
    isWebsiteBlocked(currentHostname, (isBlocked) => {
      if (isBlocked) {
        // Block the page by redirecting it to the blocked page (using an absolute path)
        const blockedPage = chrome.runtime.getURL("/src/blocked.html");
        chrome.tabs.update(tabId, { url: blockedPage });
      }
    });
  }
});

// ... (previous code)
