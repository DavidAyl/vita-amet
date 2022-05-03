const db = require('../config/connection');
const { User, Location, Review, Item } = require('../models');
const userSeeds = require('./userSeeds.json');
const beachSeed = require('./beachSeed.json');
const hikeSeed = require('./hikeSeed.json');
const snowSeed = require('./snowSeed.json');
const locationSeed = require('./locationSeed.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await User.create(userSeeds);
    // await Location.create(locationSeed)
    await Item.deleteMany({});
    await Item.create(beachSeed);
    await Item.create(hikeSeed);
    await Item.create(snowSeed);
    await Location.deleteMany({})
    await Location.create(locationSeed);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }
  process.exit(0);
});
