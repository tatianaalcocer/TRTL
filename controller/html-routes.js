var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongojs = require('mongojs');

// // MongoDB
// var databaseUrl = ;
// var collections = ;
//
// // use mongojs to hook the database to the db variable
// var db = mongojs(databaseUrl, collections);
//
// db.on('error', function (err) {
//     console.log('database error', err)
// })
//
// db.on('connect', function () {
//     console.log('database connected')
// })


// Passport
// passport.use(new LocalStrategy({passReqToCallback : true},
//   function(req, email, password, done) {
//     console.log(email, password);
//
//   }
// ));
//
// // These two methods are required to keep the user logged in via the session
// passport.serializeUser(function(user, done) {
//   done(null, user);
// });
//
// passport.deserializeUser(function(user, done) {
//   done(null, user);
// });


// Routes
module.exports = function(app) {

  // entry for the React app
  app.get('/', function(req, res) {
    res.sendFile(__dirname + './app/Public/index.html');
  });

}
