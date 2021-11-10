// public routes will be extended through this for front end apis 
const router = require('express').Router();

//calling public routes
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const singleCategoryRoutes = require('./single-category-routes');

// using routes and dircting their url path
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/single-category', singleCategoryRoutes);

module.exports = router;