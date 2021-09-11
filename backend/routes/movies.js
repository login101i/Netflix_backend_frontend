const router = require("express").Router();

const { getMovies, createMovie, getSingleMovie, updateMovie, deleteMovie } = require("../controllers/movieController");

const { isAuthenticatedUser } = require("../middlewares/auth");

router.get("/movies", isAuthenticatedUser, getMovies);
router.post("/admin/movie/new", createMovie);
router.get("/movie/:id", getSingleMovie);
router.put("/admin/movie/:id", updateMovie);
router.delete("/admin/movie/:id", deleteMovie);

module.exports = router;
