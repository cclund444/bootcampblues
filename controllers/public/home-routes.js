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
router.get('/categories/:id', (req, res) => {
    Category.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbCategoryData => {

        if (!dbCategoryData) {

            res.status(404).json({ message: 'No post found with this id' });
            return;
        }

        const category = dbCategoryData.get({ plain: true });


        res.render('single-category', {

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

router.get('/post/:id', (req, res) => {
    Post.findOne({ 
      where: { id: req.params.id},
      attributes: [
        'id',
        'body',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: { 
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
      ]
    }).then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'No post found with this id'});
        return;
      }

      // serialize the data 
      const post =  dbPostData.get({ plain: true });
      // pass data to template
      console.log(dbPostData);
      res.render('single-post', { 
        post,
        loggedIn: req.session.loggedIn  
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err)
    });
  });


module.exports = router;