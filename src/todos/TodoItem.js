import "./TodoItem.css";

const TodoItem = ({ todo, onRemovePressed, onMarkCompletedPressed }) => (
  <div className="todo-item-container">
    <h2> {todo.text}</h2>
    <div className="buttons-container">
      <button
        className="remove-button"
        onClick={() => onRemovePressed(todo.text)}
      >
        Remove
      </button>
      <button
        className="completed-button"
        onClick={() => onMarkCompletedPressed(todo.text)}
      >
        Mark as Completed
      </button>
    </div>
  </div>
);

export default TodoItem;
