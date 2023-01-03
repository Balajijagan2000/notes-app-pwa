import { createContext, useReducer } from "react";
import notesReducer,{ initialState } from "../reducers/notesReducer";


const NotesContext = createContext(initialState);


export const NotesContextProvider = ({children}) => {

    const [state,dispatch]= useReducer(notesReducer,initialState)
    
    const addNote = (note) =>{
        const updatednotes = {
            notes: [note,...state.notes]
        }

        dispatch({
            type:"ADD_NOTE",
            payload:updatednotes
        })
    }
    const deleteNote = (id) => {
        const updatednotes = state.notes.filter((note) => {
            return note.id !== id
        })

        dispatch( {
            type: 'DELETE_NOTE',
            payload:{notes:updatednotes} 
        })
    }

    const value = {
        notes:state.notes,
        addNote,
        deleteNote
    }
    return (
        <NotesContext.Provider value={value}>
            {children}
        </NotesContext.Provider>
    )

}
export default NotesContext