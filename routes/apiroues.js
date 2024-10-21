const express = require('express');
const { getWeather, getCurrency } = require('../controllers/apiController');
const router = express.Router();

router.get('/weather', getWeather);
router.get('/currency', getCurrency);

module.exports = router;
