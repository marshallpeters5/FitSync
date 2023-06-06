const express = require('express');
const { Exercise, User } = require('../models');
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
router.get('/profile', async (req, res) => {
  const userData = await User.findOne({ where: { id: req.session.user_id } });

  res.render('profile', {logged_in: req.session.logged_in, user_name:userData.name });
});

module.exports = router;