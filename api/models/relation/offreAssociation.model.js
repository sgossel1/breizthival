var mongoose = require('mongoose');

var OffreAssociationSchema = new mongoose.Schema(
  {
    offre_id: {type: Number, unique: true, required: true},
    association_id: {type: Number, unique: true, required: true},
  },
  {
    collection: 'offreAssociations'
  }
);

module.exports = mongoose.model('OffreAssociation', OffreAssociationSchema);
