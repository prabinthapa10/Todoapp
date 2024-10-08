import { useState } from "react";
import "./App.css";

function App() {
  // static variable which store value and array  setTodos to store many values
  const [todo, setTodo] = useState({ name: "", done: false });
  const [todos, setTodos] = useState([]);

  // handle submit
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo.name]);
    setTodo({ name: "", done: false });
  }

  function handleDelete(todo) {
    console.log("clicked", { todo });
    // this will set true when item didnot match and flase when match and remove
    setTodos(todos.filter((item) => item != todo));
  }
  return (
    <div>
      <div>Todolist Apps</div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            value={todo.name}
          />
          <button type="submit">Add</button>
        </form>
        {todos.map((todo) => (
          <div>
            <li>
              {todo}
              <button
                style={{ margin: "14px" }}
                onClick={() => handleDelete(todo)}
              >
                X
              </button>
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
