let binarySequenceWrite = false;
let binarySequence = [];
let seqList = document.getElementById("seqList");

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
let PvZLevelClear = new Audio("audios/PvZLevelClear.mp3");
let UraniumFever = new Audio("audios/UraniumFever.mp3");
UraniumFever.loop = true;
let GourmetRace = new Audio("audios/GourmetRace.mp3");
GourmetRace.loop = true;
let PapersPlease = new Audio("audios/PapersPlease.mp3");
PapersPlease.loop = true;
let radioLabel = document.getElementById("radioLabel");

function transmit(value) {
	if (binarySequenceWrite) {
		binarySequence[binarySequence.length] = value;
		seqList.innerHTML = "Current sequence: " + binarySequence
	} else {
		alert("it aint my job to get the voodoo backend workin, right?");
	}
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
			PvZLevelClear.play();
			radioLabel.innerHTML = "Playing: PvZ - Level Clear (6)";
			break;
		case 6:
			UraniumFever.play();
			radioLabel.innerHTML = "Playing: Uranium Fever (7)"
			break;
		case 7:
			UraniumFever.pause();
			UraniumFever.currentTime = 0;
			GourmetRace.play();
			radioLabel.innerHTML = "Playing: Gourmet Race (8)";
			break;
		case 8:
			GourmetRace.pause();
			GourmetRace.currentTime = 0;
			PapersPlease.play();
			radioLabel.innerHTML = "Playing: Papers Please Theme (9)";
			break;
		case 9:
			PapersPlease.pause();
			PapersPlease.currentTime = 0;
			radioLabel.innerHTML = "";
			break;
	}
	musicID++;
	if(musicID > 9) {
		musicID = 0;
	}
}

function writeSeq() {
	binarySequence = [];
	binarySequenceWrite = true;
	seqList.innerHTML = "Current sequence: nothing yet lol";
}

function sendSeq() {
	alert("insert voodoo shit idk");
	binarySequence = [];
	binarySequenceWrite = false;
	seqList.innerHTML = "Current sequence: nothing yet lol";
}
