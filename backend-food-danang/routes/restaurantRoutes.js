const express = require("express");
const router = express.Router();

const {
  getRestaurants,
  searchRestaurant,
  createRestaurant,
} = require("../controllers/restaurantController");

const upload = require("../middleware/upload");

/* =========================
   GET ALL RESTAURANTS
========================= */

router.get("/", getRestaurants);

/* =========================
   SEARCH RESTAURANT
========================= */

router.get("/search", searchRestaurant);

/* =========================
   CREATE RESTAURANT
========================= */

router.post("/", upload.single("image"), createRestaurant);

module.exports = router;
