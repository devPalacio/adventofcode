let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

let arr = fs.readFileSync('input.txt').toString('UTF8').split('\n').map(Number);

console.log("read %d lines", arr.length);
console.log("first: %d, last: %d\n", arr[0], arr[arr.length - 1]);

//count the number of times a depth measurement increases
//iterate through array arr, subtract n+1 from n and see if positive or negative
// ex: 2 - 1 = 1 (increase)
// ex 2 - 3 = -1 (decrease)
let increase = 0

for (let i = 0; i < arr.length; i++) {
	if (arr[(i + 1)] - arr[i] > 0) {
		increase++;
	}
}
console.log(increase + " measurements increased")


//part 2 - compare a 3 measurement sliding window
//i 0 + 1 + 2 vs i 1 + 2 + 3
let increase3 = 0
for (let i = 0; i < arr.length; i++) {
	if (i + 1 > arr.length) { break }
	let window1 = (arr[i] + arr[i + 1] + arr[i + 2]);
	let window2 = (arr[i + 1] + arr[i + 2] + arr[i + 3]);
	if (window2 - window1 > 0) {
		console.log(window2, window1, increase3)
		increase3++;
	}
}
console.log(increase3 + " 3 window increase")
return increase3;
