const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys.js');
require('./models/User.js');
require('./models/Survey.js');
require('./services/passport.js');

//npm run dev
//try to connect to MongoDB
mongoose.connect(keys.mongoURI);

const app = express();

//middleware is hooked with .use
app.use(bodyParser.json());

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app);
require('./routes/billingRoutes.js')(app);
require('./routes/surveyRoutes.js')(app);

if(process.env.NODE_ENV === 'production') {

	//Express will serve up production assets
	//like our main.js file, or main.css file
	app.use(express.static('client/build'));

	//Express will serve up the index.html file
	//if it does not recognizes the route
	const path = require('path');
	app.get('*', (req, res) => {

		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//npm run dev
//https://pure-cliffs-51906.herokuapp.com/ | https://git.heroku.com/pure-cliffs-51906.git