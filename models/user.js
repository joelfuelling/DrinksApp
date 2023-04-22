const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    name: String,
    googleId: {
    type: String,
    required: true
  },
    email: { // What kinds of frontend validators (if any) would we need? @, .org/com/eu... ? At least _ # of characters long?       
        type: String,
        required: true
    },
    points: { // How would we accumulate these? Obvioulsy a function, but how/why would the user get points?
        type: Number,
        min: 0,
        max: 100,
        required: false // false?
    },
    fridge: {
        type: String,
        required: false
    },
    wishlist: {
        type: String,
        required: false
    },
})

module.exports = mongoose.model('User', userSchema);