const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  adult: String,
  backdrop_path: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: Number,
  genre_ids: Array,
  poster_path: String,
  release_date: String,
  title: String,
  vote_average: Number,
  vote_count: Number,
  category: String,
  type: String,
});

const movie = mongoose.model("movie", movieSchema);
module.exports = movie;
