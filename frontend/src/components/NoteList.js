import React, {useState} from 'react'
import { getNotes } from '../services/noteService';
import { Note } from './Note'

const NoteList = () => {


    const [notes,setNotes] = useState([])

    // eslint-disable-next-line no-undef
    useFetch(()=>{
           const fetchNotes = async()=>{
            try{
                const data = await getNotes()
                setNotes(data)
            }
            catch(err){
                console.error(err)
            }

           }

           fetchNotes()
    },[])

    return ( 
        <div>
            {notes.map(note =>(
                <Note key={note.id} note={note}></Note>
            ))}
        </div>

     );
}
 
export default NoteList;