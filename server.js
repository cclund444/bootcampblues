const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');


const app = express();
const PORT = process.env.PORT || 3001;

// runs sequelize connection to Mysql
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//session setup
const bluesSess = {
    secret: "Whats the password?",
    cookie: {},
    resave: false, 
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

// Uses the session set up
app.use(session(bluesSess));

// requires the helpers.js
const helpers = require('./utils/helpers');

// runs the helper fuction to format date in the handbars pages
const hbs = exphbs.create({ helpers });

// runs handlebars and ultilizes the helps hbs to format date
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// tells the app to use json data and to use the style and javascript for the front end
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//requires the app to run the api/public routes from the controllers folder
// app.use(require('./controllers'));

// starts the sequlize and post to listen 
sequelize.sync({ force: false })
.then(() => {
    app.listen(PORT, () => console.log('Now Listening'));
});