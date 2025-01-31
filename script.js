const correctCode = "NYC2024"; // Example access code
const easterEggCode = "HACKER"; // Easter Egg code

function checkCode(event) {
    if (event.key === "Enter") {
        let input = document.getElementById("codeInput").value;
        let message = document.getElementById("message");

        if (input === correctCode) {
            message.classList.remove("hidden");
            message.classList.remove("error");
            message.innerHTML = "<strong>Access Granted.</strong><br>Venue: 123 Secret St, NYC<br>Time: 10PM - 4AM";
        } else if (input === easterEggCode) {
            message.classList.remove("hidden");
            message.classList.add("error");
            message.innerHTML = "You've found the Easter Egg! Stay tuned for something special.";
        } else {
            message.classList.remove("hidden");
            message.classList.add("error");
            message.innerHTML = "Invalid code. Access Denied.";
        }
    }
}
