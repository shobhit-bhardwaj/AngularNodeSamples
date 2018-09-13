//	let is use for Block Scoping
let a = 10;

if(true) {
	let a = 15;
	console.log(a);
}
console.log(a);