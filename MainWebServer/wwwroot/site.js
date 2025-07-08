const currentUrl = window.location.host;

var urlOn = "/api/buzzer/on";
var urlOff = "/api/buzzer/off";

var httpMethod = "GET";
const responseText = document.getElementById("response");
const button = document.getElementById("button");

console.log(currentUrl);
console.log("hello");

const myURL = "192.168.68.96:5096";

if (currentUrl == myURL) {
    console.log("we are at the home url, switching to 72.208.23.22:5096...")
    
    urlOn = "http://72.208.23.22:5096/api/buzzer/on";
    urlOff = "http://72.208.23.22:5096/api/buzzer/off";
}



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
