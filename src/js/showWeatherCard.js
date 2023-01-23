export function showWeatherMarkup(data) {
  return `<h2 class="city">Weather in ${data.name}</h2>
  <h1 class="temp">${data.main.temp}°C</h1>
  <div class="flex">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="" class="icon" />
    <div class="description">${data.weather[0].description}</div>
  </div>
  <div class="humidity">Humidity: ${data.main.humidity}%</div>
  <div class="wind">Wind speed: ${data.wind.speed} km/h</div>`;
}
