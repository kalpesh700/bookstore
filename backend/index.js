const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Bookroute = require('./Route/book.route'); // Book route
const userRoute = require('./Route/user.route'); // User route
const cors = require('cors'); // CORS for cross-origin requests

dotenv.config(); // Initialize environment variables

const app = express(); // Initialize Express app
app.use(cors()); // Use CORS middleware

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODBURI;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
(async () => {
    try {
        await mongoose.connect(URI); // Removed deprecated options
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Error occurred:", error);
    }
})();

// Define routes
app.use("/book", Bookroute);
app.use("/users", userRoute);

// Catch-all error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
