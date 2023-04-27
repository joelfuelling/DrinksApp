const express = require('express')
const router = express.Router()
const reviewsController = require('../controllers/reviews-controller')
const ensureLoggedIn = require('../config/ensureLoggedIn')

// create a new review for a movie
router.post('/drinks/:drink_id/reviews', ensureLoggedIn, reviewsController.create)
router.delete('/reviews/:id', ensureLoggedIn, reviewsController.delete)
// Will need delete setup as well.

module.exports = router;