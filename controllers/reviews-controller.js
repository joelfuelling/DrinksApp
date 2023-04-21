const Drink = require('../models/drink')

const reviewsController = {
    create: async (req, res)=>{
        try{
            // get the drink to attach the review to
            const drink = await Drink.findById(req.params.drink_id)
            // attach the review data to the drink
            const reviewToCreate = req.body
            drink.reviews.push(reviewToCreate)
            // save the drink to the database
            await Drink.save()
            // return the user to the drink show page
            res.redirect(`/drinks/${req.params.drink_id}`)
        }catch(err){
            res.send(err)
        }
    }
}

module.exports = reviewsController