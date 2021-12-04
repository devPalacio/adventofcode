//filereader
var fs = require("fs");
var arrayBuffer = require("stream/consumers").arrayBuffer;
var arr = fs.readFileSync('input.txt').toString('UTF8').split('\n');
console.log("read %d lines", arr.length);
//pop off trailing linebreak....maybe code a check for this later
arr.pop();
console.log("first: %d, last: %d\n", arr[0], arr[arr.length - 1]);
//Each bit in the gamma rate can be determined by finding the most common bit in the corresponding position of all numbers in the diagnostic report.
//create function to make array of each digit
var myObject = {};
function arrayBuild(array, position) {
	var tempArray = [];
	for (var each in array) {
		tempArray.push(parseInt(array[each][position]))
	}
	return (tempArray);

}
function oneOrZero(array) {
	let tempSum = array.reduce((sum, a) => sum + a, 0);
	if (tempSum > (array.length / 2)) {
		return '1';
	} else {
		return '0';
	}
}

let binaryGamma = '';
for (let i = 0; i < arr[0].length; i++){
	binaryGamma += oneOrZero(arrayBuild(arr, i));
}
//should try to learn how to actually use ^1 to flip bits...
function flipBit(stringOfBinary) {
	let flipped = ""
	for (let each in stringOfBinary) {
		if (stringOfBinary[each] === "0") {
			flipped +="1"
		} else {
			flipped += "0"
		}
	}
	return flipped;
}

let binaryEpsilon = flipBit(binaryGamma);

console.log(binaryEpsilon, " ", parseInt(binaryEpsilon,2));
console.log(binaryGamma, " ", parseInt(binaryGamma, 2));
answer = parseInt(binaryEpsilon, 2) * parseInt(binaryGamma, 2);
console.log(answer)

//compare the sum of each position (12 total) to 1/2 of array length to see if 0 or 1 is more common and return answer
//let pos0 = arr.reduce((sum, a) => sum + a, 0);
//console.log(pos0);
//combine previous answer to form new binary number and convert to base10 to get gamma
//flip binary gamma to get epsilon and convert to binary
