const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
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
}, {
    timestamps: true
});

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