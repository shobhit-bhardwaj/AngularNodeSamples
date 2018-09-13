function sumUp(...numbers) {
	console.log('Numbers - ', numbers);

	let result = 0;
	for (let i of numbers) {
		result += i;
	}
	return result;
}
let result = sumUp(1, 2, 3, 4, 5);
console.log('sumUp - ', result);