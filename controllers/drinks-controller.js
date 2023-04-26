const Drink = require('../models/drink')

const drinksController = {
    index: async (req, res)=>{
        try{
            // grab the query info and set the variable
        const type = req.query.type
        // if variable matches the key in the model then render
        if(type){
            const drinks = await Drink.find({}).where('type',type);
            res.render('drinks/index', {
               drinks: drinks
            })
    //    if nothing matches the query render full list
        }else{
                const drinks = await Drink.find();
               res.render('drinks/index', {
            drinks: drinks
        })
        }
    }catch(err){
        console.log(err);
        res.send(err)
    }
    },
    new: (req, res) => {
        res.render('drinks/new')
    },
    create: async (req, res) => {
        try{
            const newDrink = await Drink.create(req.body)
            res.redirect(`/drinks/${newDrink._id}`)
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
  
}

module.exports = drinksController
