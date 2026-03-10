const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET = "mysecretkey";

/* ======================
REGISTER
====================== */

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      role: "user", // mặc định user
    });

    await newUser.save();

    res.json({
      message: "Đăng ký thành công",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

/* ======================
LOGIN
====================== */

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Sai mật khẩu",
      });
    }

    // tạo token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      SECRET,
      { expiresIn: "7d" },
    );

    // trả dữ liệu an toàn
    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json(error);
  }
};
