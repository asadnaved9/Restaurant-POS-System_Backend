const createHttpError = require('http-errors');
const User = require('../models/userModels');

const register = async (req, res, next) => {
    try {

        const { name, email, phone, password, role } = req.body;

        if (!name || !email || !phone || !password || !role) {
            const error = createHttpError(400, "All fields are required");
            return next(error);
        }

        const isUserPresent = await User.findOne({ email });
        if (isUserPresent) {
            const error = createHttpError(400, "User already exists");
            next(error);
        }


        const user = { name, phone, email, password, role };
        const newUser = await User.create(user);
        await newUser.save();

        res.status(201).json({
            success: true,
            message: "New User Created Successfully",
            data: newUser
        });
        
    } catch (error) {
        next(error);
    }

    
}

const login = async (req, res, next) => {
    
}

module.exports = { register, login };