// comment seeds will be here
const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Every join is different, you should look up a venn diagram of how the different joins work in SQL',
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: 'I love your title lol, OOP is a type of programming model that organizes software design around data or objects.',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Yea I agree that Express.js doesnt look like a train, maybe that was the teams favorite movie?',
        user_id: 3,
        post_id: 3
    },
    {
        comment_text: 'Where you the one playing fetch or fetching? After that title I had to poke some fun.',
        user_id: 4,
        post_id: 4
    },
    {
        comment_text: 'RIGHT??? We went from intros and just jumped off the deep end.',
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: 'You could say it that MVC is the MVP. The way you get your folders to route is by exporting each file at the bottom and then using an index.js to export the folder. Then you want to require that folder in the files that you need it.',
        user_id: 4,
        post_id: 6
    },
    {
        comment_text: 'I LOVE YOUR TITLE. Im in the same boat with not knowing where to start. Have your reached out to your team yet?',
        user_id: 2,
        post_id: 7
    },
    {
        comment_text: 'Got on ya for looking ahead, I havent gotten to that module yet, but google says that it stands for Remote Element and Test System. Does that help?',
        user_id: 1,
        post_id: 8
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;