const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Bookroute = require('./Route/book.route'); // book route
const userRoute = require('./Route/user.route'); // book route

const cors = require('cors'); // CORS for cross-origin requests


dotenv.config(); // Initialize environment variables

const app = express(); // Initialize Express app
app.use(cors()); // Use CORS middleware

const PORT = process.env.PORT || 3000;
const URI = process.env.MONGODBURI;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch(error => {
  console.log("Error occurred:", error);
});

// Define routes
app.use("/book", Bookroute);
app.use("/users",userRoute);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
