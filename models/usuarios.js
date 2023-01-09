var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var Usuarioschema = new Schema({
  Nombre: {type: String, required: true, max: 100},
  Apellidos: {type: String, required: false, max: 100},
  Email: {type: String, required: false, max: 100},
});

Usuarioschema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });

mongoose.model('Usuario', Usuarioschema);