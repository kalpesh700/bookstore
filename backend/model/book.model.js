const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: { type: String, required: true }, // e.g., "पाऊसपिसारा"
    title_en: { type: String, required: true },
    language: { type: String, default: "मराठी" }, // e.g., "मराठी"
    authors: { type: String, default: "अशोक कौतिक कोळी" }, // Default author
    category: { type: String, required: true }, // e.g., "बालसाहित्य, कवितासंग्रह"
    publication: { type: String }, // e.g., "दिलीपराज प्रकाशन प्रा. लि."
    pages: { type: Number }, // e.g., 48
    binding: { type: String }, // e.g., "Paperback"
    price: { type: Number }, // e.g., 105 (Hard Copy Price)
    stock_status: { type: String }, // e.g., "Available Immediately"
    image: { type: String }, // URL of the book's image
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
