const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5,
        required: true
    },
    user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

// The below userSchema has it's own user.js file, which is then reference above in the reviewSchema.
// const userSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     email: { // What kinds of frontend validators (if any) would we need? @, .org/com/eu... ? At least _ # of characters long?       
//         type: String,
//         required: true
//     },
//     points: { // How would we accumulate these? Obvioulsy a function, but how/why would the user get points?
//         type: Number,
//         min: 0,
//         max: 100,
//         required: false // false?
//     },
// })
const drinkSchema = new mongoose.Schema({
    name: { // pretty straight forward
        type: String,
        required: true  
    },
    type: { // or Category... Dropdown w/ forEach needed (see Performed example from class)
        type: String,
        enum: ['Beer', 'Wine', 'Spirits', 'Other'], default: 'Select',
        required: true
    },
    style: {
        type: String,
    },
    abv: {
        type: Number,
    },
    location: {
        type: String,
    },
    description: {
        type: String,
    },
    // wishlist: {
    //     type: Array, // or String? Not sure...
    //     required: false 
    // },
    reviews: [reviewSchema], // Does this make sense to put here? Based off the movie/review example I don't think it would because a drink isn't going to have user information on it. They're very different categories, would we want to separate them? If so, can we/how would we?
});

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;