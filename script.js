// Your script here.
const input = document.querySelector("input");
const timer = document.querySelector("#timer");
const endTime = document.querySelector("#end-time");

// Start countdown
function startTimer(minutes) {
    clearInterval(window.countdownInterval);

    const duration = minutes * 60;
    const end = new Date(Date.now() + duration * 1000);

    function updateTimer() {
        const remaining = Math.max(0, Math.ceil((end - Date.now()) / 1000));

        const mins = Math.floor(remaining / 60);
        const secs = remaining % 60;

        timer.innerText =
            String(mins).padStart(2, "0") +
            ":" +
            String(secs).padStart(2, "0");

        endTime.innerText = "Ends at " + end.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
        });

        if (remaining === 0) {
            clearInterval(window.countdownInterval);
        }
    }

    updateTimer();
    window.countdownInterval = setInterval(updateTimer, 1000);
}

// Start timer when Enter is pressed
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        const minutes = Number(input.value);

        if (minutes > 0) {
            startTimer(minutes);
            input.value = "";
        }
    }
});