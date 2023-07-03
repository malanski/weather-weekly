#  Weather weekly App - Documentation
Open Weather Map API consuming

![JavaScript](https://img.shields.io/badge/-JavaScript-0e3582?style=for-the-badge&logo=javascript&labelColor=1f004e)&nbsp;
![HTML](https://img.shields.io/badge/-HTML-0e3582?style=for-the-badge&logo=html5&labelColor=1f004e)&nbsp;
![CSS](https://img.shields.io/badge/-CSS-0e3582?style=for-the-badge&logo=CSS3&logoColor=1572B6&labelColor=1f004e)&nbsp;

## Project Overview

The Weather weekly App is a web application that utilizes the OpenWeatherMap API to fetch weather data based on the user's geolocation. The app displays daily weather forecasts for the current location, including information such as day of the week, weather description, icon representation, sunrise, sunset, high and low temperatures, humidity, wind speed, and wind gusts.

## How the App Works

1. `gotPosition` Function:
   - This is a callback function that is triggered when the user's geolocation is successfully obtained.
   - It extracts the latitude and longitude coordinates from the geolocation data and calls the `getForecast` function with these coordinates.

2. `getForecast` Function:
   - This function takes latitude and longitude as parameters and constructs the API URL to fetch weather data from the OpenWeatherMap API.
   - The API URL includes the latitude, longitude, and an API key for authentication.
   - It then calls the `getWeatherText` function passing the constructed URL.

3. `getWeatherText` Function:
   - This function is an async function that fetches weather data from the API using the `fetch` function.
   - The response from the API is extracted as text using the `text()` method, and the result is passed to the `parseWeather` function.

4. `parseWeather` Function:
   - This function takes the weather data in text format, converts it to a JSON object using `JSON.parse`, and extracts the daily forecast data.
   - It then iterates through the daily forecast data, calculates the day of the week, and calls the `displayWeatherDay` function for each day to display the weather information.

5. `displayWeatherDay` Function:
   - This function takes weather information as parameters and generates an HTML structure to display the daily weather forecast for each day.
   - The weather icon is fetched from the OpenWeatherMap API using the provided icon code.
   - The generated HTML structure is appended to the element with the ID "forecast" on the webpage.

6. Helper Functions:
   - `getDayOfWeek`: This function converts a numeric day of the week (0-6) to its corresponding name (Sunday-Saturday).
   - `kToF`: This function converts temperature from Kelvin to Celsius.
   - `timestampToTime`: This function converts a Unix timestamp to a readable time format (HH:mm).

7. Geolocation:
   - The app uses the `navigator.geolocation.getCurrentPosition` method to obtain the user's geolocation coordinates.
   - The user's location data is passed to the `gotPosition` function to initiate the weather data fetching process.

## Instructions to Use the App

1. Allow the web browser to access your geolocation when prompted.
2. The app will use your geolocation to fetch the weather forecast for your current location.
3. The daily weather forecast for the next few days will be displayed on the webpage.

## Educational Purpose Disclaimer

This project is an experimental weather app developed for educational purposes only. It utilizes the OpenWeatherMap API to fetch weather data and provides a basic display of the forecast. It does not handle advanced features or error handling for production use. Users should not rely on this app for critical weather information.

## Resources

1. OpenWeatherMap API: https://openweathermap.org/api

## License

This project is open-source and uses the MIT License. Please refer to the LICENSE file for more details.

---

With this documentation, developers can understand how the   Weather App functions, its flow, how it fetches and displays weather data, and its use of geolocation. The app is intended for educational purposes only and may not have the robustness and error handling necessary for production use. Developers can refer to this documentation to learn about the app's functionality and how it interacts with the OpenWeatherMap API.
