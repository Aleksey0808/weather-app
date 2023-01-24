import { Notify } from 'notiflix';
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const apiKey = 'aba6ff9d6de967d5eac6fd79114693cc';
export async function fetchWeather(city) {
  try {
    return await axios
      .get(BASE_URL, {
        params: {
          appid: apiKey,
          q: city,
          units: 'metric',
        },
      })
      .then(response => response.data);
  } catch (error) {
    throw new Error(error);
  }
}
