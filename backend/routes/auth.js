const express = require('express');
const otpGenerator = require('otp-generator');
const jwt = require('jsonwebtoken');
const mailSender = require('../mailer.js');
const User = require('../model/userModel'); // Assuming your schema file is named `user.js`
const router = express.Router();


// In-memory OTP store
const otpStore = {};

router.post("/signup", signup);
router.post("/otp", getOTP);

async function getOTP(req, res) {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: "Email is required",
            });
        }

        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });

        otpStore[email] = otp;
        console.log("OTP generated for", email, ":", otp);

        await mailSender(email, "Verification Email from MiniProject", otp);

        res.status(200).json({
            success: true,
            message: "OTP sent successfully",
            otp
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

async function signup(req, res) {
    try {
        const { name, email, otp } = req.body;

        if (!email || !otp) {
            return res.status(400).json({
                success: false,
                message: "Email and OTP are required",
            });
        }

        if (otpStore[email] !== otp) {
            return res.status(400).json({
                success: false,
                message: "OTP not verified or expired",
            });
        }

        // Check if the user already exists
        let user = await User.findOne({ email });
        if (!user) {
            // If user doesn't exist, create a new user
            user = new User({ name, email });
            await user.save();
        } else {
            // If user exists, update their name if provided
            if (name) {
                user.name = name;
                await user.save();
            }
        }

        // Generate JWT token
        const token = jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });

        // Clear OTP after use
        delete otpStore[email];

        res.status(201).json({
            success: true,
            message: user.isNew ? "Signup successful" : "Login successful",
            token,
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
}

module.exports = router;