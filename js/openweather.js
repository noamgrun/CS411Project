$(document).ready( function(){
    $('.button').click( function(){
        var city = $('.search').val();
        if (city !== ''){
            var apiKey = 'f9d25b59b1dfb4abe296ed8ec157deb7';
            var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?q="+ city;
            var data = {
                units : "imperial",
                APPID : apiKey
            };

            function showWeather(weatherReport) {
                var jsonStr = JSON.stringify(weatherReport);
                document.getElementById('json').innerHTML = jsonStr;
                alert("It's " + weatherReport.main.temp + " degrees out today in " + city +"!");
            };

            $('.search').val('');

            $.getJSON(weatherAPI, data, showWeather);

        }
        else{
            alert('You must enter a city name!');
        }

    });
});