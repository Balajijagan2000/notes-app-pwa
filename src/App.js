
import NavBar from "./components/NavBar";
import Notes from "./components/Notes";
import { NotesContextProvider } from "./store/NotesContext";

function App() {
  return (
    <div className="container">
      
      <NotesContextProvider>

        <NavBar />

        <Notes />

      </NotesContextProvider>


    </div>
  );
}

export default App;
