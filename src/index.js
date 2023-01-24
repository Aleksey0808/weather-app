import './css/styles.css';
import { fetchWeather } from './js/weather-api';
import { showWeatherMarkup } from './js/showWeatherCard';
import VanillaTilt from "vanilla-tilt";

const element = document.querySelector(".card");
VanillaTilt.init(element, {
  max: 3,
  speed: 400,
  scale: 1,
  glare: true,
  "max-glare": 0.3,
  perspective: 500,
  transition: true,
  gyroscope: true,
});


import refs from './js/refs';
import { Notify } from 'notiflix';

refs.button.addEventListener('click', search);
refs.searchBar.addEventListener('keyup', enterSearch);

async function search() {
  let searchCountry = refs.searchBar.value.trim();

    try{
      const response = await fetchWeather(searchCountry)
      console.log(response);
      document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?"${response.name}"')`;
      const markup = showWeatherMarkup(response);
      refs.weather.innerHTML = markup;
      Notify.info(
        `Everything is fine, we found the weather in ${searchCountry}`
      );
    }
    catch {
      Notify.failure('Error, no weather found for that name');
    };
}

function enterSearch(event) {
  if (event.key === 'Enter') {
    search();
  }
  return
}
