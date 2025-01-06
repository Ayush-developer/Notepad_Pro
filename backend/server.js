import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './utils/db.js';

import authRoutes from './routes/authRoutes.js';
import noteRoutes from './routes/noteRoutes.js';



dotenv.config();
const app = express();

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
