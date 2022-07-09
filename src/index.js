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

getWeather(fetchURL)
  .then(getDailyForecast)
  .then(drawCards);

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    weather.setCity(e.target.value).getDailyForecast().then(drawCards);
});
