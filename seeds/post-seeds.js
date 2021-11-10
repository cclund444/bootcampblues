// post seeds will be here
const { Post } = require('../models');

const postData = [
    {
        title: 'What in the SQL?',
        body: 'Hey can anyone explain to me the way the syntax for joins are supposed to work? These lines are killing me slowly..',
        user_id: 1,
        category_id: 13,
    },
    {
        title: 'Disfunctionally-Oriented Programming',
        body: 'What does Object-Oriented Programming even mean? This module is like deciphering another language...HELP?',
        user_id: 4,
        category_id: 11,
    },
    {
        title: 'Can I Express myself?',
        body: 'Why is this even called Express.js? I dont think anything about this module looks like the Polar Express',
        user_id: 3,
        category_id: 12,
    },
    {
        title: 'This wasnt how I was taught to play fetch',
        body: 'How the hell do I get these fetch calls to work? SOMEONE SAVE ME.. or just explain it?',
        user_id: 1,
        category_id: 7,
    },
    {
        title: '3 for 1????',
        body: 'What the hell did I get myself into? This class is already speeding away from me. Three different things in one week? Someone help me understand GIT',
        user_id: 3,
        category_id: 3,
    },
    {
        title: 'MVC or MVP',
        body: 'Can I just say that MVC organization is mind boggling. How do I get the routes to work?',
        user_id: 2,
        category_id: 15,
    },
    {
        title: 'test',
        body: 'testing body',
        user_id: 2,
        category_id: 15
    },
    {
        title: 'Palms are sweaty, elbows weak, fingertips heavy',
        body: 'Anyone else freaking out over our first project??? I dont know where to start and just wanted to talk to vent about the first project due.',
        user_id: 4,
        category_id: 9,
    },
    {
        title: 'What am I reacting to?',
        body: 'I dont really have a technical question, but why is it called React? I was looking through the modules and just felt like Reacting to React.',
        user_id: 2,
        category_id: 20,
    },   
]
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;