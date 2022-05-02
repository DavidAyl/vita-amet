const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      get: (v) => (v / 100).toFixed(2),
      set: (v) => v * 100,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    inStock: {
      type: Boolean,
      default: false,
    },
    reviews: {
      type: Schema.Types.ObjectId,
      ref: "Reviews",
    },
  },
  {
    toJSON: { getters: true },
  }
);

const Item = model("Item", itemSchema);

module.exports = Item;
