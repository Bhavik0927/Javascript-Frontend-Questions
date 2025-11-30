import React, { useState } from "react";

const ShowTasks = ({ props, setTodos }) => {
  console.log(props);

  const [updatedTask, setUpdateTask] = useState("");
  const [showEditBox, setShowEditBox] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState("");

  const toggleTodo = (id) => {
    const updated = props.map((t) =>
      t?.id === id ? { ...t, completed: !t?.completed } : t
    );

    setTodos(updated);
  };

  const openEditBox = (props) => {
    setEditingTask(props);
    setEditText(props?.task);
    setShowEditBox(true);
  };

  const updateTask = () => {
    const updated = props?.map((t) => 
        t?.id === editingTask?.id ? {...t, task: editText} : t
    )
    setTodos(updated);
    setShowEditBox(false);
    
  };

  const deleteTodo = (id) => {
    const filtered = props.filter((t) => t?.id !== id);

    setTodos(filtered);
  };

  return (
    <div>
      <ul style={{}}>
        {props?.map((todo) => (
          <li
            key={todo?.id}
            style={{ display: "flex", gap: "0.5rem", margin: "0.5rem" }}
          >
            <input
              type="checkbox"
              checked={todo?.completed}
              onChange={() => toggleTodo(todo?.id)}
            />

            <span>{todo?.task}</span>
            <button onClick={() => openEditBox(todo)}>Update</button>

            <button onClick={() => deleteTodo(todo?.id)}>Delete</button>
          </li>
        ))}
      </ul>

      {showEditBox && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "white",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h3>Edit Task</h3>
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />
          <button onClick={updateTask}>Save</button>
          <button onClick={() => setShowEditBox(false)}>Cancle</button>
        </div>
      )}
    </div>
  );
};

export default ShowTasks;
