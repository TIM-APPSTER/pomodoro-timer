function ToggleButton({type, children}) {
    let handle = ""

    function handleStartButton() {
        console.log("start")
    }

    function handlePauseButton() {
        console.log("pause")

    }

    function handleStopButton() {
        console.log("stop")

    }

    if (type === "start") {
        handle = handleStartButton

    } else if (type === "pause") {
        handle = handlePauseButton
    } else if (type === "stop") {
        handle = handleStopButton
    }

    return (<button onClick={handle}>{children}</button>)
}

export default ToggleButton;