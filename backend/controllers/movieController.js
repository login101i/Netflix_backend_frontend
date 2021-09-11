const Movie = require("../models/Movie");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const APIFeatures = require("../utils/apiFeatures");

exports.getMovies = catchAsyncErrors(async (req, res, next) => {

  const movieCount=await Movie.countDocuments()
   const resPerPage = 1;

  const apiFeatures = new APIFeatures(Movie.find(), req.query)
  .search()
  .filter()
  .pagination(resPerPage)

  let movies = await apiFeatures.query;
      let filteredMoviesCount = movies.length;


  res.status(200).json({
    success: true,
    movieCount,
    filteredMoviesCount,
    message: "This is all movies from DB",
    movies,
  });
});

exports.createMovie = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body);

  const newMovie = await Movie.create(req.body);

  res.status(201).json({
    success: true,
    message: "movie created",
    movie: newMovie,
  });
});

// Get single movie details   =>   /api/v1/movies/:id
exports.getSingleMovie = catchAsyncErrors(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  // if (!movie) {
  //   res.status(500).json({
  //     message: "Brak filmu o takim id.",
  //   });
  // }
  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }

  res.status(200).json({
    success: true,
    movie,
  });
});

// Update Movie   =>   /api/v1/admin/movie/:id
exports.updateMovie = catchAsyncErrors(async (req, res, next) => {
  let movie = await Movie.findById(req.params.id);

  // if (!movie) {
  //   res.status(404).json({
  //     success: false,
  //     message: "Brak filmu o takim id.",
  //   });
  // }
  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }

  movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Uaktualniono film",
    movie,
  });
});

// Delete Movie   =>   /api/v1/admin/movie/:id
exports.deleteMovie = catchAsyncErrors(async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    return next(new ErrorHandler("Movie not found", 404));
  }

  await movie.remove();

  res.status(200).json({
    success: true,
    message: "Movie is deleted.",
  });
});
