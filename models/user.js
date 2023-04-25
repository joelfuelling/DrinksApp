const mongoose = require('mongoose')

// IMPORTANT: req.user will be the logged in user's Mongoose document❗️
    // If a user is not logged in, req.user will be undefined.
// You will then be able to access the req.user document in all of the controller actions - so, ***DO NOT*** write code to retrieve the user document from the DB because req.user is already the document!

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
    avatar: String
})

module.exports = mongoose.model('User', userSchema);