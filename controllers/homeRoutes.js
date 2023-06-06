const express = require('express');
const { Exercise } = require('../models');
const router = express.Router();

const checkLoggedIn = (req, res, next) => {
  if (req.session.logged_in) {
    next();
  } else {
    res.redirect('api/users/login');
  }
};

// Home route
router.get('/', checkLoggedIn, (req, res) => {
  res.render('home', {logged_in: req.session.logged_in });
});

// Profile link
router.get('/profile', (req, res) => {
  res.render('profile', {logged_in: req.session.logged_in });
});

module.exports = router;