const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  name:{
    type: String
  }
});

const Review = model("Review", reviewSchema);

module.exports = Review;
