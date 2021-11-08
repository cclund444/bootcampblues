// category seeds will be here
const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Module 1: HTML, CSS, and Git'
    },
    {
        category_name: 'Module 2: Advanced CSS'
    },
    {
        category_name: 'Module 3: JavaScript'
    },
    {
        category_name: 'Module 4: Web APIs'
    },
    {
        category_name: 'Module 5: Third-Party APIs'
    },
    {
        category_name: 'Module 6: Server-Side APIs'
    },
    {
        category_name: 'Module 7 & 8: Project 1'
    },
    {
        category_name: 'Module 9: Node.js'
    },
    {
        category_name: 'Module 10: Object-Oriented Programming'
    },
    {
        category_name: 'Module 11: Express.js'
    },
    {
        category_name: 'Module 12: SQL'
    },
    {
        category_name: 'Module 13: Object-Relational Mapping (ORM)'
    },
    {
        category_name: 'Module 14: Model-View-Controller (MVC)'
    },
    {
        category_name: 'Module 15 & 16: Project 2'
    },
    {
        category_name: 'Module 17: Computer Science for JavaScript'
    },
    {
        category_name: 'Module 18: NoSQL'
    },
    {
        category_name: 'Module 19: Progressive Web Applications (PWA)'
    },
    {
        category_name: 'Module 20: React'
    },
    {
        category_name: 'Module 21: MERN'
    },
    {
        category_name: 'Module 22: State'
    },
    {
        category_name: 'Module 23 & 24: Final Project'
    },
    {
        category_name: 'General Discussion'
    },
    {
        category_name: 'Introductions'
    }
]

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;