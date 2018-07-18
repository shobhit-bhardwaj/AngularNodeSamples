var util = require('./util.js');

var promises = Promise.all([ util.promise1(), util.promise2(), util.promise3() ]);

promises
	.then(function(result) {
		console.log('Result - ', result);
	})
	.catch(function(error) {
		console.log('Error - ', error);
	});