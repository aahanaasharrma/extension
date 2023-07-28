// popup.js
document.getElementById("add-button").addEventListener("click", function () {
  const website = document.getElementById("website-input").value.trim();
  if (website) {
    chrome.storage.sync.get({ blockedWebsites: [] }, function (result) {
      const blockedWebsites = result.blockedWebsites;
      if (!blockedWebsites.includes(website)) {
        blockedWebsites.push(website);
        chrome.storage.sync.set({ blockedWebsites: blockedWebsites }, function () {
          chrome.runtime.sendMessage({ action: "updateRules" });
        });
      }
    });
  }
});

document.getElementById("remove-button").addEventListener("click", function () {
  const website = document.getElementById("website-input").value.trim();
  if (website) {
    chrome.storage.sync.get({ blockedWebsites: [] }, function (result) {
      const blockedWebsites = result.blockedWebsites;
      const index = blockedWebsites.indexOf(website);
      if (index !== -1) {
        blockedWebsites.splice(index, 1);
        chrome.storage.sync.set({ blockedWebsites: blockedWebsites }, function () {
          chrome.runtime.sendMessage({ action: "updateRules" });
        });
      }
    });
  }
});
