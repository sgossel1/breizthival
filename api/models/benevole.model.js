var mongoose = require('mongoose');

var BenevoleSchema = new mongoose.Schema(
  {
    user_id: {type: String, unique: true, required: true},
    fristname: {type: String, required: true},
    lastname: {type: String, required: true},
    city: {type: String, required: true},
    zip_code: {type: Number, required: true},
  },
  {
    collection: 'benevoles'
  }
);

module.exports = mongoose.model('Benevole', BenevoleSchema);
