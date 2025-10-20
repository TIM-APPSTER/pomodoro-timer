import ToggleButton from "./components/ToggleButton.jsx"
import TimerDisplay from "./components/TimerDisplay.jsx"
import {useState, useEffect} from "react";

function App() {
    const [seconds, setSeconds] = useState(310)
    return (
        <div>
            <h1>Pomodoro Timer</h1>
            <TimerDisplay seconds={seconds}/>
            <ToggleButton type="start" setSeconds={setSeconds} seconds={seconds}>Start</ToggleButton>
            <ToggleButton type="pause">Pause</ToggleButton>
            <ToggleButton type="stop" setSeconds={setSeconds} seconds={seconds}>Stop</ToggleButton>
        </div>
    );
}

export default App;