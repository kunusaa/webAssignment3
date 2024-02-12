const axios = require('axios');
const config = require('../config');

async function fetchWikipediaData(cityName) {
  const wikipediaResponse = await axios.get(`${config.endpoints.wikipedia}&titles=${cityName}`);
  const wikipediaData = wikipediaResponse.data;
  const pages = wikipediaData.query.pages;
  const firstPageId = Object.keys(pages)[0];
  return pages[firstPageId]?.extract || null;
}

module.exports = { fetchWikipediaData };
