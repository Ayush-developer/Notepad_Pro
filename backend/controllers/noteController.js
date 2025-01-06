import note from '../models/Note.js'

export const getNote = async (req,res)=>{

    try{
        const notes = await note.find({user:req.user._id})
    res.status(200).json({message:notes})
    }
    catch(err){
        res.status(500).json({message:err},err)
    }

}

export const createNote = async (req,res)=>{
     try{
        const {title,content} = req.body
        if(!title || !content){
            return res.status(404).json({message:"Enter all fields"})
        }
        const Note = note.create({
            
            user: req.user._id,
            title:title,
            content:content})
            res.status(200).json({message:"Note Created"})
     }
     catch(err){
        res.status(400).json({message:"Error Server"},err)
     }
}