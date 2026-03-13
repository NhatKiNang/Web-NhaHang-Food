const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  rating: Number,
  comment: String
});

module.exports = mongoose.model("Review", reviewSchema);