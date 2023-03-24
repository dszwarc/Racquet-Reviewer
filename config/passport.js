const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const UserModel = require('../models/user');
//Require your User Model here!

// configuring Passport!
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  async function(accessToken, refreshToken, profile, cb) {
    // a user has logged in via OAuth!    
    try{
      // Check if user is in the db
      let user = await UserModel.findOne({googleId: profile.id});
      // if the user doesn't find anything, then user is undefined (falsey)
      // this line stops the function with returning the user
      if (user) return cb(null, user);

      // if user did not exist, below code takes place
      user = await UserModel.create({
        name: profile.displayName,
        googleId: profile.id,
        email: profile.emails[0].value,
        avatar: profile.photos[0].value
      })
    }catch(err){
      cb(err)
    }
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  UserModel.findById(id)
    .then(function(userDoc){
      done(null, userDoc);
    }) .catch(err => {
      done(err)
    })
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will 
  // be availible in every Single controller function, so you always know the logged in user

});



