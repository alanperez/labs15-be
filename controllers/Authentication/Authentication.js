const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const router = require('express').Router();

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  console.log(accessToken);
  console.log(refreshToken);
  console.log(profile);
  console.log(done);

}));

router.get('/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

router.get('/auth/google/callback', passport.authenticate('google'));


module.exports = router;