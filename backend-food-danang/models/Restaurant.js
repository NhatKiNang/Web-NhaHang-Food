const mongoose = require("mongoose");

const RestaurantSchema = new mongoose.Schema({
  name: String,
  city: String,
  district: String,
  category: String,
  service: String,
  price_range: Number,
  address: String,
  description: String,
  image: String,
  rating: Number,
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
