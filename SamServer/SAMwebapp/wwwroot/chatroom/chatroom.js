var requirePass = false;

// a GET request
const url = 'http://72.208.23.22:5096/chatroom/messages.json'
const response = await fetch(url)

async function main() {
    var funnyShit = document.getElementById("peanits");
    console.log('status:', response.status);
    console.log('Content-Type:', response.headers.get('Content-Type'));
    var jsonData = await response.json();
    console.log('json:', jsonData);
    funnyShit.innerHTML = JSON.parse(jsonData);
}
main();