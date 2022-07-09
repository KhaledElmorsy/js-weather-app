import './style.css';
import weather from './weather';

import { weatherCard } from './templates';

function drawCards(weatherArray) {
  const container = document.getElementById('overview');
  container.innerHTML = '';
  weatherArray.forEach((day) => {
    container.appendChild(weatherCard(day));
  });
}

function updateLocation(locationData) {
  document.getElementById('city').textContent = locationData.city;
  document.getElementById('country').textContent = locationData.country;
}

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    weather.setCity(e.target.value).getDailyForecast().then(drawCards);
    weather.getLocation().then(updateLocation);
  }
});
