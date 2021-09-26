const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Proszę wprowadź nazwę filmu"],
      unique: true,
      maxlength: [100, "Proszę wprowadź max 100 znaków w tytule."],
    },
    price: {
      type: Number,
      required: [true, "Proszę wprowadź cenę produktu"],
      maxlength: [5, "Proszę wprowadź max 5 cyfr"],
      default: 0.0,
    },
    desc: {
      type: String,
      required: [true, "Proszę wprowadź opis produktu"],
    },
    ratings: {
      type: Number,
      default: 0,
    },

    img: {
      type: String,
      default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmq1v7TsJ0PaKgcvc5kMmahNYp9tKbFtvdVg&usqp=CAU",
    },
    imgTitle: {
      type: String,
    },
    imgSm: {
      type: String,
    },
    trailer: {
      type: String,
    },
    video: {
      type: String,
    },
    year: {
      type: String,
    },
    limit: {
      type: String,
    },
    genre: {
      type: String,
      required: [true, "Proszę wprowadź kategorię dla tego produktu"],
      enum: {
        values: ["Cryminal", "Thriller", "Komedy", "Fantasy"],
        message: "Proszę wybierz poprawną kategorię dla filmu.",
      },
    },
    isSeries: {
      type: Boolean,
      default: false,
    },

    numOfReviews: {
      type: Number,
      default: 0,
    },
    duration: {
      type: Number,
      default: 100,
    },

    reviews: [
      {
        name: {
          type: String,
          required: false,
        },
        rating: {
          type: Number,
          required: false,
        },
        comment: {
          type: String,
          required: false,
        },
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
