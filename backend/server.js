const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./utils/db')

const authRoutes = require('./routes/authRoutes')
const noteRoutes = require('./routes/noteRoutes');


dotenv.config();
const app = exprress();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:'http://localhost:3000',
    credentials:true
}))

connectDB()

app.use('/api/auth',authRoutes)
app.use('/api/notes',noteRoutes)

app.use((req,res) => {
    res.status(404).json({message: 'Route not found'})

})

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server running on port : ${PORT}`)
})
