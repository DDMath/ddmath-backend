const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const createError = require("http-errors");
const app = express();

const initLoader = require("./loaders");
const connectMongoDB = require("./loaders/db");

initLoader(app);
connectMongoDB();

app.use(require("./routes"));

app.use(function (req, res, next) {
  next(createError(404));
});

app.use((err, req, res) => {
  console.error(err);

  err.status
    ? res.status(err.status).json({ result: "fail", message: err.message })
    : res.status(500).json({ result: "fail", message: "Internal server error" });
});

module.exports = app;
