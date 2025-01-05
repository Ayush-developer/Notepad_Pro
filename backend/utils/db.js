const mongoose = require('mongoose')

const connectDB = async (req,res)=>{
    try{
        const conn  = await mongoose.connect(process.env.MONGODB_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB Connected')
    }
    catch(err){
        console.ereor('Error')
        process.exit(1)
    }
}

module.exports = connectDB;