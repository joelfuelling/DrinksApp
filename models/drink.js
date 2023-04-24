const mongoose = require('mongoose')
const Schema = mongoose.Schema;

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
    name: { 
        type: String,
        required: true  
    },
    type: { // Dropdown w/ forEach needed (see Performer example from class)
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
    reviews: [reviewSchema],
});

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;