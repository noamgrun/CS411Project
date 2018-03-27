const weather = require('weather');
const keys = require('../config/keys.js');


weather.use(
    new WeatherRequest(
        {

            apiKey: keys.openWeatherAPIKey,
            data : {
                units : "imperial",
                APPID : apiKey
            },
            weatherAPI : {
                url: "http://api.openweathermap.org/data/2.5/weather?q="
            },
            //api call: "http://api.openweathermap.org/data/2.5/weather?q="+ city;",

            JSON: getJSON(weatherAPI.url, data, showWeather);


        };

);


/*
$(document).ready( function(){
    $('.button').click( function(){
        var city = $('.search').val();
        if (city !== ''){
            var weatherAPI = + city;


            function showWeather(weatherReport) {
                document.getElementById("weather").innerHTML = ("It's " + weatherReport.main.temp + " degrees out today in " + city +"!")
                //alert("It's " + weatherReport.main.temp + " degrees out today in " + city +"!");
            };

            $('.search').val('');

            $.getJSON(weatherAPI, data, showWeather);

        }
        else{
            alert('You must enter a city name!');
        }

    });
});

*/