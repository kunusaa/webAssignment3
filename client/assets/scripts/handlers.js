function handleSearchSuccess(geocodingData, weatherJson, wikipediaJson) {
  const firstFeature = geocodingData.features?.[0];

  if (!firstFeature?.place_name || !firstFeature?.center) {
    handleCityNotFound();
    return;
  }

  const [longitude, latitude] = firstFeature.center;

  map.setCenter([longitude, latitude + 0.02]);

  if (marker) {
    marker.setLngLat([longitude, latitude]);
  } else {
    marker = new mapboxgl.Marker({ color: 'red' }).setLngLat([longitude, latitude]).addTo(map);
  }

  updateWeatherUI(weatherJson);
  updateWikipediaUI(wikipediaJson.wikipediaData);
  
  document.querySelector('.wikipedia-container').style.display = 'block';
  document.querySelector('.map').style.display = 'block';

  map.resize();
  error404.classList.remove('active');
}

function handleSearchError(error) {
  console.error('Error:', error);
  handleCityNotFound();
}

function handleCityNotFound() {
  container.style.height = '400px';
  weatherBox.classList.remove('active');
  weatherDetails.classList.remove('active');
  error404.classList.add('active');
}