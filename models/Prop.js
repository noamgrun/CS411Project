const mongoose = require('mongoose');
const { Schema } = mongoose; //is equal to    const Schema = mongoose.Schema;


const PropSchema = new Schema({

    _post: { type: Schema.Types.ObjectId, ref: 'Post' },
    _comment: { type: Schema.Types.ObjectId, red: 'Comment'},
    _sender: { type: Schema.Types.ObjectId, ref: 'User' },
    dateGiven: Date

});

mongoose.model('props', PropSchema);
