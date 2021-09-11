const express = require("express");

const app = express();
app.use(express.json());

const movies = require("./routes/movies");

app.use("/api/v1", movies);

module.exports = app;
