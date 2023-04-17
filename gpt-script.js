chrome.runtime.onMessage.addListener(
    function (emailContent, sender, sendResponse) {
        console.log('====================================');
        console.log(emailContent);
        console.log('====================================');
        const textArea = document.querySelector("textarea")
        textArea.value = "Response to the most recent email in a professional tone and sign off with name (shravan meena at the end:/n)" + emailContent
        const button = textArea.nextElementSibling
        button.disabled = false
        button.click()
        button.disabled = true
        let isExist = false
        setInterval(() => {
            isExist = document.querySelector(".text-2xl")
            if (!isExist) {
                const respnse = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative.flex > div.flex.h-full.max-w-full.flex-1.flex-col > main > div.flex-1.overflow-hidden > div > div > div").childNodes
                let lastResponse = respnse[respnse.length - 2]
                let lastResponseText = lastResponse.innerText
                sendResponse(lastResponseText)
            }
        }, 1000);
        return true
        // const callback = function (mutationList, observer) {
        //     for (const mutation of mutationList) {
        //         if (mutation.attributeName === "disabled") {
        //             if (button.disabled === false) {
        //                 const respnse = document.querySelector("#__next > div.overflow-hidden.w-full.h-full.relative.flex > div.flex.h-full.max-w-full.flex-1.flex-col > main > div.flex-1.overflow-hidden > div > div > div").childNodes
        //                 let lastResponse = respnse[respnse.length - 2]
        //                 let lastResponseText = lastResponse.innerText
        //                 console.log('====================================');
        //                 console.log(lastResponseText,"lastResponseText");
        //                 console.log('====================================');
        //                 sendResponse(lastResponseText)
        //             }
        //         }
        //     }
        // }
        // const observer = new MutationObserver(callback)
        // observer.observe(button, { attributes: true })
    }
)