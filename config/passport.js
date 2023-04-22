//  although the module is named the same as the passport module we've already required, it won't cause a problem because a module's full path uniquely identifies it to Node.

// 1 - after creating the 'passport = require('passport');', we have to run 'npm i passport-google-oauth' in the CLI to install it.

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').BeerVineStrategy; // ? ok ? 1:30:24 video timestamp
// const User = require('../models/user');
