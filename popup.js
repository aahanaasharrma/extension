// popup.js

document.getElementById("blockWebsiteForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const websiteInput = document.getElementById("websiteInput");
  const website = websiteInput.value.trim();
  if (website) {
    chrome.runtime.sendMessage({ action: "addBlockedWebsite", website }, (response) => {
      if (response.success) {
        showMessage(`Website ${website} has been added to the blocked list.`);
      } else {
        showMessage(response.message);
      }
    });
  }
});

function showMessage(message) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
  setTimeout(() => {
    messageDiv.textContent = "";
  }, 3000);
}
