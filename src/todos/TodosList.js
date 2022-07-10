import React from "react";
import TodoItem from "./TodoItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

const TodosList = ({ todos }) => (
  <div className="list_wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoItem key={index} todo={todo} />
    ))}
  </div>
);
export default TodosList;
