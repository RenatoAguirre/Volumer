
//event handler
chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  switch (message.name.toLowerCase()) {
    case 'hello':
      sendResponse("processed");
      console.log("Hello from the service worker", message.tabId);
      break;
    default:
      throw Error(`Unknown message received: ${message}`);
  }
})

