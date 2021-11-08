// all routes using api use /api

const router = require("express").Router()
const pubRoutes = require('./public')
const apiRoutes = require('./api')

// all public routese use /

router.use('/', pubRoutes)
router.use('/api', apiRoutes)

module.exports = router;
