const express = require('express');
const {User} = require('../model/user');
const Joi = require('joi');
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post('/', async (request, response) => {
	//console.log(request.body);

	let result = validate(request.body);
	if(result.error)
		return response.status(400).send(result.error.details[0].message);

	let user = await User.findOne({email: request.body.email})
	if(!user)
		return response.status(400).send('Invalid Username or Password');

	const valid = await bcrypt.compare(request.body.password, user.password)
	if(!valid)
		return response.status(400).send('Invalid Username or Password');

	const token = jwt.sign({id: user._id, email: user.email}, 'my-private-key');
	response.send(token);
});

function validate(user) {
	const userSchema = {
		email: Joi.string().min(5).max(255).required().email(),
		password: Joi.string().min(5).max(255).required()
	};

	return Joi.validate(user, userSchema);
}

module.exports = router;
