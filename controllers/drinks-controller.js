const Drink = require('../models/drink')

const drinksController = {
    index: async (req, res)=>{
        // Get the drinks from the database
        const drinks = await Drink.find();   
        // Put them into the template
        res.render('drinks/index', {
            drinks: drinks
        })
    },
    new: (req, res) => {
        res.render('drinks/new')
    },
    create: async (req, res) => {
        try{
            const newDrink = await Drink.create(req.body)
            res.redirect(`/drinks/${newdrink._id}`)
        }catch(err){
            console.log(err);
            res.send(err)
        }
    },
    show: async (req, res) => {
        // get the drink from the db
        const drink = await Drink.findById(req.params.id)
        // get all drinks so we can populate the dropdown
        // const reviews = await Review.find();
        // send it to the template
        res.render('drinks/show', {
            drink: drink,
            // 
        })
    },
    delete: async (req, res) => {
        try{
            const recentlyDeletedDrink = await Drink.findByIdAndDelete(req.params.id)
            res.redirect('/drinks')
        }catch(err){
            res.send(err)
        }
    },
    edit: async (req, res) => {
        try{
            // get the drink from the db
            const drink = await Drink.findById(req.params.id)
            // send the drink to the template
            res.render('drinks/edit', {
                drink: drink
            })
        }catch(err){
            res.send(err)
        }
    },
    update: async (req, res) => {
         try{   // send req.body to the model for updating
            await Drink.findByIdAndUpdate(req.params.id, req.body)
            res.redirect(`/drinks/${req.params.id}`)
        }catch(err){
            res.send(err)
        }
    },
    // addReview: async (req, res) => {
    //     try{
    //         if(!req.body.drinkId){
    //             throw new Error("must have drink id")
    //         }
    //         // grab the drink we are adding the review to
    //         const drink = await Drink.findById(req.params.id)
    //         // add the drinkId to the array of ids in drink
    //         Drink.cast.push(req.body.drinkId) // This is reference strategy for many-to-many which we won't need since we're doing the embedded approach.
    //         // save the drink
    //         await Drink.save()
    //         // redirect to the show page
    //         res.redirect(`/drinks/${drink._id}`)
    //     }catch(err){
    //         res.send(err)
    //     }

    // }
}

module.exports = drinksController
