const router = require("express").Router();
const Booking = require("../models/Booking");

// CREATE BOOKING
router.post("/", async (req, res) => {
  try {
    const booking = new Booking(req.body);

    await booking.save();

    res.json({
      message: "Booking success",
      booking,
    });
  } catch (error) {
    res.status(500).json({
      message: "Booking failed",
    });
  }
});

module.exports = router;
