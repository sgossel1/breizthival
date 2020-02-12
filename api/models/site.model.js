var mongoose = require('mongoose');

var SiteSchema = new mongoose.Schema(
  {
    evenement_id: {type: Number, unique: true, required: true},
    name: {type: String, required: true},
    type: {type: String, required: true},
  },
  {
    collection: 'sites'
  }
);

module.exports = mongoose.model('Site', SiteSchema);
