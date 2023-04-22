// This route created for 9.1 of oAuth guide setup. 1:47:20 in video.

let express = require('express');
let router = express.Router();
const passport = require('passport')

router.get('/', function(req, res, next) {
    res.redirect('/drinks');
})

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      // Requesting the user's profile and email
      scope: ['profile', 'email'],
      // Optionally force pick account every time
      // prompt: "select_account"
    }
  ));

  // Google OAuth callback route
router.get('/beervinecallback', passport.authenticate(
    'google',
    {
      successRedirect: '/drinks',
      failureRedirect: '/drinks'
    }
  ));

  // OAuth logout route
router.get('/logout', function(req, res){
    req.logout(function() {
      res.redirect('/drinks');
    });
  });

module.exports = router