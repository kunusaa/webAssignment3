const container = document.querySelector('.container');
const mapboxAccessToken = 'pk.eyJ1Ijoia3VudXNhYSIsImEiOiJjbHJpZ3p4ZDkwOTVxMnFxcTk0MHJ1a2RyIn0.7ryQCkxGr0h5kz6udO7a0g';

let marker;
let map;

mapboxgl.accessToken = mapboxAccessToken;

initMap();

function initMap() {
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [0, 0],
    zoom: 0
  });
}
