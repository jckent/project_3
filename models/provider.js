const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const providerSchema = new Schema({
  name: {type: String, required: true},
  specialty: {type: String, required: true},
  url: {type: String, required: true},
  address: {type: String, required: true},
  insurances: {type: String, required: true},
  phone: {type: Number, required: true},
  newPatient: {type: Boolean, required:true},
  dateAdded: { type: Date, default: Date.now }
});

const Provider = mongoose.model("Provider", providerSchema);

module.exports = Provider;