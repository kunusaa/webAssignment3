const config = {
  express: {
    PORT: process.env.PORT || 3000,
    clientPath: "../client"
  },
  apiKeys: {
    mapboxAccessToken: 'pk.eyJ1Ijoia3VudXNhYSIsImEiOiJjbHJpZ3p4ZDkwOTVxMnFxcTk0MHJ1a2RyIn0.7ryQCkxGr0h5kz6udO7a0g',
    openWeatherMapAPIKey: '20a2cc05a0e3e06f1fff99281c82a7b4'
  },
  endpoints: {
    wikipedia: 'https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&exintro=true&redirects=true&origin=*',
    geocoding: 'https://api.mapbox.com/geocoding/v5/mapbox.places/',
    weather: 'https://api.openweathermap.org/data/2.5/weather'
  },
  mongoURI : "mongodb+srv://sultokTheF:utDy0cKtsjPVVGE1@chat.kcom9ae.mongodb.net/",
};

module.exports = config;
