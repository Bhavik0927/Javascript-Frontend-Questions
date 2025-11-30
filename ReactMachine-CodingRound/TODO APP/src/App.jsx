import React, { useState, useEffect } from "react";
import ShowTasks from "./Components/ShowTasks";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);


  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos])

  const handleTask = () =>{
    const newValue = {
      id:Date.now(),
      task: input,
      completed:false
    }
    setTodos([...todos, newValue]);
    setInput("");
  }

  return (
    <div className="Main-container">
      <main>
        <input
          name="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleTask}>Add Task</button>
      </main>
      <ShowTasks props={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
