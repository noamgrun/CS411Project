const mongoose = require('mongoose');
const { Schema } = mongoose; //is equal to    const Schema = mongoose.Schema;


const CommentSchema = new Schema({

    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    _sender: { type: Schema.Types.ObjectId, ref: 'User' },
    text: String,
    dateGiven: Date

});

mongoose.model('comments', CommentSchema);
