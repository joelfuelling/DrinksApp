let express = require('express');
let router = express.Router();
const passport = require('passport')

router.get('/', function(req, res, next) {
    res.redirect('/drinks');
})

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google',
    {
      scope: ['profile', 'email'],
    }
  ));

router.get('/beervinecallback', passport.authenticate(
    'google',
    {
      successRedirect: '/drinks',
      failureRedirect: '/'
    }
  ));

router.get('/logout', function(req, res){ // The logout() method was automatically added to the req object by Passport!
    req.logout(function() {
      res.redirect('/drinks');
    });
  });

module.exports = router