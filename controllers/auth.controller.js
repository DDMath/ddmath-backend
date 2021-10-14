const jwt = require("jsonwebtoken");
const createError = require("http-errors");

const User = require("../models/User");

exports.login = async function (req, res, next) {
  try {
    const { email, name } = req.body;
    const currentUser = await User.findOne({ email });

    if (currentUser) {
      res.json({
        code: 200,
        message: "login success",
        data: {
          accessToken: jwt.sign({ id: currentUser._id }, process.env.JWT_SECRET, {
            expiresIn: "7D",
          }),
          user: currentUser,
        },
      });
    } else {
      const newUser = await User.create({
        email,
        name,
      });

      res.json({
        code: 200,
        message: "login success",
        data: {
          accessToken: jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: "6H",
          }),
          user: newUser,
        },
      });
    }
  } catch (err) {
    next(createError(500, err));
  }
};
