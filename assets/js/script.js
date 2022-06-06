
// CallBack Function
let gotPosition = function(pos) {
    let lat  = pos.coords.latitude;
    let long = pos.coords.longitude;

    getForecast(lat, long)
}
// API Function
let getForecast = function(lat, long) {
    // Personal API key 
    // let myKey = "63a5040ffb4562d7a4681117de3b9d0c"
    //                   api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=63a5040ffb4562d7a4681117de3b9d0c
    let url   = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&long=" + long + "&exclude=current,minutely,hourly&APPID=63a5040ffb4562d7a4681117de3b9d0c" 
    getWeatherText(url);
    console.log(url)

}

// Wait for Data to arrive
async function getWeatherText(url) {
    // Fetch weather data/awaiting response before the signs that results to the weatherObject
    let weatherObject = await fetch(url)

    // extracts only the relevant  text information 
    let getWeatherText = await weatherObject.text()
    parseWeather(weatherText);
}



let parseWeather = function(weatherText) {
    
    let weatherJSON = JSON.parse(weatherText);
    // Pra cada nó na API de clima temos que fazer um loop passando em cada dia da semana
    let dailyForecast = weatherJSON.daily;

    // figuring out what day of the week we are
    for (x = 0; x < dailyForecast.length; x++) {
        let day = dailyForecast[x];
        let today = new Date().getDay() + x;

        // what day oof the week is node Zero?
        if (today > 6) {
            today = today - 7;
        }

        let dayOfWeek   = getDayOfWeek(today); // we pass it a 0-7 value
        let description = day.weather[0].description;
        let icon        = day.weather[0].icon;
        let sunrise     = timestampToTime(day.sunrise);
        let sunset      = timestampToTime(day.sunset);
        let highTemp    = kToF(day.temp.max);
        let lowTemp     = kToF(day.temp.min);
        let humidity    = day.humidity;
        let windSpeed   = day.wind_speed;
        let WindGust    = day.wind_gust;
        displayWeatherDay(dayOfWeek, description, icon, sunrise, sunset, highTemp, lowTemp, humidity, windSpeed, WindGust)
    }

}

let displayWeatherDay = function(dayOfWeek, description, icon, sunrise, sunset, highTemp, lowTemp, humidity, windSpeed, WindGust) {
    let out = "<div class='dayCard'><img src='https://openweathermap.org/img/wn/" + icon + ".png' />"
    out += "<h2>" + dayOfWeek + "</h2>";
    out += "<h3>" + description + "</h3>";
    out += "<p>Sunrise: " + sunrise + "</p>"
    out += "<p>Sunset: " + sunset + "</p>"
    out += "<p>High Temperature: " + highTemp + "</p>"
    out += "<p>Low Temperature: " + lowTemp + "</p>"
    out += "<p>Humidity: " + humidity + "</p>"
    out += "<p>Wind Speed: " + Math.round(windSpeed) + " with gusts up to " + Math.round(WindGust) + "</p></div>"
    
    document.getElementById("forecast").innerHTML += out;
}

let getDayOfWeek = function(dayNum) {
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return (weekday[dayNum]);
}

let kToF = function(kelvinTemp) {
    const celsius = kelvinTemp - 273;
    // const fahrenheit = Math.floor(celsius * (9 / 5) + 32);
    return celsius
}
let timestampToTime = function(timeStamp) {
    let date    = new Date(timeStamp * 1000)
    let hours   = date.getHours();
    let minutes = "";
    if (date.getMinutes() < 10) {
        minutes = "0" + date.getMinutes();
    } else {
        minutes = date.getMinutes();
    }
    return hours + ":" + minutes
}

navigator.geolocation.getCurrentPosition(gotPosition);

