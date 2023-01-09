var express = require('express');
var router = express.Router();
var o2x = require('object-to-xml');
require('../models/favoritos');
require('../models/comentarios');
var mongoose = require('mongoose');
var ObjectId = mongoose.Types.ObjectId;
Favorito = mongoose.model('Favorito');
Comentario = mongoose.model('Comentario');


function isLoggedIn (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
}
/* GET home page. */

router.get('/',function(req, res, next) {
	Favorito.find(function (err, favoritos) {
  if (err) return next(err);
  res.render('index', { favoritos ,user: req.user});
  
});  
});

router.get('/logout',function(req,res,next){
  req.logout(function(err){
    if(err){return next(err);}
    res.redirect('/');
  });
});

///////////////////////////////////////////////////////////////////////////////////////////
/* POST home page. */



router.post('/favoritos', function(req, res, next) {
  var nuevoFavorito = new Favorito({ "Usuario": req.body.Usuario, "Comentario": req.body.Comentario});
  nuevoFavorito.save(function(err) {
      if (err) console.log(err);
      res.redirect('/perfilUsuario'); 
  });    
});
router.post('/comentarios', function(req, res, next) {
  var nuevoComentario = new Comentario({ "Comentario": req.body.Comentario, "Autor": req.body.Autor});
  nuevoComentario.save(function(err) {
      if (err) console.log(err);
      res.redirect('/perfilUsuario'); 
  });    
});

/**Eliminar Favorito */
router.post('/favoritos/:ID', function(req, res, next) { 
  var favoritoID = req.params.ID;
  Favorito.remove({ '_id': ObjectId(favoritoID) }, function(err) {
      if (err) return next(err);
      res.redirect('/perfilUsuario');       
  });
});

//////////////////////////////////////////////////////////////////////////////////////////
/**Transformar en JSON */
router.get('/json', function(req, res, next) {
  Favorito.find(function(err, favoritos) {
      if (err) return next(err);
      res.json(favoritos);
  });
});

/**Transformar en XML */
router.get('/xml', function(req, res, next) {
  Favorito.find(function(err, favoritos) {
  //Pasando a string y luego de nuevo a JSON nos evitamos errores de conversion posteriores con o2x
      FavoritosFixed = JSON.parse(JSON.stringify(favoritos));
      if (err) return next(err);
      res.set('Content-Type', 'text/xml');
      res.send(o2x({
          '?xml version="1.0" encoding="utf-8"?': null,
          favoritos: { "favorito": FavoritosFixed }
      }));
  });
});

module.exports = router;
