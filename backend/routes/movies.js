const router = require("express").Router();

const { getMovies, createMovie, getSingleMovie, updateMovie, deleteMovie, randomMovie } = require("../controllers/movieController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.get("/movies", getMovies);
router.post("/admin/movie/new", isAuthenticatedUser, authorizeRoles(), createMovie);
router.get("/admin/movie/:id", isAuthenticatedUser, getSingleMovie);
router.put("/admin/movie/:id", isAuthenticatedUser, authorizeRoles(), updateMovie);
router.delete("/admin/movie/:id", isAuthenticatedUser, authorizeRoles(), deleteMovie);
router.get("/admin/randomMovie", isAuthenticatedUser, randomMovie);

module.exports = router;
