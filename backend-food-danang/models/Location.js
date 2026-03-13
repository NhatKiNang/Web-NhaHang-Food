const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  city: String,
  districts: [String],
});

module.exports = mongoose.model("Location", LocationSchema);
