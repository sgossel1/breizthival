var mongoose = require('mongoose');

var BenevoleOffreSchema = new mongoose.Schema(
  {
    offre_id: {type: Number, unique: true, required: true},
    benevole_id: {type: Number, unique: true, required: true},
    status: {type: String, required: true},
    disponibility: {type: String, required: true},
  },
  {
    collection: 'benevoleOffre'
  }
);

module.exports = mongoose.model('BenevoleOffre', BenevoleOffreSchema);
