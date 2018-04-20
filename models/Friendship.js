const mongoose = require('mongoose');
const { Schema } = mongoose; //is equal to    const Schema = mongoose.Schema;


const FriendshipSchema = new Schema({

    _sender: { type: Schema.Types.ObjectId, ref: 'User' },
    _receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    dateGiven: Date,
    dateAccepted: { type: Date, default: null },
    status: { type: Number, default:0 }

});

mongoose.model('friendships', FriendshipSchema);
