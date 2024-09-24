const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Book = require('./model/book.model'); // Adjust the path as needed

// Load environment variables
require('dotenv').config();

const URI = process.env.MONGODBURI || 'mongodb://localhost:27017/bookstore';

// Connect to MongoDB
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");

    // Read JSON file
    const filePath = path.join(__dirname, 'frontend\public\list.json'); // Adjust the path as needed
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(fileData);

    // Insert data into MongoDB
    return Book.insertMany(data);
})
.then(() => {
    console.log("Data inserted successfully");
    mongoose.disconnect();
})
.catch((error) => {
    console.error("Error occurred:", error);
    mongoose.disconnect();
});
