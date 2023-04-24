const express = require('express')
const router = express.Router()
const drinksController = require('../controllers/drinks-controller')
const ensureLoggedIn = require('../config/ensureLoggedIn')

router.get('/', drinksController.index)

router.get('/new', ensureLoggedIn, drinksController.new)

router.post('/', ensureLoggedIn, drinksController.create)

router.get('/:id', drinksController.show)

router.delete('/:id', ensureLoggedIn, drinksController.delete)

router.get('/:id/edit', ensureLoggedIn, drinksController.edit)

router.put('/:id', ensureLoggedIn, drinksController.update)

// router.post('/:id/drinks', drinksController.addDrink)

module.exports = router;
