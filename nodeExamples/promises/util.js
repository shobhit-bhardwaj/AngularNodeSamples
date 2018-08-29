module.exports = {
	addNumbers : function(a, b) {
		return new Promise(function(resolve, reject) {
			if (a == 0 || b == 0) {
				reject('a or b cannot be 0.');
			} else {
				setTimeout(function() {
					resolve(a + b);
				}, 1000);
			}
		});
	},

	subtractNumbers : function(a, b) {
		return new Promise(function(resolve, reject) {
			if (a == 0 || b == 0) {
				reject('a or b cannot be 0.');
			} else {
				resolve(a - b);
			}
		});
	}
};