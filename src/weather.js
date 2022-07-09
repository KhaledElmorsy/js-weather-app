import countries from './assets/misc/countries.json';

export default (function weather() {
  const apiKey = '59a057bac22e7b1ca98bd87a6a2e788e';
  let city = 'Cairo';
  let units = 'metric';

  async function getWeather() {
    try {
      const fetchURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;
      const response = await fetch(fetchURL);
      if (!response.ok) throw new Error('City not found.');

      const data = await response.json();
      return data;
    } catch (error) {
      city = 'Cairo';
      console.log(`${error} Loading ${city} instead.`);
      return getWeather();
    }
  }

  let weatherData;
  function updateData() {
    weatherData = getWeather();
  }

  updateData();

  const getDailyForecast = () => (weatherData.then((data) => {
    const dataPoints = data.list;
    const currentPoint = dataPoints[0];
    const currentHour = new Date(currentPoint.dt * 1000).getHours();
    return dataPoints.filter(
      (point) => new Date(point.dt * 1000).getHours() === currentHour
    );
  }));

  const getLocation = () => (weatherData.then((data) => ({
    city: data.city.name,
    country: countries[data.city.country],
  })));

  function setCity(newCity) {
    city = newCity;
    updateData();
    return this;
  }

  function setUnits(newUnits) {
    if (['metric', 'imperial'].find(newUnits)) {
      units = newUnits;
      updateData();
    }
    return this;
  }

  return { getDailyForecast, getLocation, setCity, setUnits };
})();
