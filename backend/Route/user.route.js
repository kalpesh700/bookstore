const express = require("express");
const router = express.Router();
const { signUp, login } = require("../controller/user.contorller"); // Correct path to your controller

// Define the signup route
router.post("/signup", signUp);
router.post('/login', login); // Login route

// Export the router
module.exports = router;
