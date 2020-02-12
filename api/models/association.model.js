var mongoose = require('mongoose');

var AssociationSchema = new mongoose.Schema(
  {
    user_id: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    president_name: {type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    zip_code: {type: Number, required: true},
  },
  {
    collection: 'associations'
  }
);

module.exports = mongoose.model('Association', AssociationSchema);
