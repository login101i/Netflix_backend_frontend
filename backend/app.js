const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

const errorMiddleware = require("./middlewares/errors");

const movies = require("./routes/movies");
const auth = require("./routes/auth");

app.use("/api/v1", movies);
app.use("/api/v1", auth);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
