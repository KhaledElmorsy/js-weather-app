# js-weather-app
This is a simple weather forecast webapp. It uses asynchronus functions to fetch weather forecast data from [OpenWeather][openweather], convert it to an object and manipulate it in various ways. 

## [Live Demo][demo]

## Notable Aspects:
- A singleton [module][module] handles api calls and provides methods that return promises containing fitlered and mutated objects from the main reponse to make drawing to the DOM easier.
  - Fetching is handled within the module and isn't exposed to the main handler.
  - The module provides functions to edit the city and units, which automatically refetch.
- Dark mode is implemented with *CSS only* by wrapping the page contents in a div and adding a checkbox as a sibling before it. Then just add the variables as a local scope and use a sibling+psuedoclass selector to add the darkmode colors.
```html
  <body>
    <input type="checkbox" id="dark-mode">
    <div id="page">
       <!-- Page contents -->
    </div>
  </body>
```

```Css
    #page {
        /* lightmode color variables */
    }
    #dark-mode:checked ~ #page {
        /* darkmode color variables */
    }
```
### Fun Facts
When making this project, the CSS psuedoclass `:has()` still had very limited browser compatibility. 

It acts like a parent element selector based on its children, and it lets us implement the CSS only darkmode above in a very efficient way that doesn't need an extra wrapper. 

It also lets us put the checkbox/toggle wherever we want instead of as a sibling to the wrapper that can only be positioned relative to the document body.

This is just one possible use for a parent selector. I can't wait to use it in all sorts of ways!

[openweather]: https://openweathermap.org
[demo]: https://kelmorsy.github.io/js-weather-app/
[module]:https://github.com/kelmorsy/js-weather-app/blob/main/src/weather.js
