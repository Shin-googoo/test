const API_KEY ="5ca775a20b99116b3a8018cf9294760c";

function onGeoOk(position){
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("you live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then(response => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name; 
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
    });
   // url을 불러오는데 씀. &units=metric -> 온도체계를 바꿔줌
}

function onGeoError(){
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);