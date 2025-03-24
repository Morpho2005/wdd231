const api = "https://api.openweathermap.org/data/2.5/weather?lat=34.435787645637745&lon=-103.21813001362734&appid=d3553867c84c4aa159faa43dc7228aa9&units=imperial"
const curweather = document.querySelector('#weather')
const forcast = document.querySelector('#forcast')

async function apiFetch() {
    try {
      const response = await fetch(api);
      if (response.ok) {
        const data = await response.json();
        curweather.innerHTML = weatherCard(data)

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

function numberToTime(num) {
  let hours = Math.floor(num / 3600);
  let minutes = Math.floor((num % 3600) / 60);
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}

const weatherCard = (array) => {
    let cardList = `
            <li><span class="bold">${array.main.temp}°</span> f</li>
            <li>${array.weather[0].description}</li>
            <li>High: ${array.main.temp_max}°</li>
            <li>Low: ${array.main.temp_min}°</li>
            <li>Humidity: ${array.main.humidity}%</li>`
    return cardList
};

apiFetch();