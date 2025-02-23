let timer;
let milliseconds = 0;
let running = false;

function formatTime(ms) {
    let totalSeconds = Math.floor(ms / 1000);
    let hrs = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
    let mins = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
    let secs = (totalSeconds % 60).toString().padStart(2, '0');
    let millis = (ms % 1000).toString().padStart(3, '0');
    return `${hrs}:${mins}:${secs}.${millis}`;
}

function updateDisplay() {
    document.querySelector(".stopwatch").textContent = formatTime(milliseconds);
}

function startStopwatch() {
    if (!running) {
        running = true;
        let startTime = Date.now() - milliseconds;
        timer = setInterval(() => {
            milliseconds = Date.now() - startTime;
            updateDisplay();
        }, 10);
    }
}

function pauseStopwatch() {
    running = false;
    clearInterval(timer);
}

function resetStopwatch() {
    running = false;
    clearInterval(timer);
    milliseconds = 0;
    updateDisplay();
}

function restartStopwatch() {
    resetStopwatch();
    startStopwatch();
}

function recordLap() {
    if (running) {
        let lapTime = formatTime(milliseconds);
        let lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        document.getElementById("laps").appendChild(lapItem);
    }
}

function clearLaps() {
    document.getElementById("laps").innerHTML = "";
}

function resetLaps() {
    clearLaps();
    milliseconds = 0;
    updateDisplay();
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
