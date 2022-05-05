const db = require("../config/connection");
const { User, Location, Review, Item, Cart } = require("../models");
const userSeeds = require("./userSeeds.json");
const beachSeed = require("./beachSeed.json");
const hikeSeed = require("./hikeSeed.json");
const snowSeed = require("./snowSeed.json");
const locationSeed = require("./locationSeed.json");
const { Types } = require("mongoose");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    // get the test user that we just inserted because now it has an id
    let testUserId = (await User.find({ username: "testuser" })).map(
      (user) => user._id
    );
    // use the user id to link the cart with the user
    let testUserCart = { userId: testUserId, items: [] };
    await Cart.deleteMany({});
    await Cart.create(testUserCart);
    // await Location.create(locationSeed)
    await Item.deleteMany({});
    await Item.create(beachSeed);
    await Item.create(hikeSeed);
    await Item.create(snowSeed);
    await Location.deleteMany({});
    await Location.create(locationSeed);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
