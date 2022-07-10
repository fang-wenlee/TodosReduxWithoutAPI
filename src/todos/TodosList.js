import React from "react";
import TodoItem from "./TodoItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { removeTodo, maskAsCompleted } from "./action";
import { connect } from "react-redux";

const TodosList = ({ todos = [], onRemovePressed, onMarkCompletedPressed }) => (
  <div className="list_wrapper">
    <NewTodoForm />
    {todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        onRemovePressed={onRemovePressed}
        onMarkCompletedPressed={onMarkCompletedPressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onMarkCompletedPressed: (text) => dispatch(maskAsCompleted(text))
});
export default connect(mapStateToProps, mapDispatchToProps)(TodosList);
