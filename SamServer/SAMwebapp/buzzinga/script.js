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
let radioLabel = document.getElementById("radioLabel");

function transmit() {
	alert("IM LOOKING AT YOU, GARY");
}

function encodeMorse() {
	var input = document.getElementById("morseInput").value.toLowerCase().trim();
	input = input.replaceAll(".", "  ");
	input = input.replaceAll(",", "");
	input = input.replaceAll("!", " ");
	input = input.replaceAll("?", " ");
	input = input.replaceAll(":", " ");

	input = input.replaceAll("/", "-..-. ");
	input = input.replaceAll(" ", "/ ");
	input = input.replaceAll("a", ".- ");
	input = input.replaceAll("b", "-... ");
	input = input.replaceAll("c", "-.-. ");
	input = input.replaceAll("d", "-.. ");
	input = input.replaceAll("e", ". ");
	input = input.replaceAll("f", "..-. ");
	input = input.replaceAll("g", "--. ");
	input = input.replaceAll("h", ".... ");
	input = input.replaceAll("i", ".. ");
	input = input.replaceAll("j", ".--- ");
	input = input.replaceAll("k", "-.- ");
	input = input.replaceAll("l", ".-.. ");
	input = input.replaceAll("m", "-- ");
	input = input.replaceAll("n", "-. ");
	input = input.replaceAll("o", "--- ");
	input = input.replaceAll("p", ".--. ");
	input = input.replaceAll("q", "--.- ");
	input = input.replaceAll("r", ".-. ");
	input = input.replaceAll("s", "... ");
	input = input.replaceAll("t", "- ");
	input = input.replaceAll("u", "..- ");
	input = input.replaceAll("v", "...- ");
	input = input.replaceAll("w", ".-- ");
	input = input.replaceAll("x", "-..- ");
	input = input.replaceAll("y", "-.-- ");
	input = input.replaceAll("z", "--.. ");
	input = input.replaceAll("1", ".---- ");
	input = input.replaceAll("2", "..--- ");
	input = input.replaceAll("3", "...-- ");
	input = input.replaceAll("4", "....- ");
	input = input.replaceAll("5", "..... ");
	input = input.replaceAll("6", "-.... ");
	input = input.replaceAll("7", "--... ");
	input = input.replaceAll("8", "---.. ");
	input = input.replaceAll("9", "----. ");
	input = input.replaceAll("0", "----- ");
	document.getElementById("translation").innerHTML = "Translation: " + input;
}

function SPLAT() {
	const SPLAT = new Audio("audios/SPLAT.mp3");
	SPLAT.play();
}

function radio() {
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
			PapersPlease.pause();
			PapersPlease.currentTime = 0;
			let PvZLevelClear = new Audio("audios/PvZLevelClear.mp3");
			PvZLevelClear.play();
			radioLabel.innerHTML = "";
			break;
	}
	musicID++;
	if(musicID > 8) {
		musicID = 0;
	}
}