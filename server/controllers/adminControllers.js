const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Route to handle user creation
router.post('/create-user', async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      res.send('The username is already in use')
    }
    
    const newUser = new User({ username, password });
    await newUser.save();
    res.send('User created successfully');
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send('Error creating user');
  }
});


// Route to handle user editing
router.post('/edit-user', async (req, res) => {
  try {
    const { userId, newUsername, newPassword } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    user.username = newUsername;
    user.password = newPassword;
    user.updateDate = Date.now();
    await user.save();
    res.send('User updated successfully');
  } catch (error) {
    res.status(500).send('Error updating user');
  }
});

// Route to handle user deletion
router.post('/delete-user', async (req, res) => {
  try {
    const { userIdToDelete } = req.body;
    const user = await User.findById(userIdToDelete);
    if (!user) {
      return res.status(404).send('User not found');
    }
    user.deletionDate = Date.now();
    user.isDeleted = true;

    await user.save();
    res.send('User deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting user');
  }
});

module.exports = router;
