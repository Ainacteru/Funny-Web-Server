// === Audio Setup ===
let musicID = 0;
let Caramelldansen = new Audio("audios/Caramelldansen.mp3"); Caramelldansen.loop = true;
let DanceoftheKnights = new Audio("audios/DanceoftheKnights.mp3"); DanceoftheKnights.loop = true;
let PortalRadio = new Audio("audios/PortalRadio.mp3"); PortalRadio.loop = true;
let ThatsLife = new Audio("audios/ThatsLife.mp3"); ThatsLife.loop = true;
let WTWaltz = new Audio("audios/WTWaltz.mp3"); WTWaltz.loop = true;
let UraniumFever = new Audio("audios/UraniumFever.mp3"); UraniumFever.loop = true;
let GourmetRace = new Audio("audios/GourmetRace.mp3"); GourmetRace.loop = true;
let PapersPlease = new Audio("audios/PapersPlease.mp3"); PapersPlease.loop = true;

let radioLabel = document.getElementById("radioLabel");

// === Radio function ===
function radio() {
	switch(musicID) {
		case 0:
			Caramelldansen.play();
			radioLabel.innerHTML = "Playing: Caramelldansen (1)";
			break;
		case 1:
			Caramelldansen.pause(); Caramelldansen.currentTime = 0;
			DanceoftheKnights.play();
			radioLabel.innerHTML = "Playing: Dance of the Knights (2)";
			break;
		case 2:
			DanceoftheKnights.pause(); DanceoftheKnights.currentTime = 0;
			PortalRadio.play();
			radioLabel.innerHTML = "Playing: Portal 1 Radio (3)";
			break;
		case 3:
			PortalRadio.pause(); PortalRadio.currentTime = 0;
			ThatsLife.play();
			radioLabel.innerHTML = "Playing: That's Life (4)";
			break;
		case 4:
			ThatsLife.pause(); ThatsLife.currentTime = 0;
			WTWaltz.play();
			radioLabel.innerHTML = "Playing: Waltz of the Tornado (5)";
			break;
		case 5:
			WTWaltz.pause(); WTWaltz.currentTime = 0;
			UraniumFever.play();
			radioLabel.innerHTML = "Playing: Uranium Fever (6)";
			break;
		case 6:
			UraniumFever.pause(); UraniumFever.currentTime = 0;
			GourmetRace.play();
			radioLabel.innerHTML = "Playing: Gourmet Race (7)";
			break;
		case 7:
			GourmetRace.pause(); GourmetRace.currentTime = 0;
			PapersPlease.play();
			radioLabel.innerHTML = "Playing: Papers Please Theme (8)";
			break;
		case 8:
			PapersPlease.pause(); PapersPlease.currentTime = 0;
			let PvZLevelClear = new Audio("audios/PvZLevelClear.mp3");
			PvZLevelClear.play();
			radioLabel.innerHTML = "";
			break;
	}
	musicID++;
	if (musicID > 8) musicID = 0;
}

// === Morse code encoder ===
function encodeMorse() {
	let input = document.getElementById("morseInput").value.toLowerCase().trim();
	input = input.replaceAll(".", "  ")
		.replaceAll(",", "")
		.replaceAll("!", " ")
		.replaceAll("?", " ")
		.replaceAll(":", " ")
		.replaceAll("/", "-..-. ")
		.replaceAll(" ", "/ ")
		.replaceAll("a", ".- ")
		.replaceAll("b", "-... ")
		.replaceAll("c", "-.-. ")
		.replaceAll("d", "-.. ")
		.replaceAll("e", ". ")
		.replaceAll("f", "..-. ")
		.replaceAll("g", "--. ")
		.replaceAll("h", ".... ")
		.replaceAll("i", ".. ")
		.replaceAll("j", ".--- ")
		.replaceAll("k", "-.- ")
		.replaceAll("l", ".-.. ")
		.replaceAll("m", "-- ")
		.replaceAll("n", "-. ")
		.replaceAll("o", "--- ")
		.replaceAll("p", ".--. ")
		.replaceAll("q", "--.- ")
		.replaceAll("r", ".-. ")
		.replaceAll("s", "... ")
		.replaceAll("t", "- ")
		.replaceAll("u", "..- ")
		.replaceAll("v", "...- ")
		.replaceAll("w", ".-- ")
		.replaceAll("x", "-..- ")
		.replaceAll("y", "-.-- ")
		.replaceAll("z", "--.. ")
		.replaceAll("1", ".---- ")
		.replaceAll("2", "..--- ")
		.replaceAll("3", "...-- ")
		.replaceAll("4", "....- ")
		.replaceAll("5", "..... ")
		.replaceAll("6", "-.... ")
		.replaceAll("7", "--... ")
		.replaceAll("8", "---.. ")
		.replaceAll("9", "----. ")
		.replaceAll("0", "----- ");
	document.getElementById("translation").innerHTML = "Translation: " + input;
}

// === Extra effects ===
function transmit() {
	alert("IM LOOKING AT YOU, GARY");
}

function SPLAT() {
	new Audio("audios/SPLAT.mp3").play();
}

// === Buzzer control ===
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
	console.log("we are at the home url, switching to 72.208.23.22:5096...");
	urlOn = "http://72.208.23.22:5096/api/buzzer/on";
	urlOff = "http://72.208.23.22:5096/api/buzzer/off";
}

button.addEventListener("mousedown", () => {
	fetch(urlOn, { method: httpMethod })
		.then(response => response.text())
		.then(text => {
			responseText.textContent = text;
			console.log(text);
		});
});
    
button.addEventListener("mouseup", () => {
	fetch(urlOff, { method: httpMethod })
		.then(response => response.text())
		.then(text => {
			responseText.textContent = text;
			console.log(text);
		});
});

button.addEventListener("mouseleave", () => {
	fetch(urlOff, { method: httpMethod })
		.then(response => response.text())
		.then(text => {
			responseText.textContent = text;
			console.log(text);
		});
});
