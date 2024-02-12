const express = require('express');
const { fetchGeocodingData } = require('../services/geocodingService');

const router = express.Router();

router.get('/:city', async (req, res) => {
  const cityName = req.params.city;
  try {
    const coordinates = await fetchGeocodingData(cityName);
    res.json(coordinates);
  } catch (error) {
    console.error('Error fetching geocoding data:', error);
    res.status(500).json({ error: 'Error fetching geocoding data' });
  }
});

module.exports = router;