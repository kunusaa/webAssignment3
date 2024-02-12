const axios = require('axios');
const config = require('../config');

const { fetchGeocoding } = require('./geocodingService');

async function fetchWeatherData(cityName) {
  const [longitude, latitude] = await fetchGeocoding(cityName);
  const weatherResponse = await axios.get(`${config.endpoints.weather}?lat=${latitude}&lon=${longitude}&units=metric&appid=${config.apiKeys.openWeatherMapAPIKey}`);
  return weatherResponse.data;
}

module.exports = { fetchWeatherData };
