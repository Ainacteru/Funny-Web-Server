const currentUrl = window.location.host;

var urlOn = "/api/buzzer/on";
var urlOff = "/api/buzzer/off";
// var urlMusicNext = "/api/musicNext";
// var urlMusicCheck = "/api/musicCheck";

var httpMethod = "GET";
const responseText = document.getElementById("response");
const button = document.getElementById("button");

/*
let musicID = 8;
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
*/

console.log(currentUrl);
console.log("hello");
// musicCheck();

const myURL = "192.168.0.134:5096";

if (currentUrl == myURL) {
    console.log("we are at the home url, switching to 136.49.98.218...")
    
    urlOn = "http://136.49.98.218/api/buzzer/on";
    urlOff = "http://136.49.98.218/api/buzzer/off";
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

/*
radio.addEventListener("mousedown", () => {
    fetch (urlMusicNext, {method: httpMethod})
        .then(response => response.text())
        .then(ID => {
            console.log(ID);
    });
});


setInterval(musicCheck, 125);

async function musicCheck() {
    try {
		var givenGlobalID;
        const reply = await fetch('musicsettings.json'); // Path to your JSON file
        if (!reply.ok) {
          throw new Error(`HTTP error! status: ${reply.status}`);
        }
        
        const data = await reply.json(); // Parse the JSON data
        givenGlobalID = data;
		console.log("idiot coder is said to not be able to code; story tonight at " + givenGlobalID);

		/*

        fetch (urlMusicCheck, {method: httpMethod})
            .then(response => response.text())
            .then(ID => {
                givenGlobalID = ID;
				console.log("idiot coder is said to not be able to code; story tonight at " + givenGlobalID);
				
		});
		
		
				
        if (givenGlobalID == undefined) { givenGlobalID = 8; }
        if (givenGlobalID == musicID) { return; }

        musicID = givenGlobalID;
		console.log("new song nerds: number " + musicID + " (in the code that is)");
        playSong();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function playSong() {
	switch(musicID) {
		case 0:
			Caramelldansen.play();
			radioLabel.innerHTML = "Playing: Caramelldansen (1)";
			break;
		case 1:
			pauseAll();
			DanceoftheKnights.play();
			radioLabel.innerHTML = "Playing: Dance of the Knights (2)";
			break;
		case 2:
			pauseAll();
			PortalRadio.play();
			radioLabel.innerHTML = "Playing: Portal 1 Radio (3)";
			break;
		case 3:
			pauseAll();
			ThatsLife.play();
			radioLabel.innerHTML = "Playing: That's Life (4)";
			break;
		case 4:
			pauseAll();
			WTWaltz.play();
			radioLabel.innerHTML = "Playing: Waltz of the Tornado (5)";
			break;
		case 5:
			pauseAll();
			UraniumFever.play();
			radioLabel.innerHTML = "Playing: Uranium Fever (6)"
			break;
		case 6:
			pauseAll();
			GourmetRace.play();
			radioLabel.innerHTML = "Playing: Gourmet Race (7)";
			break;
		case 7:
			pauseAll();
			PapersPlease.play();
			radioLabel.innerHTML = "Playing: Papers Please Theme (8)";
			break;
		case 8:
			pauseAll();
			let PvZLevelClear = new Audio("audios/PvZLevelClear.mp3");
			PvZLevelClear.play();
			radioLabel.innerHTML = "";
			break;
	}
}

function pauseAll() {
	Caramelldansen.pause();
	Caramelldansen.currentTime = 0;
	DanceoftheKnights.pause();
	DanceoftheKnights.currentTime = 0;
	PortalRadio.pause();
	PortalRadio.currentTime = 0;
	ThatsLife.pause();
	ThatsLife.currentTime = 0;
	WTWaltz.pause();
	WTWaltz.currentTime = 0;
	UraniumFever.pause();
	UraniumFever.currentTime = 0;
	GourmetRace.pause();
	GourmetRace.currentTime = 0;
	PapersPlease.pause();
	PapersPlease.currentTime = 0;
}
*/