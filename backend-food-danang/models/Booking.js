const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  restaurant_id: { type: mongoose.Schema.Types.ObjectId, ref: "Restaurant" },
  booking_date: Date,
  people: Number
});

module.exports = mongoose.model("Booking", bookingSchema);