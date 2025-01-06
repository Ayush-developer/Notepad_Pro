const API_URL = process.env.REACT_API_URL

export const getNotes = async () =>{
    const response = await fetch(`${API_URL}/notes`,{
        method: 'GET',
        credentials:'include'
    })
    if(!(response.ok)){
        throw new Error("Failedto get Notes")
    }
    return response.json()

}

export const createNote = async (noteData) => {
    const response = await fetch(`${API_URL}/notes`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(noteData),
        credentials: 'include',
    });
    if (!response.ok) {
        throw new Error('Failed to create note');
    }
    return response.json();
};