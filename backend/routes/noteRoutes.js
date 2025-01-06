import express from 'express';
import protect from '../middleware/authMiddleware.js';
import { createNote, getNote } from '../controllers/noteController.js';


const router = express.Router()

router.get('/',protect,getNote)
router.post('/',protect,createNote)

export default router;