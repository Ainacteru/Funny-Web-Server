const currentUrl = window.location.host;

const urlOn = "/api/buzzer/on";
const urlOff = "/api/buzzer/off";

var httpMethod = "POST";
const responseText = document.getElementById("response");
const button = document.getElementById("button");

console.log(currentUrl);

button.addEventListener("mousedown", () => {
    fetch (urlOn, {method: httpMethod})
        .then(response => response.text())
        .then(text => {
            responseText.textContent = text;
            console.log(text);
        });
});

button.addEventListener("mouseup", () => {
    fetch (urlOff, {method: httpMethod})
        .then(response => response.text())
        .then(text => {
            responseText.textContent = text;
            console.log(text);
        });
});

button.addEventListener("mouseleave", () => {
    fetch (urlOff, {method: httpMethod})
        .then(response => response.text())
        .then(text => {
            responseText.textContent = text;
            console.log(text);
        });
});
