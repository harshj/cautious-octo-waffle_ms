let merchantIframe = null

messageHandler = (message) => {
    console.log(message)
}

onMerchantPageLoad = () => {
    const win = merchantIframe.contentWindow
    window.addEventListener("message", messageHandler)
    win.postMessage("init")

}

loadMerchantPage = () => {
    let container = document.getElementById("merchant_container")
    merchantIframe = document.createElement("iframe")
    merchantIframe.setAttribute("src", "merchant.html")
    merchantIframe.addEventListener("load", onMerchantPageLoad)
    container.appendChild(merchantIframe)
}

init = () => {
    loadMerchantPage()
}

init()