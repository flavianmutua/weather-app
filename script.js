let result = document.getElementById("result");
let searchBtn = document.getElementById("search-btn");

let cityRef = document.getElementById("city");
let key = "97a7772b3a92c0bd6de33c2432463f69";


//function to fetch weather details from api and dispaly them
let getWeather = () => {
  let cityValue = cityRef.value;

  //if the city field is empty
  if (cityValue.length == 0) {
    result.innerHTML = `<h3 class="msg">Please enter a city name<h3>`;
  } 

  //if the input field is not empty
  else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
   //clear the input
   cityRef.value ="";
    fetch(url)
      .then((resp) => resp.json())
      //if the city is valid 
      .then((data) => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.temp_min);
        console.log(data.main.temp_max);
        result.innerHTML = `
          <h2>${data.name}</h2>
          <h4 class ="weather">${data.weather[0].main}</h4>
          <h4 class="desc">${data.weather[0].description}</h4>
          <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png">
          <h1>${data.main.temp} &#176;</h1>
          <div class="temp-container">
            <div>
              <h4 class="title">min</h4>
              <h4 class="temp">${data.main.temp_min}</h4>
            </div>
            <div>
              <h4 class="title">max</h4>
              <h4 class="temp">${data.main.temp_max}</h4>
            </div>
          </div>
        `;
      })
      //if the city is Not valid
      .catch((error) => {
        console.error(error);
        result.innerHTML = `<h3 class="masg">City not found</h3>`;
      });
  }
};

searchBtn.addEventListener("click", getWeather);
window.addEventListener("load", getWeather);
