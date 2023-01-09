var express = require('express');
var router = express.Router();
const passport = require("passport");

/* GET users listing. */
	
	// login view
	router.get('/', (req, res) => {
		res.render('login', {message: req.flash('loginMessage'),user: req.user});
	});

	router.post('/', passport.authenticate('local-login', {
		successRedirect: '/perfilUsuario',
		failureRedirect: '/login',
		failureFlash: true
	}));

module.exports = router;