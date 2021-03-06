const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AdopcionSchema = new Schema({
  fechaAdopcion: {
    type: Date
  },
  status: {
    type: Boolean
  },
  mascota: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Mascota'
  },
  persona: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Persona'
  }
});

module.exports = mongoose.model("Adopcion", AdopcionSchema);