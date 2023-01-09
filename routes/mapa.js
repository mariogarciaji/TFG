var express = require('express');
var router = express.Router();
const passport = require("passport");
const app= express();

/* GET users listing. */


	router.get('/', (req, res) => { //por ahora no tenemos view de signup, por lo que no funciona el "get /"
		res.render('mapa', {user: req.user});
	});
	///////////////////////////////////////////////////////////////////////////////////////////
	const request = require('request');

	const options = {
	  url: 'https://openapi.emtmadrid.es/v1/transport/bicimad/stations/',
	  headers: {
		'accessToken': '8dc36918-bcbb-49f6-b3b9-c4c8fb1488b3'
	  }
	};
	
	app.get('/estaciones', (req, res) => {
	  request.get(options, (error, response, body) => {
		if (error) {
		  console.error(error);
		  return res.sendStatus(500);
		}
	
		const data = JSON.parse(body);
		res.send(data);
	  });
	});
	
///////////////////////////////////////////////////////////////////////////////////////////
	
module.exports = router;