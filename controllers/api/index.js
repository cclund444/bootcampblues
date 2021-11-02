const router = require('express').Router();

//routes from apis
const userRoutes = require('./user-route');
const postRoutes = require('./post-route');
const commentRoutes = require('./comment-route');
const categoryRoutes = require('./category-route');

// naming the url part of for routes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/categories', categoryRoutes);

//export routes
module.exports = router;