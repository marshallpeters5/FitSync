const express = require('express');
const router = express.Router();

const checkLoggedIn = (req, res, next) => {
  if (req.session.loggedin) {
    next();
  } else {
    res.redirect('api/users/login');
  }
};

// Home route. //
router.get('/', (req, res) => {
  res.render('home');
});

module.exports = router;
