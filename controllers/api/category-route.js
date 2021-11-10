// category routes will be set up here
const router = require('express').Router();
const { Category } = require("../../models");

// find all categories route
router.get('/', (req, res) => {
    Category.findAll()
        .then(dbCategoryData => res.json(dbCategoryData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// find one category route
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    Category.findOne({
        
        where: {
            id: req.params.id
        }
    })
        .then(dbCategoryData => res.render('single-category', {category: dbCategoryData}))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
        
});

module.exports = router;