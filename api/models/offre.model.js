var mongoose = require('mongoose');

var OffreSchema = new mongoose.Schema(
  {
    site_id: {type: Number, unique: true, required: true},
    name: {type: String, required: true},
    description: {type: String, required: true},
    place_number: {type: Number, required: true},
    place_restante: {type: Number, required: true},
    start_data: {type: Date, required: true},
    end_data: {type: Date, required: true},
    status: {type: String, required: true},
  },
  {
    collection: 'offres'
  }
);

module.exports = mongoose.model('Offre', OffreSchema);
