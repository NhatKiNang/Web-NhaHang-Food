const express = require("express");

const {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  searchRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantController");

const router = express.Router();

// GET ALL RESTAURANTS
router.get("/", getRestaurants);

// SEARCH RESTAURANT
router.get("/search", searchRestaurant);

// GET RESTAURANT DETAIL
router.get("/:id", getRestaurantById);

// CREATE RESTAURANT
router.post("/", createRestaurant);

// UPDATE RESTAURANT
router.put("/:id", updateRestaurant);

// DELETE RESTAURANT
router.delete("/:id", deleteRestaurant);

module.exports = router;
