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
			ThatsLife
			ThatsLife.currentTime = 0;
			WTWaltz.play();
			radioLabel.innerHTML = "Playing: Waltz of the Tornado  (5)";
			break;
		case 5:
			WTWaltz.pause();
			WTWaltz.currentTime = 0;
			radioLabel.innerHTML = "";
	}
	musicID++;
	if(musicID > 5) {
		musicID = 0;
	}
}

document.getElementById("writeSeq").addEventListener("click", function() {
	binarySequence = [];
	binarySequenceWrite = true;
	seqList.innerHTML = "Current sequence: nothing yet lol"
});
document.getElementById("sendSeq").addEventListener("click", function() {
	alert("insert voodoo shit idk");
	binarySequence = [];
	binarySequenceWrite = false;
	seqList.innerHTML = "Current sequence: nothing yet lol"
});
