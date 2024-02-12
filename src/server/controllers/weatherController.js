const express = require('express');
const { fetchWeatherData } = require('../services/weatherService');

const History = require("../models/History");

const router = express.Router();

router.get('/:city', async (req, res) => {
  const cityName = req.params.city;
  try {
    const weatherData = await fetchWeatherData(cityName);
    const newHistory = new History({
      query: cityName
    });

    await newHistory.save();
    res.json(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    res.status(500).json({ error: 'Error fetching weather data' });
  }
});

module.exports = router;
