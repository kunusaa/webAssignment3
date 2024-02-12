const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Import the User model

// Route to handle user login
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user in the database
    const user = await User.findOne({ username });

    // If user not found or password doesn't match, return error
    if (!user || user.password !== password) {
      return res.status(401).send('Invalid username or password');
    }

    if (!user.isDeleted) {
      res.send(user);
    } else {
      return res.status(401).send('This account is deleted');
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.status(500).send('Error logging in user');
  }
});

module.exports = router;
