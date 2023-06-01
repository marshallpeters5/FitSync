const sequelize = require('../config/connection');
const { User, Exercise } = require('../models');
const userData = require('./userData');
const exerciseData = require('./exerciseData.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, { individualHooks: true });

  await Exercise.bulkCreate(exerciseData);

  console.log('Database seeded successfully.');
  process.exit(0);
};

seedDatabase().catch((err) => {
  console.error('Error seeding database:', err);
  process.exit(1);
});