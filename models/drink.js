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
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      },
      userName: String,
      userAvatar: String
})

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
    reviews: [reviewSchema], // Does this make sense to put here? Based off the movie/review example I don't think it would because a drink isn't going to have user information on it. They're very different categories, would we want to separate them? If so, can we/how would we?
});

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;