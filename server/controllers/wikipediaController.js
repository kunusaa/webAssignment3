const express = require('express');
const { fetchWikipediaData } = require('../services/wikipediaService');

const router = express.Router();

router.get('/:city', async (req, res) => {
  const cityName = req.params.city;
  try {
    const wikipediaData = await fetchWikipediaData(cityName);
    res.json({ wikipediaData });
  } catch (error) {
    console.error('Error fetching Wikipedia data:', error);
    res.status(500).json({ error: 'Error fetching Wikipedia data' });
  }
});

module.exports = router;
