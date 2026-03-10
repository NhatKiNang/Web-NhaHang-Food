const Restaurant = require("../models/Restaurant");

exports.getRestaurants = async (req, res) => {
  const data = await Restaurant.find();
  res.json(data);
};

exports.searchRestaurant = async (req, res) => {
  const { city, category, minPrice, maxPrice } = req.query;

  let filter = {};

  if (city) filter.city = city;
  if (category) filter.category = category;

  if (minPrice || maxPrice) {
    filter.price_range = {};
    if (minPrice) filter.price_range.$gte = Number(minPrice);
    if (maxPrice) filter.price_range.$lte = Number(maxPrice);
  }

  const data = await Restaurant.find(filter);

  res.json(data);
};

exports.createRestaurant = async (req, res) => {
  const restaurant = new Restaurant({
    ...req.body,
    image: req.file?.filename,
  });

  await restaurant.save();

  res.json({ message: "Restaurant added" });
};
