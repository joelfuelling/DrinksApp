const express = require('express')
const router = express.Router()
const splashController = require('../controllers/splash-controller')

router.get('/', splashController.index)

module.exports = router;