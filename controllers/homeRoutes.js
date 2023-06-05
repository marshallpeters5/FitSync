const express = require('express');
const { Exercise } = require('../models');
const router = express.Router();

const checkLoggedIn = (req, res, next) => {
  if (req.session.loggedin) {
    next();
  } else {
    res.redirect('/api/users/login');
  }
};

// Home route. //
router.get('/', (req, res) => {
  res.render('home');
});
// Login Link
router.get('/login', (req, res) => {
  res.render('login');
});

// Profile link
router.get('/profile', (req, res) => {
  res.render('profile');
});

//Exercise link
router.get('/exercise', async (req, res) => {
  try {
    // Find exercise by id
    const exerciseData = await Exercise.findAll().catch((err) => { 
      res.json(err);
    });

 

  const exercises = exerciseData.map((exercise) => exercise.get({ plain: true }));
    res.render('exercise',  { exercises });
  } catch (err) {
    res.status(500).json(err);
  }
});
 

module.exports = router;
