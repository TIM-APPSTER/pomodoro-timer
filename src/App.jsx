import ToggleButton from "./components/ToggleButton.jsx"
import TimerDisplay from "./components/TimerDisplay.jsx"

function App() {
    return (
        <div>
            <h1>Pomodoro Timer</h1>
            <TimerDisplay time={10}/>
            <ToggleButton type="start">Start</ToggleButton>
            <ToggleButton type="pause">Pause</ToggleButton>
            <ToggleButton type="stop">Stop</ToggleButton>
        </div>
    );
}
export default App;