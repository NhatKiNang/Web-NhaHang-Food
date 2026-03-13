const router = require("express").Router();
const Review = require("../models/Review");

// ADD REVIEW
router.post("/", async (req, res) => {
  try {
    const review = new Review(req.body);

    await review.save();

    res.json({
      message: "Review added",
      review,
    });
  } catch (error) {
    res.status(500).json({
      message: "Add review failed",
    });
  }
});

// GET REVIEWS BY RESTAURANT
router.get("/:restaurantId", async (req, res) => {
  try {
    const reviews = await Review.find({
      restaurantId: req.params.restaurantId,
    }).populate("userId");

    res.json(reviews);
  } catch (error) {
    res.status(500).json({
      message: "Get reviews failed",
    });
  }
});

module.exports = router;
