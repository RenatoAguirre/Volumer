
//event handler
chrome.runtime.onMessage.addListener(async (message, sender, respond) => {
  switch (message.name) {
    case 'get-all-audible-tabs':
      respond(await getAllAudibleTabs())
      break
    default:
      throw Error(`Unknown message received: ${message}`)
  }
})

