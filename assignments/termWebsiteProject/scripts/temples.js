//var weatherURL = 'https://www.openweathermap.org/weather?' + cityID;


var poaRequest = new XMLHttpRequest();

poaRequest.open('GET', 'json/portoalegre.json', true);
poaRequest.responseType = 'json';
poaRequest.send();

poaRequest.onload = function () {
    var templeData = poaRequest.response;


    var closureUL = document.createElement("ul");
    var closureLI;

    for (var i = 0; i < templeData.closures.length; i++) {
        closureLI = document.createElement("li");
        closureLI.innerHTML = templeData.closures[i].start +
            ' to ' + templeData.closures[i].end;
            closureUL.appendChild(closureLI);
    }

    document.getElementById("poaClosures").appendChild(closureUL);
}

var laRequest = new XMLHttpRequest();

laRequest.open('GET', 'json/losangeles.json', true);
laRequest.responseType = 'json';
laRequest.send();

laRequest.onload = function () {
    var templeData = laRequest.response;


    var closureUL = document.createElement("ul");
    var closureLI;

    for (var i = 0; i < templeData.closures.length; i++) {
        closureLI = document.createElement("li");
        closureLI.innerHTML = templeData.closures[i].start +
            ' to ' + templeData.closures[i].end;
            closureUL.appendChild(closureLI);
    }

    document.getElementById("laClosures").appendChild(closureUL);
}

var monRequest = new XMLHttpRequest();

monRequest.open('GET', 'json/montevideo.json', true);
monRequest.responseType = 'json';
monRequest.send();

monRequest.onload = function () {
    var templeData = monRequest.response;


    var closureUL = document.createElement("ul");
    var closureLI;

    for (var i = 0; i < templeData.closures.length; i++) {
        closureLI = document.createElement("li");
        closureLI.innerHTML = templeData.closures[i].start +
            ' to ' + templeData.closures[i].end;
            closureUL.appendChild(closureLI);
    }

    document.getElementById("monClosures").appendChild(closureUL);
}

var stRequest = new XMLHttpRequest();

stRequest.open('GET', 'json/stgeorge.json', true);
stRequest.responseType = 'json';
stRequest.send();

stRequest.onload = function () {
    var templeData = stRequest.response;


    var closureUL = document.createElement("ul");
    var closureLI;

    for (var i = 0; i < templeData.closures.length; i++) {
        closureLI = document.createElement("li");
        closureLI.innerHTML = templeData.closures[i].start +
            ' to ' + templeData.closures[i].end;
            closureUL.appendChild(closureLI);
    }

    document.getElementById("stClosures").appendChild(closureUL);
}

