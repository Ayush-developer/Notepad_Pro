const Note = (note) => {
    return ( 
        <div>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
        </div>
     );
}
 
export default Note;