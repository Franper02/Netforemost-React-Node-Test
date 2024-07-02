const mongoose = require("mongoose");

// Mongoose schema based on the data provided in the .json file
const ArticleSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  urlToImage: {
    type: String,
    required: true,
  },
  publishedAt: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Article", ArticleSchema);
