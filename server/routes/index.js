const express = require('express');
const router = express.Router();
const { homePage, getAbout } = require('../controllers/mainController');

// app routes

router.get('/', homePage)
router.get('/about', getAbout)

module.exports = router;