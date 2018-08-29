var util = require('./util.js');

var a = 30;
var b = 10;

util.addNumbers(a, b, function(error, result) {
	console.log('Sum is - ', result);
});

util.subtractNumbers(a, b, function(error, result) {
	console.log('Difference is - ', result);
});

console.log('Outside');