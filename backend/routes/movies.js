const router = require("express").Router();

const { getMovies, createMovie, getSingleMovie, updateMovie, deleteMovie } = require("../controllers/movieController");

const { isAuthenticatedUser, authorizeRoles } = require("../middlewares/auth");

router.get("/movies", isAuthenticatedUser, getMovies);
router.post("/admin/movie/new", authorizeRoles("admin"), createMovie);
router.get("/movie/:id", getSingleMovie);
router.put("/admin/movie/:id", authorizeRoles("admin"), updateMovie);
router.delete("/admin/movie/:id", authorizeRoles("admin"), deleteMovie);

module.exports = router;
