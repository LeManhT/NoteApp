require('dotenv').config()
const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const connectToDB = require('./server/config/db')
// const session = require('express-session');
const passport = require('passport')
const MongoStore = require('connect-mongo')


const app = express();
const port = process.env.PORT;

app.use(passport.initialize());
// app.use(passport.session());


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Connect DB
connectToDB();

// Static files

app.use(express.static('public'))

// Template Engine

app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    // Set title and desc 
    const locals = {
        title: 'NodeJS Note',
        description: "Note App use NodeJS"
    }
    res.render("index", locals)
})

// Routes

app.use('/', require('./server/routes/auth'));
app.use('/', require('./server/routes/index'));
app.use('/dashboard', require('./server/routes/dashboard'))

app.use('*', (req, res) => {
    res.status(404).render('pageNotFound')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})