import { HTMLtoElement } from './helpers';
import iconMap from './iconMap';

export default function weatherCard(data) {
  const date = new Date(data.dt * 1000);

  const weekdayOption = { timeZone: 'UTC', weekday: 'long' };
  const dateOption = { timeZone: 'UTC', dateStyle: 'medium' };
  const hourOption = {
    timeZone: 'UTC',
    hour12: 'true',
    hour: 'numeric',
    minute: 'numeric',
  };

  const weekday = new Intl.DateTimeFormat('en-US', weekdayOption).format(date);
  const hour = new Intl.DateTimeFormat('en-US', hourOption).format(date);
  const fullDate = new Intl.DateTimeFormat('en-US', dateOption).format(date);

  const html = `<div class="card">
              <div class="date-time">
                  <h2>${weekday}</h2>
                  <p class="date">${fullDate}</p>
                  <p class="time">${hour}</p>
              </div>
              <div class="details">
                  <p class="precipiration">Precipiration: ${data.pop * 100}%</p>
                  <p class="humiditiy">Humidity: ${data.main.humidity}%</p>
                  <p class="wind">Wind: ${Math.round(data.wind.speed * 3.6)}km/h</p>
              </div>
              <h1 class="temp">${Math.round(data.main.temp * 10) / 10}°C</h1>
              <img src="${iconMap[data.weather[0].icon]}" alt="" srcset="">
            </div>`;
  return HTMLtoElement(html);
}
