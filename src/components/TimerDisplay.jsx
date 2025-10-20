function TimerDisplay({seconds}) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60
    const times = `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`
    return (<h2>{times}</h2>)
}

export default TimerDisplay;