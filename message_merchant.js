let sourceWindow = null
messageHandler = (event) => {
    print(e)
    sourceWindow = event.data.sourceWindow
}

window.addEventListener("message", messageHandler)

button1Handler = () => {
    console.log("Button 1 clicked")
    if (sourceWindow !== null) {
        sourceWindow.postMessage({
            name: "Button1Event",
            data: {
                title: "Button 1"
            }
        })
    }
}

button2Handler = () => {
    console.log("Button 2 clicked")
    if (sourceWindow !== null) {
        sourceWindow.postMessage({
            name: "Button2Event",
            data: {
                title: "Button 2"
            }
        })
    }
}

button3Handler = () => {
    console.log("Button 3 clicked")
    if (sourceWindow !== null) {
        sourceWindow.postMessage({
            name: "Button3Event",
            data: {
                title: "Button 3"
            }
        })
    }
}