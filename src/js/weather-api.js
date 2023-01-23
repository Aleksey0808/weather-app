import { Notify } from 'notiflix';
import axios from 'axios';

// export async function fetchWeather(city) {
//   const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

//   const apiKey = 'aba6ff9d6de967d5eac6fd79114693cc';
//   return await fetch(`${BASE_URL}?q=${city}&units=metric&appid=${apiKey}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.statusText);
//       }
//       return response.json();
//     }
//   );
// }
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
