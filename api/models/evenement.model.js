var mongoose = require('mongoose');

var EvenementSchema = new mongoose.Schema(
  {
    user_id: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    organisateur: {type: String, required: true},
    phone: {type: Number, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    zip_code: {type: Number, required: true},
    create_date: {type: Date, required: true},
    start_date: {type: Date, required: true},
    end_date: {type: Date, required: true},
    website: {type: String, required: true},
    billettrie: {type: String, required: true},
    description: {type: String, required: true},
    video: {
      url: String,
      description: String
    },
    img: {
      name: String,
      data: String
    },
    img_plan: {
      name: String,
      data: String
    }
  },
  {
    collection: 'evenements'
  }
);

module.exports = mongoose.model('Evenement', EvenementSchema);
