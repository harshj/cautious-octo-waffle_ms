let sourceWindow = window
messageHandler = (event) => {
    console.log(event)
    // if (event.data == "init") {
    //     sourceWindow = window.parent
    // }
}

window.addEventListener("message", messageHandler)

button1Handler = () => {
    console.log("Button 1 clicked")
    // if (sourceWindow !== null) {
        window.postMessage({
            name: "Button1Event",
            data: {
                title: "Button 1"
            }
        })
        console.log("Button 1 sent message")
    }
}

button2Handler = () => {
    console.log("Button 2 clicked", sourceWindow)
    if (sourceWindow !== null) {
        sourceWindow.postMessage({
            name: "Button2Event",
            data: {
                title: "Button 2"
            }
        })
        console.log("Button 2 sent message")
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
        console.log("Button 3 sent message")
    }
}