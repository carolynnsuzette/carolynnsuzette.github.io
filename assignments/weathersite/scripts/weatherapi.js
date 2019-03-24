var apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=5e2de158e671da2ed15e22d6f961f4e0&units=imperial';

var weatherRequest = new XMLHttpRequest();

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.responseType = 'json';
weatherRequest.send();

weatherRequest.onload = function () {
    var weatherData = weatherRequest.response;

    console.log(weatherData);

    document.getElementById("current-temp").innerHTML =
        weatherData.main.temp;


        
}