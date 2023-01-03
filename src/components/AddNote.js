import React, { useContext ,useState} from 'react'
import NotesContext from '../store/NotesContext'

function AddNote() {
  
  
  const [note,setNote] = useState({
   
    title:'',
    text:'',
    
  })

  const {notes,addNote} = useContext(NotesContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    const timestamp = new Date()
    const timestamFormat = new Intl.DateTimeFormat('en-us', {
      dateStyle:'medium',
      timeStyle:'short'
    })

    console.log(note)
    const id = notes.length === 0 ? 1 : notes[0].id + 1 
    addNote({id,...note,created:timestamFormat.format(timestamp)})
  }
  return (
   
      <form className="add-note__form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" 
        className="title"
        name="title" 
        value={note.title} 
        onChange={(e) => setNote({...note,title:e.target.value})} />

        <textarea placeholder="Enter text here"
        className="text"
        name="text"
        onChange={(e) => setNote({...note,text:e.target.value})}
        value={note.text}
        ></textarea>
        <button type="submit">+</button>
      </form>
   
  )
}

export default AddNote