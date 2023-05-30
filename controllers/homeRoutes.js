const express = require('express');
const router = express.Router();

const checkLoggedIn = (req, res, next) => {
  if (req.session.loggedin) {
    next();
  } else {
    res.redirect('/login');
  }
};

// Home route. //
router.get('/', checkLoggedIn, (req, res) => {
  res.render('./views/home.hbs');
});

module.exports = router;
