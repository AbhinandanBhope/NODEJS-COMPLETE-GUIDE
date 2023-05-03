const path = require('path');

const express = require('express');

const router = express.Router();

// /admin/add-product => GET
router.get('/c', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'contact.html'));
  });
  
  // /admin/add-product => POST
  
  
  module.exports = router;
  