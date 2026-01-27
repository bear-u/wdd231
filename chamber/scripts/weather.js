const key = "a8e887a0a47f55e6d36209c07e580da1";
const lat = "40.7608";
const lon = "-111.8910";

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

async function getWeather() {
  const res = await fetch(url);
  const data = await res.json();

  document.getElementById("current-temp").textContent = `${data.list[0].main.temp}°C`;
  document.getElementById("weather-desc").textContent = data.list[0].weather[0].description;

  const forecastDiv = document.getElementById("forecast");
  forecastDiv.innerHTML = "";

  [8, 16, 24].forEach(i => {
    const p = document.createElement("p");
    p.textContent = `${data.list[i].dt_txt.split(" ")[0]}: ${data.list[i].main.temp}°C`;
    forecastDiv.appendChild(p);
  });
}

getWeather();
