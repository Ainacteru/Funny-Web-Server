let musicID = 0;
let songToPlay;
console.log("musicID: " + musicID);

const radioLabel = document.getElementById("radioLabel");

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

const songs = [
	"Caramelldansen.mp3",
	"DanceoftheKnights.mp3",
	"PortalRadio.mp3",
	"ThatsLife.mp3",
	"WTWaltz.mp3",
	"UraniumFever.mp3",
	"GourmetRace.mp3",
	"PapersPlease.mp3",
	"BeiMirBistDuSchoen.mp3",
	"JustTheTwoOfUs.mp3"
	"PEPSIMAAAN.mp3"
]

const songNames = [
	"Caramelldansen (1)",
	"Dance of the Knights (2)",
	"Portal Radio (3)",
	"That's Life (4)",
	"Waltz of the Tornado (5)",
	"Uranium Fever (6)",
	"Gourmet Race (7)",
	"Papers Please Theme (8)",
	"Bei Mir Bist Du Schoen (9)",
	"Just the Two of Us (10)",
	"Pepsiman Theme (11)"
]

console.log("songs.length: " + songs.length);
console.log("songNames.length: " + songNames.length);

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
	document.getElementById("translation").innerHTML = "Translation: " + output;
}

function SPLAT() {
	const SPLAT = new Audio("audios/SPLAT.mp3");
	SPLAT.play();
}

function radio() {
	if(songToPlay != null) {
		songToPlay.pause()
	}
	
	if(musicID == songs.length) {
		let PvZLevelClear = new Audio("audios/PvZLevelClear.mp3");
		PvZLevelClear.play();
		radioLabel.innerHTML = "";
		musicID = 0;
		return;
	}

	console.log("current musicID: " + musicID);
	songToPlay = new Audio("audios/" + songs[musicID]);
	songToPlay.loop = true;
	songToPlay.play();
	radioLabel.innerHTML = "Playing: " + songNames[musicID];
	radioEasterEggs();

	musicID++;
}

function radioEasterEggs() {
	switch (musicID) {
		case 0:
			document.getElementById("linker").href = "http://72.208.23.22:5096/easter-eggs/caramelldansen-lyrics.txt";
			break;
		case 2:
			document.getElementById("linker").href = "https://www.youtube.com/watch?v=2wOHxAHPHqU%t=0";
			break;
		case 3:
			document.getElementById("linker").href = "https://www.youtube.com/watch?v=mQIZ-Esbg_c";
			break;
		default:
			document.getElementById("linker").href = "http://72.208.23.22:5096/audios/" + songs[musicID];
			break;
	}

}
