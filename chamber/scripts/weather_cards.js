const api = "https://api.openweathermap.org/data/2.5/weather?lat=34.435787645637745&lon=-103.21813001362734&appid=d3553867c84c4aa159faa43dc7228aa9&units=imperial"
const forapi = "https://api.openweathermap.org/data/2.5/forecast?lat=34.435787645637745&lon=-103.21813001362734&appid=d3553867c84c4aa159faa43dc7228aa9&units=imperial"
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
    try {
      const response = await fetch(forapi);
      if (response.ok) {
        const data = await response.json();
        forcast.innerHTML = forcastCard(data)

      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
}

const weatherCard = (array) => {
    let cardList = `
            <li><span class="bold">${array.main.temp}°</span>f</li>
            <li>${array.weather[0].description}</li>
            <li>High: ${array.main.temp_max}°</li>
            <li>Low: ${array.main.temp_min}°</li>
            <li>Humidity: ${array.main.humidity}%</li>`
    return cardList
};

const forcastCard = (array) => {
  let cardList = `
          <li>Today: <span class="bold">${array.list[0].main.temp}°F</span></li>
          <li>Tomorrow: <span class="bold">${array.list[8].main.temp}°F</span></li>
          <li>Overmorrow: <span class="bold">${array.list[16].main.temp}°F</span></li>`
  return cardList
  
};

apiFetch();