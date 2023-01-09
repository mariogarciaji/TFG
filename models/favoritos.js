var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var favoritoSchema = new Schema({
  Usuario: {type: String, required: true, max: 100},
  Comentario: {type: String, required: true, max: 100},

});

favoritoSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });
mongoose.model('Favorito', favoritoSchema);