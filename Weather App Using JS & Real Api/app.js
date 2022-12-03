//api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const weatherApi = {
  key: "05a5684559fd28dcbc95ee1caeea0fdf",
  baseurl: "https://api.openweathermap.org/data/2.5/weather",
};

const searchInputBox = document.getElementById("input-box");
// const WeatherBody = document.getElementById("weather-body")

//Event Listener Function On KeyPress
searchInputBox.addEventListener("keypress", (event) => {
  if (event.keyCode === 13) {
    console.log(searchInputBox.value);
    GetWeatherReport(searchInputBox.value);
    document.querySelector('.weather-body').style.display = "block";
  }
});

//Get Weather Report
function GetWeatherReport(city) {
  fetch(`${weatherApi.baseurl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((weather) => {
      return weather.json();
    })
    .then(ShowWeatherReport);
}

//Show Weather Report
function ShowWeatherReport(weather) {
  console.log(weather);

  let city = document.getElementById("city");
  city.innerText = `${weather.name},${weather.sys.country}`;

  let temperature = document.getElementById("temp");
  temperature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

  let MinMaxTemp = document.getElementById("min-max");
  MinMaxTemp.innerHTML = `${Math.floor(weather.main.temp_min)}&deg;C(min) / ${Math.ceil(weather.main.temp_max)}&deg;C(max)`;

  let WeatherType = document.getElementById("weather");
  WeatherType.innerText = `${weather.weather[0].main}`

  let date = document.getElementById("date");
  let todayDate = new Date();
  date.innerText = dateManage(todayDate);

  if (WeatherType.textContent == 'Clear') {
    document.body.style.backgroundImage = "url('imgs/clear.jpg')";

  } else if (WeatherType.textContent == 'Clouds') {

    document.body.style.backgroundImage = "url('imgs/cloud.jpg')";

  } else if (WeatherType.textContent == 'Haze') {

    document.body.style.backgroundImage = "url('imgs/haze.jpg')";

  } else if (WeatherType.textContent == 'Rain') {

    document.body.style.backgroundImage = "url('imgs/rain.jpg')";

  } else if (WeatherType.textContent == 'Snow') {

    document.body.style.backgroundImage = "url('imgs/snow.jpg')";

  } else if (WeatherType.textContent == 'Thunderstorm') {

    document.body.style.backgroundImage = "url('imgs/thunderstorm.jpg')";

  } else if (WeatherType.textContent == 'fog') {

    document.body.style.backgroundImage = "url('imgs/fog.webp')";

  } else if (WeatherType.textContent == 'mist') {

    document.body.style.backgroundImage = "url('imgs/mist.webp')";

  }
}

//Date Manage
function dateManage(dateArg) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'November', 'December'];

  let date = dateArg.getDate();
  let year = dateArg.getFullYear();
  let month = months[dateArg.getMonth()];
  let day = days[dateArg.getDay()];

  return `${date} ${month} (${day}) , ${year}`;
}



