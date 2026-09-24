import './App.css';
import ToDoList from "./Components/ToDoList";

function App() {
  return (
    <div className="App" 
    style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",background:"#191b1f"}}>
      <ToDoList/>
      
    </div>
  );
}

export default App;
