module.exports = {
	promise1 : function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				console.log('Process Promise 1');
				resolve('Resolving Promise 1');
			}, 1000);
		});
	},

	promise2 : function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				console.log('Process Promise 2');
				resolve('Resolving Promise 2');
			}, 1000);
		});
	},

	promise3 : function() {
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				console.log('Process Promise 3');
				resolve('Resolving Promise 3');
			}, 3000);
		});
	}
};