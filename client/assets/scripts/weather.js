const searchBox = document.querySelector('.search-box');
const cityInput = document.getElementById('cityInput');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const wikipediaInfo = document.getElementById('wikipedia-info');

const maxWords = 250;

searchBox.addEventListener('click', searchWeather);

async function searchWeather() {
  const city = cityInput.value.trim();

  if (city === '') return;

  try {
    const [geocodingData, weatherJson, wikipediaJson] = await Promise.all([
      fetchGeocodingData(city),
      fetchWeatherData(city),
      fetchWikipediaData(city)
    ]);

    handleSearchSuccess(geocodingData, weatherJson, wikipediaJson);
  } catch (error) {
    handleSearchError(error);
  }
}

function updateWeatherUI(weatherData) {
  container.style.height = '600px';
  weatherBox.classList.add('active');
  weatherDetails.classList.add('active');

  const image = document.querySelector('.weather-box img');
  const temperature = document.querySelector('.weather-box .temperature');
  const description = document.querySelector('.weather-box .description');
  const humidity = document.querySelector('.weather-details .humidity span');
  const wind = document.querySelector('.weather-details .wind span');
  const feels = document.querySelector('.weather-details .feels span');
  const pressure = document.querySelector('.weather-details .pressure span');
  const rainVolume = document.querySelector('.weather-details .rain-volume-value');

  // Image URL for weather icon
  const weatherIconUrl = getWeatherIconUrl(weatherData.weather[0].main);
  image.src = weatherIconUrl;

  temperature.innerHTML = `${Math.round(weatherData.main.temp)}<span>°C</span>`;
  description.innerHTML = `${weatherData.weather[0].description}`;
  humidity.innerHTML = `${weatherData.main.humidity} %`;
  wind.innerHTML = `${Math.round(weatherData.wind.speed)} Km/h`;
  feels.innerHTML = `${Math.round(weatherData.main.feels_like)}<span>°C</span>`;
  pressure.innerHTML = `${weatherData.main.pressure} hPa`;

  if (weatherData.rain && weatherData.rain['3h']) {
    const rainValue = weatherData.rain['3h'];
    rainVolume.innerText = rainValue.toFixed(2);
  } else {
    rainVolume.innerText = '0.00';
  }
}

function getWeatherIconUrl(weatherType) {
  const iconBasePath = 'assets/images/';
  switch (weatherType) {
    case "Clear":
      return iconBasePath + 'clear.png';
    case "Rain":
      return iconBasePath + 'rain.png';
    case "Snow":
      return iconBasePath + 'snow.png';
    case "Clouds":
      return iconBasePath + 'cloud.png';
    case "Mist":
    case "Haze":
      return iconBasePath + 'mist.png';
    default:
      return iconBasePath + 'cloud.png';
  }
}

function updateWikipediaUI(wikipediaData) {
  if (wikipediaData) {
    const plainText = wikipediaData.replace(/<[^>]+>/g, '').trim();
    const truncatedText = truncateText(plainText, maxWords);
    wikipediaInfo.innerHTML = truncatedText + '...';
    document.querySelector('.wikipedia-info').classList.add('active');
  } else {
    wikipediaInfo.innerText = '';
    document.querySelector('.wikipedia-info').classList.remove('active');
  }
}

function truncateText(text, maxWords) {
  const wordArray = text.split(/\s+/);
  const truncatedArray = wordArray.slice(0, maxWords);
  const truncatedText = truncatedArray.join(' ');
  return wordArray.length > maxWords ? truncatedText + '...' : truncatedText;
}
