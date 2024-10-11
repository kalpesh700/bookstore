const express = require('express');
const { getBook, getBookByEnglishTitle } = require('../controller/book.controller');

const router = express.Router();

router.get('/', getBook); // Get all books
router.get('/detail/:title_en', getBookByEnglishTitle); // Get book by English title

module.exports = router;
