const { Schema, model } = require("mongoose");
const Item = require("./Item");

const cartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  items: [Item.schema],
});

const Cart = model("Cart", cartSchema);

module.exports = Cart;
