const db = require('../config/connection');
const { User, Location, Review, Item } = require('../models');
const userSeeds = require('./userSeeds.json');
const beachSeed = require('./beachSeed.json');
const hikeSeed = require('./hikeSeed.json');
const snowSeed = require('./snowSeed.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    // await Location.create(locationSeed)
    await Item.create(beachSeed);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
