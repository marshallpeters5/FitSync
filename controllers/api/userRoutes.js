const express = require("express");
const router = express.Router();
const { User } = require("../../models");

// Route for creating a new user
router.post("/", async (req, res) => {
  try {
    // Create a new user using the data from the request body
    const userData = await User.create(req.body);
    // Save the user ID and set logged_in flag in the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // Respond with the created user data
      res.status(200).json(userData);
    });
  } catch (err) {
    // If an error occurs, respond with the error
    res.status(400).json(err);
  }
});

// Route for rendering the signup form
router.get("/signup", (req, res) => {
  res.render("signup");
});

// Route for rendering the login form
router.get("/login", (req, res) => {
  res.render("login");
});

// Route for user login
router.post("/login", async (req, res) => {
  try {
    // Find a user with the provided email in the request body
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      // If no user is found, respond with an error message
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }
    // Check if the provided password matches the user's password
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      // If the password is incorrect, respond with an error message
      res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
      return;
    }

    // Save the user ID and set logged_in flag in the session
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // Respond with the user data and a success message
      res.render('home', {logged_in: true});
    });
  } catch (err) {
    // If an error occurs, respond with the error
    res.status(400).json(err);
  }
});

// Route for user logout
router.get("/logout", (req, res) => {
  if (req.session.logged_in) {
    // Destroy the session and redirect to the login page
    req.session.destroy(() => {
      res.clearCookie('connect.sid'); // Clear the session cookie
      res.redirect('/api/users/login');
    });
  } else {
    // If no session is found, respond with a not found status
    res.status(404).end();
  }
});

module.exports = router;