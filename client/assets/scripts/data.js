// const weatherApiUrl = 'http://localhost:3000/weather/';
// const wikipediaApiUrl = 'http://localhost:3000/wikipedia/';
// const geocodingApiUrl = 'http://localhost:3000/geocoding/';

const weatherApiUrl = 'https://alua-weather.onrender.com/weather/';
const wikipediaApiUrl = 'https://alua-weather.onrender.com/wikipedia/';
const geocodingApiUrl = 'https://alua-weather.onrender.com/geocoding/';


async function fetchGeocodingData(city) {
  try {
    const response = await fetch(`${geocodingApiUrl}${city}`);
    if (!response.ok) throw new Error('Failed to fetch geocoding data');
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch geocoding data');
  }
}

async function fetchWeatherData(city) {
  try {
    const response = await fetch(`${weatherApiUrl}${city}`);
    if (!response.ok) throw new Error('Failed to fetch weather data');
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch weather data');
  }
}

async function fetchWikipediaData(city) {
  try {
    const response = await fetch(`${wikipediaApiUrl}${city}`);
    if (!response.ok) throw new Error('Failed to fetch Wikipedia data');
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch Wikipedia data');
  }
}
