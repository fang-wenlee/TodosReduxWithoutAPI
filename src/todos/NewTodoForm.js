import React, { useState } from "react";
import "./NewTodoForm.css";

const NewTodoForm = () => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="new-todo-form">
      <input
        type="text"
        value={inputVal}
        placeholder="Enter new todo"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
};

export default NewTodoForm;
