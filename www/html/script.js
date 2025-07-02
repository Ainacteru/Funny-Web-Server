let binarySequenceWrite = false;
let binarySequence = [];
let keySequenceWrite = false;
let keySequence = [];

function transmitBinary(value) {
	if (binarySequenceWrite) {
		binarySequence[binarySequence.length] = value;
		alert(binarySequence);
	} else {
		alert("it aint my job to get the voodoo backend workin, right?");
	}
}

function transmitKey(note) {
	if (keySequenceWrite) {
		keySequence[keySequence.length] = note;
		alert(keySequence);
	} else {
		alert("it aint my job to get the voodoo backend workin, right?");
	}
}

document.getElementById("writeSeq").addEventListener("click", function() {
	binarySequence = [];
	binarySequenceWrite = true;
});
document.getElementById("sendSeq").addEventListener("click", function() {
	alert("insert voodoo shit idk");
	binarySequence = [];
	binarySequenceWrite = false;
});


document.getElementById("writeKeySeq").addEventListener("click", function() {
	keySequence = [];
	keySequenceWrite = true;
});
document.getElementById("sendKeySeq").addEventListener("click", function() {
	alert("insert voodoo shit but notes idk");
	keySequence = [];
	keySequenceWrite = false;
});
