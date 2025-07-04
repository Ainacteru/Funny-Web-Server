var urlOn = "http://192.168.68.96:5097/api/led/on";
var urlOff = "http://192.168.68.96:5097/api/led/off";

var httpMethod = "POST";
const responseText = document.getElementById("response");
const button = document.getElementById("button");

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
