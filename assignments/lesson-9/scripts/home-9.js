var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;

    for (var i = 0; i < townData.towns.length; i++) {

        if (i === 0 || i === 2 || i === 3 || i === 6) {
            continue;
        }
    
        var article = document.createElement('article');
        
        var h1 = document.createElement('h1');
        h1.textContent = townData.towns[i].name;
    
        var h2 = document.createElement('h2');
        h2.textContent = townData.towns[i].motto;

        var yearFounded = document.createElement('p');
        yearFounded.textContent = "Year Founded: " + townData.towns[i].yearFounded;

        var currentPopulation = document.createElement('p');
        currentPopulation.textContent = "Current Population: " + townData.towns[i].currentPopulation;

        var averageRainfall = document.createElement('p');
        averageRainfall.textContent = "Average Rainfall: " + townData.towns[i].averageRainfall;

        var averageRainfall = document.createElement('p');
        averageRainfall.textContent = "Average Rainfall: " + townData.towns[i].averageRainfall;

    
        var img = document.createElement('img');
    
        if (townData.towns[i].name === 'Fish Haven') {
            img.setAttribute("src", "images/home-1.jpg");
        }   else if (townData.towns[i].name === 'Preston') {
            img.setAttribute("src", "images/home-2.jpg");
        }   else if (townData.towns[i].name === 'Soda Springs') {
            img.setAttribute("src", "images/home-3.jpg");
        }
    
        article.appendChild(h1);
        article.appendChild(h2);
        article.appendChild(yearFounded);
        article.appendChild(currentPopulation);
        article.appendChild(averageRainfall);


        article.appendChild(img);
        document.getElementById("section").appendChild(article);
    }   
}
