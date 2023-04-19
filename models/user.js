const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    points: {
        type: Number,
    }
    // One-To-Many Relationship
    // One-To-One Relationship
    // Many-To-Many Relationship
})

const User = mongoose.model('User', userSchema);
module.exports = User;