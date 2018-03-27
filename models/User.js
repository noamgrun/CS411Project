const mongoose = require('mongoose');
const { Schema } = mongoose; //is equal to    const Schema = mongoose.Schema;

const userSchema = new Schema({

	email: String,
	facebookId: { type: String, default: null },
	googleId: { type: String, default: null},
	firstName: String,
	lastName: String,
	language: String,
	credits: { type: Number, default: 0 }

});

mongoose.model('users', userSchema);