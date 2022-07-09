import countries from './assets/misc/countries.json';

/**
 * Weather API handler that automatically fetches weather data and returns it in
 * nicely formatted and filtered objects that can be used by DOM handlers.
 *
 * Uses OpenWeather's {@link https://openweathermap.org/forecast5 5 day forecast API}
 */
export default (function weather() {
  const apiKey = '59a057bac22e7b1ca98bd87a6a2e788e';
  // Set defaults
  let city = 'Cairo'; // Aye 𓀝𓀂𓀓𓀔𓀕𓀖𓀗
  let units = 'metric';

  /**
   * Make API call for a 5 day - 3 hr interval weather forecast and convert to
   * an object
   * @returns {Promse<Object>}
   */
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

  /** Variable w/ weather data promise */
  let weatherData;

  /**
   * Update local weather data variable
   */
  function updateData() {
    weatherData = getWeather();
  }

  updateData();

  /**
   * Filter 5 day forecast for data points corresponding to closest time.
   * i.e. Closest time: 3pm ==> Keep only 3pm data points
   * @returns {Promise<Object>}
   */
  const getDailyForecast = () => (weatherData.then((data) => {
    const dataPoints = data.list;
    const currentPoint = dataPoints[0]; // data is sorted by most recent
    const currentHour = new Date(currentPoint.dt * 1000).getHours();
    return dataPoints.filter(
      (point) => new Date(point.dt * 1000).getHours() === currentHour
    );
  }));

  /**
   * Get city and country names from the response. Country data is provided as
   * alpha-2 codes so they're converted to full names using a dict style JSON
   * @returns {Promise<Object>}
   */
  const getLocation = () => (weatherData.then((data) => ({
    city: data.city.name,
    country: countries[data.city.country],
  })));

  /**
   * Update module's city and fetch new data
   * @param {string} newCity 
   * @returns {weather} module
   */
  function setCity(newCity) {
    city = newCity;
    updateData();
    return this;
  }

  /**
   * Update model's unit standard and fetch new data. Do nothing if input's invalid.
   * @param {string} newUnits Unit standards. 'metric' or 'imperial'.
   * @returns {weather} module
   */
  function setUnits(newUnits) {
    if (['metric', 'imperial'].find(newUnits)) {
      units = newUnits;
      updateData();
    }
    return this;
  }

  return { getDailyForecast, getLocation, setCity, setUnits };
})();
