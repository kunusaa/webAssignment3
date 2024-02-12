const express = require('express');
const router = express.Router();
const History = require('../models/History');

router.get('/history', async (req, res) => {
  try {
    const allHistory = await History.find();
    
    res.status(200).json(allHistory);
  } catch (error) {
    console.error('Error getting history:', error);
    res.status(500).send('Error getting history');
  }
});

module.exports = router;
