import './App.css';
// importing components
import Form from "./components/Form";
import TodoList from "./components/TodoList";


function App() {
  return (
    <div className="App">
      <header>Mina's ToDo List</header>
      <Form />
      <TodoList />
    </div>
  );
}

export default App;
