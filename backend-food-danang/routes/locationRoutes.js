const router = require("express").Router();
const Location = require("../models/Location");

router.get("/", async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

module.exports = router;
