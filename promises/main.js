var a = 10;
var b = 20;

var util = require('./util.js');

util.addNumbers(a, b)
	.then(function(result) {
		console.log('Sum is - ', result);
	})
	.catch(function(error) {
		console.log('Error - ', error);
	});

util.subtractNumbers(a, b)
	.then(function(result) {
		console.log('Difference is - ', result);
	})
	.catch(function(error) {
		console.log('Error - ', error);
	});

console.log('Outside');