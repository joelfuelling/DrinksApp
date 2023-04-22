// load the process.env.VARIABLEs 
require('dotenv').config()
// connect mongoose to the mongodb cloud database
require('./config/database-connect')
require('./config/passport');
const path = require('path');
const express = require('express')
const session = require('express-session');
const passport = require('passport');



// load and mount middleware
const drinksRouter = require('./routes/drinks-routes')
const reviewsRouter = require('./routes/reviews')
const morgan = require('morgan')
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');


const app = express();

app.set('view engine', 'ejs')
// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(morgan('dev'))
// lets us use static files
app.use(express.static(path.join(__dirname, 'public')));
// Gives us form data as req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ // middleware for cookeiParser (Express session verification)
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
  }));

// app.use(session({... code above
app.use(passport.initialize());
app.use(passport.session());
// Log req.body if there is one
app.use((req, res, next)=>{
    if(req.method.toLowerCase() === "post"){
        console.log(req.body)
    }
    next();
})

// ANY route starting with /drinks in the url...
// Send it over to the drinksRouter to complete the job
app.use('/drinks', drinksRouter)
// Reviews Router will have to handle various request urls:
// /drinks/movie_id/reviews
// /reviews/:review_id
// /reviews
app.use('/', reviewsRouter)

app.get('/', (req, res)=>{
    res.render('home-page')
})

app.listen(3000, ()=>{
    console.log("express is running, better go catch it")
})
