const bcrypt = require('bcrypt');
import jwt from "jsonwebtoken";
const User = require('../models/User')

const generateToken =(id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
}

exports.register = async (req,res)=>{


    const {email,password} = req.body;

    if(!email || !password){

        return res.status(400).json({message:"Please Provide All Fields"})
    }
    try{
        const userExists = await User.findOne({email: email})

        if(userExists){
            return res.status(400).json({message:"User already exists"})
        }
        else{
            const salt = await bcrypt.genSalt(10)
            const hashPassword = bcrypt.hash(password,salt)
            const user = User.create({email, password:hashPassword})
            const token  = generateToken(user._id)
            res.cookie('token',token,{httpOnly:true,secure:false})
            res.status(201).json({message:'User Registered Successfully',userID:user._id})



        }
    }
    catch (err) {
        res.status(500).json({message:"Server Error",err})
    }

}


exports.login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password) {
        res.status(400).json({message:"Fill All Fields"})
    }

    try{
        const user = await User.findOne({email: email});
        if(!user){
            res.status(404).json({message:"User Not Found"})
        }
        const match = await bcrypt.compare(password, user.password)

        if(!match) {
            res.status(404).json({message:"Invalid Password"})
        }
        const token  = generateToken(user._id)
            res.cookie('token',token,{httpOnly:true,secure:false})
            res.status(201).json({message:'User Logged In Successfully',userID:user._id})

    }
    catch(err) {
        res.status(500).json({message:"Server Error",err})
    }
}

