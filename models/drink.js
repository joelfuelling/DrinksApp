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
    img: { 
        type: String
    },
    style: {
        type: String,
        required: true
    },
    abv: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
});

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;