import React, { useState, useEffect } from "react";
import "./App.css";
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  // states
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  // use effect
  useEffect(() => {
    filterHandler();
  },
  [todos, status]); // every time any of those is changed...
  // this function is run
  // functions and events

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>Mina's ToDo List</header>
      {/* pass the function to the Form component 
      This will be accessed from Form component*/}
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
    </div>
  );
}

export default App;
