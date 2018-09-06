const mongoose = require('mongoose');

mongoose.connect('mongodb://l4dvidap6393/test_db')
	.then((result) => console.log('MongoDB Connection Successfull'))
	.catch((error) => console.log('Error in Connection - ', error));