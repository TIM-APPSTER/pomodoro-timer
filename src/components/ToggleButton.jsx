import {useState, useEffect} from "react";

function ToggleButton({type, children,seconds, setSeconds}) {
    const [isActive, setIsActive] = useState(true)
    let handle = ""

    function handleStartButton() {
        console.log("start")
        function setSeconds2() {
            if (isActive) {
                if (seconds >=0){
                    setSeconds(prev => prev - 1)
                }
            }
        }
        setInterval(setSeconds2, 1000)
    }

    function handlePauseButton() {
        console.log("pause")


    }

    function handleStopButton() {
        console.log("stop")
        setIsActive(false)
        setInterval(() => setSeconds(300), 1000)
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