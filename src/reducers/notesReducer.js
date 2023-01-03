
export const initialState = {

    
    notes: localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : localStorage.setItem("notes",JSON.stringify([]))

}

const notesReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            localStorage.setItem("notes",JSON.stringify(action.payload.notes))
            return {
                ...state,
                notes: action.payload.notes
                  
            }
        case 'DELETE_NOTE':
            localStorage.setItem("notes",JSON.stringify(action.payload.notes))
            return {
                ...state,
                notes: action.payload.notes
                  
            }
        default:
            break;

    }
}

export default notesReducer