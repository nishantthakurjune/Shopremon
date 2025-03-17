const User = require('../model/userModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = async (req, res)=>{
    const {username, email, password} = req.body;
    const hashedPass = bcrypt.hashSync(password, 10);
    const user = new User({username, email, password: hashedPass});
    try{
    await user.save();
    res.status(201).json({message: `user created successfully`});
    }
    catch(err){
        console.error(err);
        return res.status(500).json({message: `Internal Server Error`})
    }
}

const login = async (req, res, next)=>{
    try{
        const { email, password} = req.body;
        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({message: "User not found. Please sign up first."})
        }
        //compare to provided password
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: `Invalid credentials: Please try again.`});
        }

        //generate JWT token
        const token = jwt.sign({id: user._id, email: user._email}, process.env.SECRET, {expiresIn: "1h"}); 
        return res.status(200).json({message: "Login Successful", token, user})
        }
        catch(err){
            console.error(err);
            return res.status(500).json({message: "Internal Server Error"})
        }
};

module.exports = {signup, login};