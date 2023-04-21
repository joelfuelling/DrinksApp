const mongoose = require('mongoose')

// ROUGH draft, and I don't know if all the syntax is correct. I googled if 'String' is the right validator for email and it is. 

// ***App functionality revolves around the ***logged in user***

// feature creep can doom a project! Focus on MVP for now.

// I think we said that all the edit/create/delete stuff would be in the user portion, since that makes most sense.

// GitHUB requirement notes:
//     Because your app's functionality revolves around the logged in user, ***implement authentication and basic navigation first!***
//     Prioritize and implement the user stories one at a time

//         This link is a very simple rundown of adding a feature.
//             https://github.com/takis-fuego-cohort/lessons-and-labs/blob/main/Unit_2/project_2/guide-to-add-feature-to-web-app.md

//         This.CRUD.guide.is.awesome!
//             https://github.com/takis-fuego-cohort/lessons-and-labs/blob/main/Unit_2/project_2/guide-to-user-centric-crud.md
//     One-To-One Relationship
//     One-To-Many Relationship
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
    }
})


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        unique: true, // ensures that no two documents in a collection have the same value for that field.
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
    // wishlist: {
    //     type: Array, // or String? Not sure...
    //     required: false 
    // },
    reviews: [reviewSchema] // Does this make sense to put here? Based off the movie/review example I don't think it would because a drink isn't going to have user information on it. They're very different categories, would we want to separate them? If so, can we/how would we?
});

const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink;