const Drink = require('../models/drink')
const Performer = require('../models/performer')

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
            const newdrink = await Drink.create(req.body)
            res.redirect(`/drinks/${newdrink._id}`)
        }catch(err){
            console.log(err);
            res.send(err)
        }
    },
    show: async (req, res) => {
        // get the drink from the db
        const drink = await Drink.findById(req.params.id)
                                 .populate('cast')
        // get all performers so we can populate the dropdown
        const performers = await Performer.find();
        // send it to the template
        res.render('drinks/show', {
            drink: drink,
            performers
        })
    },
    delete: async (req, res) => {
        try{
            const recentlyDeletedrink = await Drink.findByIdAndDelete(req.params.id)
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
        try{
            if(req.body.nowShowing === "on"){
                req.body.nowShowing = true
            }else{
                req.body.nowShowing = false
            }
            // send req.body to the model for updating
            await Drink.findByIdAndUpdate(req.params.id, req.body)
            res.redirect(`/drinks/${req.params.id}`)
        }catch(err){
            res.send(err)
        }
    },
    addPerformer: async (req, res) => {
        try{
            if(!req.body.performerId){
                throw new Error("must have performer id")
            }
            // grab the drink we are adding the performer to
            const drink = await Drink.findById(req.params.id)
            // add the performerId to the array of ids in drink
            drink.cast.push(req.body.performerId) 
            // save the drink
            await drink.save()
            // redirect to the show page
            res.redirect(`/drinks/${drink._id}`)
        }catch(err){
            res.send(err)
        }

    }
}

module.exports = drinksController
