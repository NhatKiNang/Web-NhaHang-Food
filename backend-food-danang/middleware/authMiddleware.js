const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

module.exports = function (req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "Chưa đăng nhập",
    });
  }

  try {
    const decoded = jwt.verify(token, SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    res.status(401).json({
      message: "Token không hợp lệ",
    });
  }
};
