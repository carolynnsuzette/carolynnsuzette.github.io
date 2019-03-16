var dayNames = new Array(7);
dayNames[0] = "Sun";
dayNames[1] = "Mon";
dayNames[2] = "Tue";
dayNames[3] = "Wed";
dayNames[4] = "Thur";
dayNames[5] = "Fri";
dayNames[6] = "Sat";

//weather
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

    document.getElementById("windSpeed").innerHTML =
        weatherData.wind.speed;

    document.getElementById("windChill").innerHTML =
        weatherData.wind.deg;
}


//forcast
var apiForcastString = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=5e2de158e671da2ed15e22d6f961f4e0&units=imperial';

var forcastRequest = new XMLHttpRequest();

forcastRequest.open('GET', apiForcastString, true);
forcastRequest.responseType = 'json';
forcastRequest.send();

forcastRequest.onload = function () {
    var forcastData = forcastRequest.response;

    console.log(forcastData);
    var iconStr = "http://openweathermap.org/img/w/"

    document.getElementById("day0").innerHTML = dayNames[new Date(forcastData.list[0].dt_txt).getDay()];
    document.getElementById("icon0").src = iconStr + forcastData.list[0].weather[0].icon + ".png";
    document.getElementById("temp0").innerHTML = forcastData.list[0].main.temp;

    document.getElementById("day1").innerHTML = dayNames[new Date(forcastData.list[8].dt_txt).getDay()];
    document.getElementById("icon1").src = iconStr + forcastData.list[8].weather[0].icon + ".png";
    document.getElementById("temp1").innerHTML = forcastData.list[8].main.temp;

    document.getElementById("day2").innerHTML = dayNames[new Date(forcastData.list[16].dt_txt).getDay()];
    document.getElementById("icon2").src = iconStr + forcastData.list[16].weather[0].icon + ".png";
    document.getElementById("temp2").innerHTML = forcastData.list[16].main.temp;

    document.getElementById("day3").innerHTML = dayNames[new Date(forcastData.list[24].dt_txt).getDay()];
    document.getElementById("icon3").src = iconStr + forcastData.list[24].weather[0].icon + ".png";
    document.getElementById("temp3").innerHTML = forcastData.list[24].main.temp;

    document.getElementById("day4").innerHTML = dayNames[new Date(forcastData.list[32].dt_txt).getDay()];
    document.getElementById("icon4").src = iconStr + forcastData.list[32].weather[0].icon + ".png";
    document.getElementById("temp4").innerHTML = forcastData.list[32].main.temp;

}