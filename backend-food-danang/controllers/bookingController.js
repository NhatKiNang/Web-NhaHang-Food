const db = require("../config/db");

exports.createFood = (req, res) => {
  const { name, price, image, restaurant_id } = req.body;

  const sql = `
  INSERT INTO foods (name,price,image,restaurant_id)
  VALUES (?,?,?,?)
  `;

  db.query(sql, [name, price, image, restaurant_id], (err, result) => {
    if (err) return res.send(err);

    res.send("Food created");
  });
};

exports.getFoods = (req, res) => {
  const sql = "SELECT * FROM foods";

  db.query(sql, (err, result) => {
    if (err) return res.send(err);

    res.send(result);
  });
};
