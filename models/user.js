const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    points: {
        type: Number,
    },
    email: String,
    avatar: String
}, {
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;