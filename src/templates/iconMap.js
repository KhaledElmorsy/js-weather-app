import icons from '../assets/graphics/weather icons';

// function setIcon(icon, idArray) {
//   return idArray.reduce((obj, key) => {
//     obj[key] = icon;
//     return obj;
//   }, {});
// }

// const partlyCloudy = setIcon(icons.partlyCloudy, ['02d', '02n', '04d', '04n']);
// const cloudy = setIcon(icons.cloudy, ['03d', '03n']);
// const rain = setIcon(icons.rain, ['09d', '09n', '10d', '10n']);
// const storm = setIcon(icons.storm, ['11d', '11n']);
// const snow = setIcon(icons.snow, ['13d', '13n']);
// const windy = setIcon(icons.windy, ['50d', '50n']);

// export default {
//   '01d': icons.sunny,
//   ...partlyCloudy,
//   ...cloudy,
//   ...rain,
//   ...storm,
//   ...snow,
//   ...windy,
// };

export default {
  '01d': icons.sunny,
  '01n': icons.nightClear,
  '02d': icons.partlyCloudy,
  '02n': icons.partlyCloudy,
  '03d': icons.cloudy,
  '03n': icons.cloudy,
  '04d': icons.partlyCloudy,
  '04n': icons.partlyCloudy,
  '09d': icons.rain,
  '09n': icons.rain,
  '10d': icons.rain,
  '10n': icons.rain,
  '11d': icons.strom,
  '11n': icons.strom,
  '13d': icons.snow,
  '13n': icons.snow,
  '50d': icons.windy,
  '50n': icons.windy,
};
