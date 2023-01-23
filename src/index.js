import './css/styles.css';
import { fetchWeather } from './js/weather-api';
import { showWeatherMarkup } from './js/showWeatherCard';
// import displayWeather from './js/showWeatherCars';
import refs from './js/refs';
import { Notify } from 'notiflix';

// const BASE_URL = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m`;
// fetch(BASE_URL)
//   .then(response => {
//     return response.json();
//   })
//   .then(response => console.log(response));

refs.button.addEventListener('click', search);
refs.searchBar.addEventListener('keyup', enterSearch);

// fetchWeather('Kyiv').then(response => showWeatherMarkup(response));

function search() {
  let searchCountry = refs.searchBar.value.trim();

fetchWeather(searchCountry)
.then(response => {
console.log(response);
console.log(showWeatherMarkup(response));
console.log(refs.weather)


  const markup = showWeatherMarkup(response)
  refs.weather.innerHTML = markup;
  Notify.info(
    `Everything is fine, we found the weather in ${searchCountry}`
  );

})
    .catch(error => {
      Notify.failure('Error, no weather found for that name');
      console.log(error);
    });
}

function enterSearch(event) {
  if (event.key === 'Enter') {
    search();
  }
}
