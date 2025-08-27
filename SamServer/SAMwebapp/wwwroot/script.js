let musicID = 0;
let Caramelldansen = new Audio("audios/Caramelldansen.mp3")
Caramelldansen.loop = true;
let DanceoftheKnights = new Audio("audios/DanceoftheKnights.mp3");
DanceoftheKnights.loop = true;
let PortalRadio = new Audio("audios/PortalRadio.mp3");
PortalRadio.loop = true;
let ThatsLife = new Audio("audios/ThatsLife.mp3");
ThatsLife.loop = true;
let WTWaltz = new Audio("audios/WTWaltz.mp3");
WTWaltz.loop = true;
let UraniumFever = new Audio("audios/UraniumFever.mp3");
UraniumFever.loop = true;
let GourmetRace = new Audio("audios/GourmetRace.mp3");
GourmetRace.loop = true;
let PapersPlease = new Audio("audios/PapersPlease.mp3");
PapersPlease.loop = true;
let BeiMirBistDuSchoen = new Audio("audios/BeiMirBistDuSchoen.mp3");
BeiMirBistDuSchoen.loop = true;
let radioLabel = document.getElementById("radioLabel");

function transmit() {
	alert("IM LOOKING AT YOU, GARY");
}

const alphabet = [
	"a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
	"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
	" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"
  ];
  
  const morse = [
	".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
	"-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
	"..-", "...-", ".--", "-..-", "-.--", "--..", "/", ".----", "..---",
	"...--", "....-", ".....", "-....", "--...", "---..", "----.", "-----"
  ];

function encodeMorse() {
	let input = document.getElementById("morseInput").value.toLowerCase().trim();
	let output = "";

	for (let char of input) {
		let index = alphabet.indexOf(char);
		if (index !== -1) {
			output += morse[index] + " ";
		} else {
			output += "? "; // for unsupported characters
		}
	}
	document.getElementById("translation").innerHTML = "Translation: " + input;
}

function SPLAT() {
	const SPLAT = new Audio("audios/SPLAT.mp3");
	SPLAT.play();
}

function radio() {
	console.log(musicID);
	switch(musicID) {
		case 0:
			Caramelldansen.play();
			radioLabel.innerHTML = "Playing: Caramelldansen (1)";
			break;
		case 1:
			Caramelldansen.pause();
			Caramelldansen.currentTime = 0;
			DanceoftheKnights.play();
			radioLabel.innerHTML = "Playing: Dance of the Knights (2)";
			break;
		case 2:
			DanceoftheKnights.pause();
			DanceoftheKnights.currentTime = 0;
			PortalRadio.play();
			radioLabel.innerHTML = "Playing: Portal 1 Radio (3)";
			break;
		case 3:
			PortalRadio.pause();
			PortalRadio.currentTime = 0;
			ThatsLife.play();
			radioLabel.innerHTML = "Playing: That's Life (4)";
			break;
		case 4:
			ThatsLife.pause();
			ThatsLife.currentTime = 0;
			WTWaltz.play();
			radioLabel.innerHTML = "Playing: Waltz of the Tornado (5)";
			break;
		case 5:
			WTWaltz.pause();
			WTWaltz.currentTime = 0;
			UraniumFever.play();
			radioLabel.innerHTML = "Playing: Uranium Fever (6)"
			break;
		case 6:
			UraniumFever.pause();
			UraniumFever.currentTime = 0;
			GourmetRace.play();
			radioLabel.innerHTML = "Playing: Gourmet Race (7)";
			break;
		case 7:
			GourmetRace.pause();
			GourmetRace.currentTime = 0;
			PapersPlease.play();
			radioLabel.innerHTML = "Playing: Papers Please Theme (8)";
			break;
		case 8:
			console.log("whyyyyy");
			PapersPlease.pause();
			PapersPlease.currentTime = 0;
			BeiMirBistDuSchoen.play();
			radioLabel.innerHTML = "Playing: Bei Mir Bist Du Schoen (9)";
			break;
		case 9:
			BeiMirBistDuSchoen.pause();
			BeiMirBistDuSchoen.currentTime = 0;
			let PvZLevelClear = new Audio("audios/PvZLevelClear.mp3");
			PvZLevelClear.play();
			radioLabel.innerHTML = "";
			break;
	}
	musicID++;
	if(musicID > 9) {
		musicID = 0;
	}
}