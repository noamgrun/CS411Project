const mongoose = require('mongoose');
const keys = require('../config/keys.js');


module.exports = app => {
    const  OWKey = keys.weatherKey,
	app.get('/api/weather', (req, res) => {
 	        var city1 = this.state.input;
            var url= 'http://api.openweathermap.org/data/2.5/weather?q={city1}&units=metric&APPID='+ OWKey;
            Request.get(url).then((response) => {
                this.setState({
                    report: response.body.Search;
                    console.log(response.main.temp);
                });
            });

		
	});
};