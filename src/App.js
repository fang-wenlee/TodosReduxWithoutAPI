import "./app.css";

import TodosList from "./todos/TodosList";
export default function App() {
  const todos = [
    {
      text: "working on Redux",
      isCompleted: false
    }
  ];

  return (
    <div className="App">
      <TodosList todos={todos} />
    </div>
  );
}
