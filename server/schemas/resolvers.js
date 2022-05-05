const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Location, Order, Cart } = require("../models");
const { signToken } = require("../utils/auth");
const { Types } = require("mongoose");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    locations: async () => {
      return Location.find();
    },
    items: async () => {
      return Item.find();
    },
    items_by_location: async (_, args) => {
      return Item.find({ location: args.location });
    },
    users: async () => {
      return User.find();
    },
    user: async (_, args) => {
      return User.findOne({ _id: args.id });
    },
    me: async (_, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
    cart: async (parent, _id, context) => {
      if (context.user) {
        //console.log(context.user._id);
        let carts = await Cart.find();
        //carts.forEach((cart) => console.log(cart));
        let cart = carts.find((cart) => cart.userId == context.user._id);
        return cart;
        //return await Cart.find({ userId: context.user._id });
      }

      throw new AuthenticationError("Not logged in");
    },
    carts: async () => {
      return Cart.find();
    },
    order: async (parent, { _id }, context) => {
      if (context.user) {
        const user = await User.findById(context.user._id).populate({
          path: "orders.items",
        });
        return user.orders;
      }

      throw new AuthenticationError("Not logged in");
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ items: args.items });
      const line_items = [];

      const { items } = await order.populate("items");

      for (let i = 0; i < items.length; i++) {
        const item = await stripe.items.create({
          name: items[i].name,
          description: items[i].description,
          images: [`${url}/images/${items[i].image}`],
        });

        const price = await stripe.prices.create({
          item: item.id,
          unit_amount: items[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args);
      const cart = { userId: user._id, items: [] };
      await Cart.create(cart);
      const token = signToken(user);
      return { token, user };
    },
    addOrder: async (parent, { items }, context) => {
      console.log(context);
      if (context.user) {
        const order = new Order({ items });

        const user = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { orders: order } },
          { new: true }
        )
          .populate("orders")
          .populate({ path: "orders", populate: "items" });

        return user.orders.id(order._id);
      }

      throw new AuthenticationError("Not logged in");
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    addCartItem: async (parent, { itemId }, context) => {
      console.log("add item with id:", itemId);
      if (context.user) {
        let carts = await Cart.find();
        //carts.forEach((cart) => console.log(cart));
        let cart = carts.find((cart) => cart.userId == context.user._id);

        if (cart) {
          const item = await Item.findById(itemId);
          console.log("item", item._id);
          cart = await Cart.findByIdAndUpdate(cart._id, {
            $push: { items: item },
          }).populate("items");
          console.log("cart.items", cart.items);
        }

        return cart;
        /*const user = await User.findByIdAndUpdate(
          context.user._id,
          { $push: { orders: order } },
          { new: true }
        )
          .populate("orders")
          .populate({ path: "orders", populate: "items" });

        return user.orders.id(order._id);*/
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
