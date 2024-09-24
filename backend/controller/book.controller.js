// Import the Book model
const Book = require('../model/book.model'); // Ensure the correct path

// Define and export the getBook function
const getBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getBook };