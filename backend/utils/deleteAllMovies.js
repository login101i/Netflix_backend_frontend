const Movie = require("../models/Movie");
const dotenv = require("dotenv");
var colors = require("colors");


const connectDatabase = require("../config/connectDataBase");

// Setting dotenv file
dotenv.config({ path: "backend/config/config.env" });

connectDatabase();

const deleteAllMovies = async () => {
  try {
    await Movie.deleteMany();
    console.log("Usunięto wszystkie filmy z bazy danych".red)
  } catch (err) {
    console.log(error.message);
    process.exit();
  }
};

deleteAllMovies();
