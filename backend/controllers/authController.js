import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// Function to generate a JWT token
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

// Register a new user
export const register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please provide all fields" });
    }

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // Create the user
        const user = await User.create({ email, password: hashPassword });

        // Generate a JWT token
        const token = generateToken(user._id);

        // Set cookie and respond
        res.cookie('token', token, { httpOnly: true, secure: false });
        res.status(201).json({ message: 'User registered successfully', userID: user._id });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Login an existing user
export const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Please fill all fields" });
    }

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare passwords
        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Generate a JWT token
        const token = generateToken(user._id);
  

        // Set cookie and respond
        res.cookie('token', token, { httpOnly: true, secure: false });
        res.status(200).json({ message: 'User logged in successfully', userID: user._id });
        console.log(token)
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};

// Logout a user
export const logout = (req, res) => {
    res.clearCookie('token');
    res.status(200).json({ message: "Logged out successfully" });
};
