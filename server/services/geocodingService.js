const axios = require('axios');
const config = require('../config');

async function fetchGeocoding(city) {
  const geocodingResponse = await axios.get(`${config.endpoints.geocoding}${city}.json?access_token=${config.apiKeys.mapboxAccessToken}`);
  const firstFeature = geocodingResponse.data.features?.[0];
  if (!firstFeature?.place_name || !firstFeature?.center) throw new Error('Location not found');
  return firstFeature.center;
}

async function fetchGeocodingData(city) {
  try {
    const response = await axios.get(`${config.endpoints.geocoding}${city}.json?access_token=${config.apiKeys.mapboxAccessToken}`);
    if (!response.data || response.data.features.length === 0) throw new Error('Location not found');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch geocoding data');
  }
}

module.exports = { fetchGeocoding, fetchGeocodingData };
