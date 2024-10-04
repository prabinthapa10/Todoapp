import { useState } from "react";
import "./App.css";

function App() {
  // static variable which store value and array  setTodos to store many values
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  }

  return (
    <div>
      <div>Todolist Apps</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
          <button type="submit">Add</button>
        </form>
        {todos.map((todo) => (
          <li>{todo}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
