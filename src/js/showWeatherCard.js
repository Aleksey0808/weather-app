// // export function showWeatherMarkup(value) {
// //   return `<h2 class="city">Weather in ${data.name}</h2>
// //   <h1 class="temp">${data.main.temp}°C</h1>
// //   <div class="flex">
// //     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" class="icon" />
// //     <div class="description">${data.weather[0].description}</div>
// //   </div>
// //   <div class="humidity">Humidity: ${data.main.humidity}%</div>
// //   <div class="wind">Wind speed: ${data.wind.speed} km/h</div>`;
// // }
// export function showWeatherMarkup(data) {
//   console.log(data.main.temp);
//   console.log('hello');
//   return `<h2 class="city">Weather in ${data.name}</h2>
//    <h1 class="temp">${data.main.temp}°C</h1>
//    <div class="flex">
//      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" class="icon" />
//      <div class="description">${data.weather[0].description}</div>
//    </div>
//    <div class="humidity">Humidity: ${data.main.humidity}%</div>
//    <div class="wind">Wind speed: ${data.wind.speed} km/h</div>`;
// }

// // import refs from '../js/refs';

// // export default function displayWeather(data) {
// //   const { name } = data;
// //   const { icon, description } = data.weather[0];
// //   const { temp, humidity } = data.main;
// //   const { speed } = data.wind;

// //   refs.city.textContent = `Weather in ${name}`;
// //   refs.icon.src = `https://openweathermap.org/img/wn/${icon}.png`;
// //   refs.description.textContent = description;
// //   refs.temp.textContent = `${temp}°C`;
// //   refs.humidity.textContent = `Humidity: ${humidity}%`;
// //   refs.wind.textContent = `Wind speed: ${speed}km/h`;
// //   refs.weather.classList.remove('loading');

// //   document.body.style.backgroundImage =
// //     "url('https://source.unsplash.com/1600x900/?" + name + "')";
// // }
