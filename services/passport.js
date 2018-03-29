 
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys.js');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id); 
});

passport.deserializeUser((id, done) => {
	User.findById(id).then(user => {
		done(null, user);
	})
});

passport.use(

	new GoogleStrategy(
		{

			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true

		}, async (accessToken, refreshToken, profile, done) => {

			//query
			const existingUser = await User.findOne({ email: profile.emails[0].value});
			//const existingUser = await User.findOne({ googleId: profile.id });

			if(existingUser) {

				//but lets check if it has an google id, maybe we have his email by facebook
				if(existingUser.googleId === profile.id) {

					//return done(null, existingUser);
				}

				//we already have a user with this info
				return done(null, existingUser);

				
			}

			//new user
			const user = await new User({
				googleId: profile.id,
				email: profile.emails[0].value,
				firstName: profile.name.givenName,
				lastName: profile.name.familyName,
				language: profile.language
			}).save();

			done(null, user);
	
		}
	)	
);

passport.use(

	new FacebookStrategy(
		{

	    	clientID: keys.facebookClientID,
	    	clientSecret: keys.facebookClientSecret,
	    	//callbackURL: "https://murmuring-waters-18649.herokuapp.com/auth/facebook/callback",
	    	callbackURL: "/auth/facebook/callback",
	    	proxy:true

	  	}, async (accessToken, refreshToken, profile, cb) => {

	    	// User.findOrCreate({ facebookId: profile.id }, function (err, user) {
	     //  		return cb(err, user);
	    	// });
	    	
	    	//query
	    	console.log(profile);
	    	
			const existingUser = await User.findOne({ email: profile.emails[0].value});
			//const existingUser = await User.findOne({ googleId: profile.id });

			if(existingUser) {

				//but lets check if it has an google id, maybe we have his email by google
				if(existingUser.facebookId === profile.id) {

					//return done(null, existingUser);
				}

				//we already have a user with this info
				return done(null, existingUser);

			}

			//new user
			const user = await new User({
				facebookId: profile.id,
				email: profile.emails[0].value,
				firstName: profile.name.givenName,
				lastName: profile.name.familyName,
				language: profile.language
			}).save();

			done(null, user);
  		}
	)
);










