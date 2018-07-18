module.exports = {
	addNumbers : function(a, b, callback) {
		setTimeout(function() {
			callback(null, a + b);
		}, 1000);
	},

	subtractNumbers : function(a, b, callback) {
		callback(null, a - b);
	},
};