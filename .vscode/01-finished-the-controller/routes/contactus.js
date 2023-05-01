const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');

const router = express.Router();

router.get('/contact', productsController.getcontactus);

module.exports = router;
