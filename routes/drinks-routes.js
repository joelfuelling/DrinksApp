const express = require('express')
const router = express.Router()
const drinksController = require('../controllers/drinks-controller')

router.get('/', drinksController.index)

router.get('/new', drinksController.new)

router.post('/', drinksController.create)

router.get('/:id', drinksController.show)

router.delete('/:id', drinksController.delete)

router.get('/:id/edit', drinksController.edit)

router.put('/:id', drinksController.update)

router.post('/:id/performers', drinksController.addPerformer)

module.exports = router;