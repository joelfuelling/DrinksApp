const Drink = require('../models/drink')


const reviewsController = {
    create: async (req, res)=>{
        try{
            // get the drink to attach the review to
            const drink = await Drink.findById(req.params._id)
            // attach the review data to the drink
            // Add the user-centric info to req.body (the new review)
            req.body.user = req.user._id;
            req.body.userName = req.user.name;
            req.body.userAvatar = req.user.avatar;
            const reviewToCreate = req.body
            drink.reviews.push(reviewToCreate)
            // save the drink to the database
            await Drink.save()
            // return the user to the drink show page
            res.redirect(`/drinks/${drink.drink_id}`)
        }catch(err){
            res.send(err)
        }
    }
}

module.exports = reviewsController