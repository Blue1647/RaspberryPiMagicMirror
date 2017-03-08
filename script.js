var time = new Date().toString("dddd, MMMM d, yyyy h:mm:ss tt");
var condition;
$(document).ready(function () {
    console.log("Ready!");
    setInterval('setTime()', 500);
    getCurrWeather();
    setInterval('getCurrWeather()',3600000);

});


function setTime() {
    var d = new Date();
    var hh = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
    var dd = "AM";
    var h = hh;
    if (h >= 12) {
        h = hh - 12;
        dd = "PM";
    }
    if (h == 0) {
        h = 12;
    }
    m = m < 10 ? "0" + m : m;

    s = s < 10 ? "0" + s : s;

    /* if you want 2 digit hours:
    h = h<10?"0"+h:h; */

    var pattern = new RegExp("0?" + hh + ":" + m + ":" + s);

    var time = h + ":" + m + dd;

    document.getElementById('clock').innerHTML = time;
}

function getCurrWeather() {
    var weatherApiURL = "https://api.darksky.net/forecast/aef3bd29968e3347d9029119dff31391/41.858401,-87.660308";
    $.ajax({
        url: weatherApiURL,
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            condition = data.currently.icon;
            getIconForCondition(condition);
            var currTemp = Math.round(data.currently.temperature);
            document.getElementById('weather').innerHTML = currTemp + "&deg;F";
        }
    });
}


var skycons = new Skycons({ "color": "white" });
function getIconForCondition(condition) {
    switch (condition) {
        case "clear-day":
            skycons.add("icon", Skycons.CLEAR_DAY);
            break;
        case "clear-night":
            skycons.add("icon", Skycons.CLEAR_NIGHT);
            break;
        case "rain":
            skycons.add("icon", Skycons.RAIN);
            break;
        case "snow":
            skycons.add("icon", Skycons.SNOW);
            break;
        case "sleet":
            skycons.add("icon", Skycons.SLEET);
            break;
        case "wind":
            skycons.add("icon", Skycons.WIND);
            break;
        case "fog":
            skycons.add("icon", Skycons.FOG);
            break;
        case "cloudy":
            skycons.add("icon", Skycons.CLOUDY);
            break;
        case "partly-cloudy-day":
            skycons.add("icon", Skycons.PARTLY_CLOUDY_DAY);
            break;
        case "partly-cloudy-night":
            skycons.add("icon", Skycons.PARTLY_CLOUDY_NIGHT);
            break;
        case "hail":
            skycons.add("icon", Skycons.HAIL);
            break;
        case "thunderstorm":
            skycons.add("icon", Skycons.THUNDERSTORM);
            break;
        case "tornado":
            skycons.add("icon", Skycons.TORNADO);
            break;
    }
    skycons.play();
}

function getPun(){
    $.ajax({
        url: "https://getpuns.herokuapp.com/api/random",
        type: "GET",
        dataType: "jsonp",
        success: function (data) {
            console.log(data); 
            document.getElementById('pun').innerHTML = data.Pun;
        }
    });
}