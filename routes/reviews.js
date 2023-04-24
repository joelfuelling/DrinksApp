const express = require('express')
const router = express.Router()
const reviewsController = require('../controllers/reviews-controller')

// create a new review for a movie
router.post('/drinks/:drink_id/reviews', reviewsController.create)
// router.delete('/drinks/:drink_id/reviews', reviewsController.delete)
// Will need delete setup as well.

module.exports = router;