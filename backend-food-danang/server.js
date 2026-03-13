const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const categoryRoutes = require("./routes/categoryRoutes");
const authRoutes = require("./routes/authRoutes");
const restaurantRoutes = require("./routes/restaurantRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const locationRoutes = require("./routes/locationRoutes");
const serviceRoutes = require("./routes/serviceRoutes");

const app = express();

connectDB();

// CORS phải đặt trên cùng
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

app.use("/uploads", express.static("uploads"));

// API ROUTES
app.use("/api/categories", categoryRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/locations", locationRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/restaurants", restaurantRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
