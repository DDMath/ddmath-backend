const createError = require("http-errors");

const User = require("../models/User");

exports.getUserData = async function (req, res, next) {
  try {
    const currentUser = await User.findById(req.userId);

    if (!currentUser) {
      next(createError(401));
      return;
    }

    res.status(200).json({
      code: 200,
      message: "login success",
      data: { user: currentUser },
    });
  } catch (err) {
    next(createError(500, err));
  }
};

exports.updateFinalStageRecord = async function (req, res, next) {
  try {
    const { lastStage } = req.body;
    let stage = 0;

    switch (lastStage) {
      case "puzzle-game":
        stage = 1;
        break;
      case "link-game":
        stage = 2;
        break;
      case "shooting-game":
        stage = 3;
        break;
      default:
        stage = 0;
    }

    const user = await User.findOne({ _id: req.userId });

    if (user.lastStage < stage) {
      await User.findOneAndUpdate(req.userId, {
        lastStage: stage,
      });
    }

    res.json({ code: 200, message: "update success" });
  } catch (err) {
    next(createError(500, err));
  }
};
