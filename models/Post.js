const mongoose = require('mongoose');
const { Schema } = mongoose; //is equal to    const Schema = mongoose.Schema;
const LikeSchema = require('./Likes.js');
const CommentSchema = require('./Comments.js');


const postSchema = new Schema({

    _user: { type: Schema.Types.ObjectId, ref: 'User'},
	description: String,
    image: String,
    location: String,
    group: { type: Number, default: 0 },
	likes: [LikeSchema],
    comments: [CommentSchema],
	dateCreated: Date,
	lastInteracted: Date

});

mongoose.model('posts', postSchema);
