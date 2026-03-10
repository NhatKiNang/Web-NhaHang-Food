const router = require("express").Router();
const Review = require("../models/Review");

router.post("/", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.json({ message: "Review added" });
});

module.exports = router;
