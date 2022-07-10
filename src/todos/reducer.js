import { CREATAE_TODO, REMOVE_TODO, MARK_AS_COMPLETED } from "./action";

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATAE_TODO: {
      const newTodo = {
        todo: payload.text,
        isCompleted: false
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      return state.filter((todo) => todo.text !== payload.text);
    }
    case MARK_AS_COMPLETED: {
      return state.map((todo) => {
        if (todo.text === payload.text) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    }
    default:
      return state;
  }
};
