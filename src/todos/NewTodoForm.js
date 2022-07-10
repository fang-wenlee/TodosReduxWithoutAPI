import React, { useState } from "react";
import "./NewTodoForm.css";
import { createTodo } from "./action";
import { connect } from "react-redux";
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const [inputVal, setInputVal] = useState("");
  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        value={inputVal}
        placeholder="Enter new todo"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          let isDuplicate = todos.some((todo) => todo.text === inputVal);
          if (!isDuplicate) {
            onCreatePressed(inputVal);
            setInputVal("");
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};
const mapStateToProps = (state) => ({
  todos: state.todos
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
