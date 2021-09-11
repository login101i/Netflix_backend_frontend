const Movie = require("../models/Movie");

exports.getMovies = async (req, res, next) => {
  const movies = await Movie.find();

  const moviesCount = await Movie.countDocuments();

  res.status(200).json({
    success: true,
    moviesCount,
    message: "This is all movies from DB",
    movies,
  });
};

exports.createMovie = async (req, res, next) => {
  console.log(req.body);
  try {
    const newMovie = await Movie.create(req.body);

    res.status(201).json({
      success: true,
      message: "movie created",
      movie: newMovie,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

// Get single moive details   =>   /api/v1/movies/:id
exports.getSingleMovie = async (req, res, next) => {
  const movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(500).json({
      message: "Brak filmu o takim id.",
    });
  }

  res.status(200).json({
    success: true,
    movie,
  });
};

// Update Movie   =>   /api/v1/admin/movie/:id
exports.updateMovie = async (req, res, next) => {
  let movie = await Movie.findById(req.params.id);

  if (!movie) {
    res.status(404).json({
      success: false,
      message: "Brak filmu o takim id.",
    });
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
};



// Delete Movie   =>   /api/v1/admin/movie/:id
exports.deleteMovie = async (req, res, next) => {

    const movie = await Movie.findById(req.params.id);

     if (!movie) {
       res.status(404).json({
         success: false,
         message: "Brak filmu o takim id.",
       });
     }

   

    await movie.remove();

    res.status(200).json({
        success: true,
        message: 'Movie is deleted.'
    })

}