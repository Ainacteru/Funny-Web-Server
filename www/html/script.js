let binarySequenceWrite = false;
let binarySequence = [];

function transmitBinary(value) {
	if (binarySequenceWrite) {
		binarySequence[binarySequence.length] = value;
		alert(binarySequence);
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
