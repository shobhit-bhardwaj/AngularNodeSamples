console.log('Start Program');

getUser(101, (user) => {
	console.log('User - ', user);
	getRepository(user.userName, (repos) => {
		console.log('Repos - ', repos)
	});
});

function getUser(userId, callback) {
	setTimeout(() => {
		console.log('Reading User from Database.');
		callback({userId: userId, userName: 'Shobhit'});
	}, 2000);
}

function getRepository(userName, callback) {
	setTimeout(() => {
		console.log('Calling Github for Repository.');
		callback(['repo1', 'repo2', 'repo3']);
	}, 2000);
}

console.log('End Program');
