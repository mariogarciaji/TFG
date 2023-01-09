var express = require('express');
var router = express.Router();
const passport = require("passport");

/* GET users listing. */


	router.get('/', (req, res) => { //por ahora no tenemos view de signup, por lo que no funciona el "get /"
		res.render('about', {user: req.user});
	});
	
module.exports = router;