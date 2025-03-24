const apiKey = '6bfe07b827fe57dac4a5248c446ae3ef';
const city = 'Cape Coast';
const units = 'imperial'; // Use 'metric' for Celsius

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;
const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${units}&appid=${apiKey}`;

// Fetch current weather
fetch(weatherURL)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp.toFixed(1);
    const description = data.weather[0].description;
    const iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById('current-temp').textContent = `${temp}°F`;
    document.getElementById('current-description').textContent = description;
    document.getElementById('weather-icon').src = iconSrc;
    document.getElementById('weather-icon').alt = description;
  })
  .catch(error => console.log('Error fetching current weather:', error));

// Fetch 3-day forecast

// Fetch 3-day forecast
fetch(forecastURL)
  .then(response => response.json())
  .then(data => {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';

    // Filter forecast for midday each day
    const forecastList = data.list.filter(forecast => forecast.dt_txt.includes('12:00:00')).slice(0, 3);

    forecastList.forEach(forecast => {
      const date = new Date(forecast.dt_txt);
      const day = date.toLocaleDateString('en-US', { weekday: 'long' });
      const temp = forecast.main.temp.toFixed(1);
      const description = forecast.weather[0].description;
      const icon = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

      forecastContainer.innerHTML += `
        <div class="forecast-row">
          <h4>${day}</h4>
          <img src="${icon}" alt="${description}">
          <p>${temp}°F - ${description}</p>
        </div>
      `;
    });
  })
  .catch(error => console.log('Error fetching forecast:', error));
