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

// Block the page content if the website is blocked
chrome.webNavigation.onCommitted.addListener((details) => {
  const currentHostname = new URL(details.url).hostname.toLowerCase();
  isWebsiteBlocked(currentHostname, (isBlocked) => {
    if (isBlocked) {
      // Block the page by redirecting it to a blocked page
      const blockedPage = chrome.runtime.getURL("blocked.html");
      chrome.tabs.update(details.tabId, { url: blockedPage });
    }
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

// Listen for messages from the browser action popup
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
  }
  return true; // Indicates that the response will be sent asynchronously
});

// Listen for messages from the browser action popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "addBlockedWebsite") {
    // ... (previous code)
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

