// public routes will be extended through this for front end apis 
const router = require('express').Router();

//calling public routes
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');

// using routes and dircting their url path
router.use('/', homeRoutes);
router.use('/dashbaord', dashboardRoutes);

module.exports = router;