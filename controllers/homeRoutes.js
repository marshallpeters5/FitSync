const express = require('express');
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
  res.render('home');
});

module.exports = router;