// book.controller.js
const Book = require('../model/book.model');

// Example function to get all books
const getBook = async (req, res) => {
  try {
    const books = await Book.find(); // Fetch all books from the database
    res.status(200).json(books); // Return the books
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get a book by English title
const getBookByEnglishTitle = async (req, res) => {
  const { title_en } = req.params; // Get the title from the URL parameters

  try {
    const book = await Book.findOne({ title_en }); // Find the book by English title

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(book); // Return the book data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  getBook,
  getBookByEnglishTitle,
};
