import jsonwebtoken from 'jsonwebtoken';
import User from '../models/User.js';


const protect  = async (req, res, next) => {
    let token
    if(req.cookies.token){
        token = req.cookies.token

    

    try{
        let decoded = jwt.verify(token,process.env.JWT_SECRET)
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

export default protect;