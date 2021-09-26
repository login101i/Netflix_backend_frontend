const router = require("express").Router();
const List = require("../models/List");

const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");

// create list
exports.createList = catchAsyncErrors(async (req, res, next) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);
    try {
      const savedList = await newList.save();
      res.status(200).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Nie możesz dodać listy. Nie jesteś adminem.");
  }
});


// delete list
exports.deleteList = catchAsyncErrors(async (req, res, next) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json("Lista została usunięta");
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("Nie możesz usunąć listy. Nie jesteś adminem.");
  }
});

// get list
exports.getList = catchAsyncErrors(async (req, res, next) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];
  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: typeQuery, genre: genreQuery } }]);
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: typeQuery } }]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 2 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

