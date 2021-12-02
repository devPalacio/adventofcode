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
console.log(arr.length)
for (let i = 0; i < arr.length; i++) {
	if (arr[(i + 1)] - arr[i] > 0) {
		increase++;
		console.log(arr[i])
	}
}
console.log(increase)
return increase;
