var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var comentarioSchema = new Schema({
  Comentario: {type: String, required: true, max: 100},
  Autor: {type: String, required: true, max: 100}
});

comentarioSchema.virtual('date')
  .get(function(){
    return this._id.getTimestamp();
  });
mongoose.model('Comentario', comentarioSchema);