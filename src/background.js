// background.js
chrome.runtime.onInstalled.addListener(() => {
  // Default blocked websites (Add more as needed)
  const defaultBlockedWebsites = ["www.instagram.com","www.facebook.com","www.pornhub.com", "www.wikihow.com"];

  chrome.storage.sync.set({ blockedWebsites: defaultBlockedWebsites }, () => {
    console.log("Default blocked websites set:", defaultBlockedWebsites);
  });
});

// Block the page content if the website is blocked
chrome.webNavigation.onDOMContentLoaded.addListener((details) => {
  const blockedWebsites = [];
  chrome.storage.sync.get("blockedWebsites", (data) => {
    if (data.blockedWebsites) {
      blockedWebsites.push(...data.blockedWebsites);
    }

    const currentHostname = new URL(details.url).hostname.toLowerCase();
    if (blockedWebsites.includes(currentHostname)) {
      // Block the page by redirecting it to a blocked page
      const blockedPage = chrome.runtime.getURL("blocked.html");
      chrome.tabs.update(details.tabId, { url: blockedPage });
    }
  });
});
