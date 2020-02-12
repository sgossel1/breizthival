var mongoose = require('mongoose');

var AssociationEvenementSchema = new mongoose.Schema(
  {
    association_id: {type: Number, required: true},
    evenement_id: {type: Number, required: true},
  },
  {
    collection: 'associationEvenements'
  }
);

module.exports = mongoose.model('AssociationEvenement', AssociationEvenementSchema);
