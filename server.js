// Include Server Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var passport = require('passport');
var session = require('express-session');
var flash = require('connect-flash');

// Create Instance of Express
var app = express();
var PORT = 3000;

// Run Morgan for Logging
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//Need to create this
app.use(express.static('./app/Public'));


// Passport
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }, resave: true, saveUninitialized: true}))

    //Flash is used to show a message on an incorrect login
    app.use(flash());

//Passport Middleware Methods
app.use(passport.initialize());
app.use(passport.session());


// Routes
    //Need to add controller and route files
require('./controller/html-routes.js')(app);


// Listener
app.listen(process.env.PORT || PORT, function() {
	console.log("App listening on PORT: " + PORT);
});
