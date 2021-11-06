// user seeds will be here
const { User } = require('../models');

const userData = [
    {
        username: 'nicoguarino',
        email: 'nico@yahoo.com',
        password: 'password123'
    },
    {
        username: 'caleblund',
        email: 'caleb@yahoo.com',
        password: 'password123'
    },
    {
        username: 'jaronkenyon',
        email: 'jaron@yahoo.com',
        password: 'password123'
    },
    {
        username: 'kristineetsitty',
        email: 'kristine@yahoo.com',
        password: 'password123'
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;