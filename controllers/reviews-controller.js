const Drink = require('../models/drink')


const reviewsController = {
    create: async (req, res)=>{
        try{
            // get the drink to attach the review to
            const drink = await Drink.findById(req.params.drink_id)
            // attach the review data to the drink
            // Add the user-centric info to req.body (the new review)
            req.body.user = req.user._id;
            req.body.userName = req.user.name;
            req.body.userAvatar = req.user.avatar;
            const reviewToCreate = req.body
            drink.reviews.push(reviewToCreate)
            // save the drink to the database
            await drink.save()
            // return the user to the drink show page
            res.redirect(`/drinks/${req.params.drink_id}`)
        }catch(err){
            res.send(err)
        }
    },
    delete: async (req, res) => {
        await Drink.findOne({'reviews._id': req.params.id, 'reviews.user': req.user._id}).then(function(drink) {
            if (!drink) return res.redirect('/drinks')
            drink.reviews.remove(req.params.id)
            drink.save().then(function() {
                res.redirect(`/drinks/${drink._id}`)
            }).catch(function(alert) {
                return next(alert("You cannot delete a review created by someone else"));
            })
        })
    }   
}
//         try{
//             await Drink.reviews.deleteOne(req.params.id);
//             await Drink.save();
//             res.redirect(`/drinks/${drink._id}`);
//         }catch(err){
//             res.send(err)
//         }
//     },
// }

module.exports = reviewsController