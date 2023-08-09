const mongoose = require('mongoose');

const listaDesejosSchema = new mongoose.Schema({
  idGrupo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Grupo',
    required: true
  },
  NomeGrupo: {
    type: String,
    required: true
  },
  idParticipante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Participante',
    required: true
  },
  NomeParticipante: {
    type: String,
    required: true
  },
  listaItens: {
    type: [String],
    default: []
  }
});

module.exports = mongoose.model('ListaDesejos', listaDesejosSchema);