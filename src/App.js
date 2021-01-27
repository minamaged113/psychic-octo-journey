import React, {useState} from 'react';
import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>Mina's ToDo List</header>
      {/* pass the function to the Form component 
      This will be accessed from Form component*/}
      <Form setInputText={setInputText}/>
      <TodoList />
    </div>
  );
}

export default App;
