const express = require('express');
const router = express.Router();
const { User } = require('../models');

// Route for user registration. //
router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to register user, please try again later.' });
  }
});

// Route for user login. //
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    const isPasswordValid = user.checkPassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to login, please try again later.' });
  }
});

// Route for user logout. //
router.post('/logout', (req, res) => {
  res.redirect('/login');
});

module.exports = router;
