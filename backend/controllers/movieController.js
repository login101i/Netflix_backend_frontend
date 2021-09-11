exports.getMovies = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "This is all movies from DB",
  });
};
