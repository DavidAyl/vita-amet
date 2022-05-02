const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  
});

const Review = model("Review", reviewSchema);

module.exports = Review;
