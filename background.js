console.log("Hello from BG2.0");

chrome.runtime.onMessage.addListener(
    function (emailContent, sender, sendResponse) {
        (async function () {
            const tabs = await chrome.tabs.query({ url: "https://chat.openai.com/*" })
            const tabId = tabs[0]?.id
            const gptResponse =  await chrome.tabs.sendMessage(tabId, emailContent)
            console.log('=============BACK=======================');
            console.log(gptResponse);
            console.log('==================BACK==================');
            sendResponse(gptResponse)
        })()
        return true
    }
)

