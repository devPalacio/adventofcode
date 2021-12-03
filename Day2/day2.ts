//What do you get if you multiply your final horizontal position by your final depth?

let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");

let arr = fs.readFileSync('input.txt').toString('UTF8').split('\n');

console.log("read %d lines", arr.length);
console.log("first: %d, last: %d\n", arr[0], arr[arr.length - 1]);

//console.log(arr);
let depth : number = 0
let horizontal : number = 0
for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] === 'f') {

		horizontal = horizontal + parseInt(arr[i][8]);
	}
	else if (arr[i][0] === 'd') {
		depth = depth + parseInt(arr[i][5]);
		//console.log(arr[i][5]);

	}
	else if (arr[i][0] === 'u') {
		depth = depth - parseInt(arr[i][3]);
		//console.log(arr[i][3]);
	}
}
console.log(depth + " depth", horizontal + " horizontal", depth * horizontal + " multiplied");


//part 2: What do you get if you multiply your final horizontal position by your final depth?
//Down adjust aim. aim is just a multiplier for forward.

let aim = 0
horizontal = 0
depth = 0
for (let i = 0; i < arr.length; i++) {
	if (arr[i][0] === 'f') {
		horizontal = horizontal + parseInt(arr[i][8]);
		depth = depth + (aim * parseInt(arr[i][8]))
		console.log(depth)
	}
	else if (arr[i][0] === 'd') {
		aim = aim + parseInt(arr[i][5]);
		//console.log(arr[i][5]);
	}
	else if (arr[i][0] === 'u') {
		aim = aim - (parseInt(arr[i][3]));
		//console.log(arr[i][3]);
	}
}
console.log("part 2", depth * horizontal + " multiplied");
