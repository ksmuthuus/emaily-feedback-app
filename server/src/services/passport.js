const passport = require('passport')
const mongoose = require('mongoose')

const GoogleStrategy = require('passport-google-oauth20').Strategy

const keys = require('../../config/keys')

const User = mongoose.model('users')
passport.use(new GoogleStrategy({
  clientID:keys.googleClientID,
  clientSecret:keys.googleClientSecret,
  callbackURL:keys.googleCallbackURL
}, 
async (accessToken, refreshToken, profile, done) => {
  const user = await User.findOne({userId:profile.id})
  if(!user){
    await new User({userId:profile.id}).save()
  }
  
}))