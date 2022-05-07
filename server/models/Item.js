const { Schema, model } = require("mongoose");

const itemSchema = new Schema(
  {
    name: {
      type: String,
    },
    location: {
      type: String,
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
    },
    inStock: {
      type: Boolean,
      default: false,
    },
    review: {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  },
  {
    toJSON: { getters: true },
  }
);

const Item = model("Item", itemSchema);

module.exports = Item;
