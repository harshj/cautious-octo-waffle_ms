let merchantIframe = null

onMerchantPageLoad = () => {
    // const message = JSON.stringify({data: {sourceWindow:merchantIframe.contentWindow}})
    const win = merchantIframe.contentWindow
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