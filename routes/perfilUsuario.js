var express = require('express');
var router = express.Router();
const passport = require("passport");


var o2x = require('object-to-xml');
require('../models/favoritos');
require('../models/comentarios');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
Favorito = mongoose.model('Favorito');
Comentario = mongoose.model('Comentario');
///////////////////////////////////////////////////////////////////////////////////////////
router.get('/',function(req, res, next) {
	Favorito.find(function (err, favoritos) {
  if (err) return next(err);
  res.render('perfilUsuario', { favoritos ,user: req.user});
  
});  
});
///////////////////////////////////////////////////////////////////////////////////////////

module.exports = router;