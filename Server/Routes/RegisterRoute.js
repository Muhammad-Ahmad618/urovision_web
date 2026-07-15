const express = require('express');
const router = express.Router();
const User = require('../Model/UserSchema');
const bcrypt = require('bcryptjs');

// SignUp Form
router.post('/', async (req, res) => {
    const { Name, DateOfBirth, Gender, cnic, email, password } = req.body;

    if (!Name || !Gender || !DateOfBirth || !cnic || !email || !password) {
        return res.status(400).json({ message: 'Fill the Form Completely' });
    }

    try {
         
        const existingUser = await User.findOne({$or: [{email},{cnic}]})
        if(existingUser){

            return res.status(400).json({message: 'User with this Email and CNIC already exist'})
        }
        
        const hashedPassword = await bcrypt.hash(password,10)

        const newUser = new User(
            { Name,
              DateOfBirth, 
              Gender, 
              cnic, 
              email, 
              password: hashedPassword,
              SignUpMethod: "manual"
             });

        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        // Handle different error scenarios
        if (error.name === 'ValidationError') {
            return res.status(400).json({ message: error.message });
        }
        if (error.code === 11000) {
            return res.status(400).json({ message: 'User with this Email or CNIC already exists' });
        }
        // Default error message
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
