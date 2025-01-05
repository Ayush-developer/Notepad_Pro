const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/User')

exports.protect  = async (req, res, next) => {
    let token
    if(req.cookies.token){
        token = req.cookies.token

    

    try{
        let decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
    req.user = await User.findById(decoded.id).select('-password')
    next()
    }
    catch(err){
        res.status(400).json({message:"Invalid Token"},err)
    }
}
else{
    res.status(400).json({message:"Token Doest Not exist"},err)
}
}