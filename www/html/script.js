let binarySequenceWrite = false;
let binarySequence = [];
let seqList = document.getElementById("seqList");
function transmit(value) {
	if (binarySequenceWrite) {
		binarySequence[binarySequence.length] = value;
		seqList.innerHTML = "Current sequence: " + binarySequence
	} else {
		alert("it aint my job to get the voodoo backend workin, right?");
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