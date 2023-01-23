import './css/styles.css';
import { fetchWeather } from './js/weather-api';
import { showWeatherMarkup } from './js/showWeatherCard';

import refs from './js/refs';
import { Notify } from 'notiflix';

const URL_IMAGE = 'https://source.unsplash.com/1600x900/';

refs.button.addEventListener('click', search);
refs.searchBar.addEventListener('keyup', enterSearch);

async function search() {
  let searchCountry = refs.searchBar.value.trim();

  await fetchWeather(searchCountry)
    .then(response => {
      console.log(response);
      document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?"${response.name}"')`;
      const markup = showWeatherMarkup(response);
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
