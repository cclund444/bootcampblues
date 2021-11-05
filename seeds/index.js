// requires for seeds here
const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');
const seedCategories = require('./category-seeds');

// require for sequelize here
const sequelize = require('../config/connection');

// seeding async funtion here
const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('--------------');
    await seedUsers();
    console.log('--------------');
    
    await seedCategories();
    console.log('--------------');

    await seedPosts();
    console.log('--------------');

    await seedComments();
    console.log('--------------');

    

    process.exit(0);
};

// run function here
seedAll();