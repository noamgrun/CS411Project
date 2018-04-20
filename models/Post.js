const mongoose = require('mongoose');
const { Schema } = mongoose; //is equal to    const Schema = mongoose.Schema;
const PropSchema = require('./Prop.js');
const CommentSchema = require('./Comment.js');

const postSchema = new Schema({

    image: { type:String, default: null },
	description: String,
    location: String,
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    props: { type:[PropSchema], default: null },
    comments: { type:[CommentSchema], default: null },
	dateCreated: Date,
	lastInteracted: { type:Date, default: null }

});

mongoose.model('posts', postSchema);
