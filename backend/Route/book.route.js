const express = require('express');
const router = express.Router();
const { getBook } = require('../controller/book.controller'); // Ensure the correct path

// Define routes
router.get("/", getBook);

module.exports = router;
