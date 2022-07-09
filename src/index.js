import './style.css';
import { weatherCard } from './templates';

const apiKey = '59a057bac22e7b1ca98bd87a6a2e788e';
const city = 'London';
const units = 'metric';
const fetchURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

async function getWeather(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data.list;
}

function getDailyForecast(dataPoints) {
  const currentPoint = dataPoints[0];
  const currentHour = new Date(currentPoint.dt * 1000).getHours();
  return dataPoints.filter((point) => (
    new Date(point.dt * 1000).getHours() === currentHour
  ));
}

function log(result) {
  console.log(result);
  return result;
}

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
