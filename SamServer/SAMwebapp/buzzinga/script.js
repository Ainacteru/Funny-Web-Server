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

function morseTranslate() {
	var input = document.getElementById("morseInput").value.toLowerCase().trim();
	input = input.replace(/!/g, "");
	input = input.replace(/,/g, "");
	input = input.replace(/-/g, "");

	input = input.replaceAll("/ ", " ");
	input = input.replace(".- ", "a");
	input = input.replace(/b/g, "-... ");
	input = input.replace(/c/g, "-.-. ");
	input = input.replace(/d/g, "-.. ");
	input = input.replace(/e/g, ". ");
	input = input.replace(/f/g, "..-. ");
	input = input.replace(/g/g, "--. ");
	input = input.replace(/h/g, ".... ");
	input = input.replace(/i/g, ".. ");
	input = input.replace(/j/g, ".--- ");
	input = input.replace(/k/g, "-.- ");
	input = input.replace(/l/g, ".-.. ");
	input = input.replace(/m/g, "-- ");
	input = input.replace(/n/g, "-. ");
	input = input.replace(/o/g, "--- ");
	input = input.replace(/p/g, ".--. ");
	input = input.replace(/q/g, "--.- ");
	input = input.replace(/r/g, ".-. ");
	input = input.replace(/s/g, "... ");
	input = input.replace(/t/g, "- ");
	input = input.replace(/u/g, "..- ");
	input = input.replace(/v/g, "...- ");
	input = input.replace(/w/g, ".-- ");
	input = input.replace(/x/g, "-..- ");
	input = input.replace(/y/g, "-.-- ");
	input = input.replace(/z/g, "--.. ");
	input = input.replace(/1/g, ".---- ");
	input = input.replace(/2/g, "..--- ");
	input = input.replace(/3/g, "...-- ");
	input = input.replace(/4/g, "....- ");
	input = input.replace(/5/g, "..... ");
	input = input.replace(/6/g, "-.... ");
	input = input.replace(/7/g, "--... ");
	input = input.replace(/8/g, "---.. ");
	input = input.replace(/9/g, "----. ");
	input = input.replace(/0/g, "----- ");
	document.getElementById("translation").innerHTML = "Translation: " + input;
}

function decodeMorse() {
	var message = document.getElementById("morseInput").toLowerCase().trim(); 
	var alphabet = {  
	
	};
	var messageConverted = [];

	message.split("   ").map(function (word) {
		word.split(" ").map(function (letter) {
			messageConverted.push(alphabet[letter]);
		});
		messageConverted.push(" ");
	});
	document.getElementById("translation").innerHTML = "Translation: " + messageConverted.join("")
};

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