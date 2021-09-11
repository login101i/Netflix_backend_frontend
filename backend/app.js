const express = require("express");

const app = express();
app.use(express.json());

const errorMiddleware = require('./middlewares/errors')


const movies = require("./routes/movies");

app.use("/api/v1", movies);

// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app;
