const { AuthenticationError } = require("apollo-server-express");
const { User, Item, Location, Order, Cart } = require("../models");
const { signToken } = require("../utils/auth");
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
        const product = await stripe.products.create({
          name: items[i].name,
          description: items[i].description,
          images: [`${url}/images/${items[i].image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
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
      console.log(args)
      const token = signToken(user);
      return { token, user };
    },
    clearCart: async (parent, args, context) => {
      if (context.user) {
        const cart = await Cart.deleteOne({ userId: context.user._id });
        console.log('CART', cart)
        return "Success!";
      }
      throw new AuthenticationError("Not logged in");
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
  },
};

module.exports = resolvers;
