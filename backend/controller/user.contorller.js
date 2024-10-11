const User = require("../model/user.model"); // Correct path to your User model
const bcryptjs = require("bcryptjs"); // Ensure bcryptjs is imported

// Define the signUp function
const signUp = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash the password
        const hashpassword = await bcryptjs.hash(password, 10);

        // Create a new user
        const newUser = new User({
            fullname,
            email,
            password: hashpassword
        });

        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Define the login function
const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if user exists
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "User does not exist" });
        }

        // Check if the password is correct
        const isPasswordValid = await bcryptjs.compare(password, existingUser.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        // User login successful
        res.status(200).json({ message: "User logged in successfully", user: existingUser });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Export both functions
module.exports = { signUp, login };
