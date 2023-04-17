window.onload = () => {
// document.body.appendChild(document.createTextNode("I am ready to loading...."))
// document.body.innerText = "asdadhkask"
    window.onhashchange = () => {
        if (window.location.hash.startsWith("#inbox/")) {
            let spans = document.querySelectorAll("span")
            for (let span of spans) {
                if (span.innerText === "Reply") {
                    span.addEventListener("click", () => {
                        let email = document.querySelector(".adn.ads")
                        console.log(email.textContent, "textContent");
                     
                        (async function () {
                            const gptResponse = await chrome.runtime.sendMessage(email.textContent)
                            console.log('====================GMIL================');
                            console.log(gptResponse);
                            console.log('=====================GMIL===============');
                            let gmailTextBox = document.querySelector("[role=textbox]")

                            gmailTextBox.innerText = gptResponse
                        })()
                    })
                }
            }
        }
    }
}
