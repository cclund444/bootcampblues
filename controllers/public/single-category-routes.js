const router = require('express').Router();
const { Post, User, Comment, Category } = require('../../models');

router.get('/', (req, res) => {
    Post.findAll({
      where: {
        // use the ID from the session
        category_id: req.params.category_id
      },
      attributes: [
        'body',
        'title',
        'created_at'
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
    })
      .then(dbCategoryData => {
       
        // serialize data before passing to template
        const posts = dbCategoryData.map(post => post.get({ plain: true }));
        res.render('single-category', { posts, loggedIn: true });
        console.log('here is the response:' + dbCategoryData)
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get('/:id', (req, res) => {
    Category.findOne({
      where: {
        // use the ID from the session
        id: req.params.id
      },
      attributes: [
        'category_name'
      ],
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'body', 'category_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
    })
      .then(dbCategoryData => {
        const posts = dbCategoryData.dataValues.posts.map(postData => {
          console.log(postData.dataValues.user.dataValues.username);
          return postData.dataValues;
        });
        res.render('single-category', { posts, loggedIn: true });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;