
//keys.js - figure out what credentidals to use
//don't commit this

if(process.env.NODE_ENV === 'production') {

	//production
	module.exports = require('./prod.js');
	
} else {

	//dev
	module.exports = require('./dev.js');
}
