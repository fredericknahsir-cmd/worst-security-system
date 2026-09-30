const scanBtn = document.querySelector("#scanBtn");
const codeBtn = document.querySelector("#codeBtn");
const redBtn = document.querySelector("#redBtn");
const reseBtn = document.querySelector("#resetBtn");

const codeInput = document.querySelector("#codeInput");
const message = document.querySelector("#message");
const statusText = document.querySelector("#statusText");
const levelText = document.querySelector("#levelText");
const lockIcon = document.querySelector("#lockIcon");
const logText = document.querySelector("#logText");
const consoleBox = document.querySelector(".console");

let securityLevel = 1;
let idScanned = false;
let failedAttemps = 0;
let redButtonPresses = 0;
let systemLocked = false;

function scanID() {
    if (systemLocked) {
        return;
    }

    idScanned = true;
    securityLevel = 2;

    message.textContent = "Human detected. Probably.";
    statusText.textContent = "ID ACCEPTED";
    levelText.textContent = "Biological life-form approved";
}

scanBtn.addEventListener("click", scanID);