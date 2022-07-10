import "./TodoItem.css";

const TodoItem = ({ todo }) => (
  <div className="todo-item-container">
    <h2> {todo.text}</h2>
    <div className="buttons-container">
      <button className="remove-button">Remove</button>
      <button className="completed-button">Mark as Completed</button>
    </div>
  </div>
);

export default TodoItem;
