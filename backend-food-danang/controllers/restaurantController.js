const Restaurant = require("../models/Restaurant");

// GET ALL RESTAURANTS
exports.getRestaurants = async (req, res) => {
  try {
    const data = await Restaurant.find().sort({ createdAt: -1 });

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

// GET RESTAURANT BY ID
exports.getRestaurantById = async (req, res) => {
  try {
    const data = await Restaurant.findById(req.params.id);

    if (!data) {
      return res.status(404).json({
        message: "Restaurant not found",
      });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Error getting restaurant",
    });
  }
};

// SEARCH RESTAURANT
exports.searchRestaurant = async (req, res) => {
  try {
    const { city, district, category, keyword, minPrice, maxPrice } = req.query;

    let filter = {};

    if (city) {
      filter.city = city;
    }

    if (district) {
      filter.district = district;
    }

    if (category) {
      filter.category = category;
    }

    // search theo tên
    if (keyword) {
      filter.name = { $regex: keyword, $options: "i" };
    }

    // filter price
    if (minPrice || maxPrice) {
      filter.price_range = {};

      if (minPrice) {
        filter.price_range.$gte = Number(minPrice);
      }

      if (maxPrice) {
        filter.price_range.$lte = Number(maxPrice);
      }
    }

    const data = await Restaurant.find(filter);

    res.json(data);
  } catch (error) {
    res.status(500).json({
      message: "Search error",
    });
  }
};

// CREATE RESTAURANT
exports.createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant({
      ...req.body,
      image: req.file ? req.file.filename : null,
    });

    await restaurant.save();

    res.json({
      message: "Restaurant added successfully",
      restaurant,
    });
  } catch (error) {
    res.status(500).json({
      message: "Create restaurant failed",
    });
  }
};

// UPDATE RESTAURANT
exports.updateRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );

    res.json(restaurant);
  } catch (error) {
    res.status(500).json({
      message: "Update failed",
    });
  }
};

// DELETE RESTAURANT
exports.deleteRestaurant = async (req, res) => {
  try {
    await Restaurant.findByIdAndDelete(req.params.id);

    res.json({
      message: "Restaurant deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: "Delete failed",
    });
  }
};
