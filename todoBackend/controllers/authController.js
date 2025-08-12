import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
    try {
        console.log("req.body ",req.body)
        const { name, email, password } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashedPw = await bcrypt.hash(password, 10);
        const newUser = await User.create({ name, email, password: hashedPw });

        res.status(200).json({ message: 'User registered successfully' });

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const login = async (req, res) => {
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);

        if (!user) {
            return res.status(400).json({ message: "User doesnot exists" });
        } else if (!isMatch) {
            return res.status(400).json({ message: "Password is invalid" });
        } else { 
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

            res.status(200).json({
                token,
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}