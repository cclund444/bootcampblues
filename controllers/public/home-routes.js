const router = require('express').Router();
const { Post, User, Comment, Category } = require('../../models');
// get all posts for homepage
router.get('/', (req, res) => {
    console.log('==============');
    Category.findAll()
        .then(dbCategoryData => {
            console.log(dbCategoryData);
            const categories = dbCategoryData.map(category => category.get({ plain: true }));
            // console.log('this is my category' + category);
            res.render('homepage', {
                categories: categories,
                loggedIn: req.session.loggedIn
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})

// get a single post
router.get('/post/:id', (req, res) => {
    Category.findOne({
        where: {
            id: id.params.id
        }
    })
    .then(dbCategoryData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        const category = dbCategoryData.get({ plain: true });

        res.render('single-post', {
            category,
            loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get for login, redirect for login if they aren't
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;