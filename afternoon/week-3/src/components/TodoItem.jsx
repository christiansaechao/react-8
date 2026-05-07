import React from "react";
import { deleteTodo } from "../utils/TodosUtils";

type TodoItemType = {
  todo: String; 
  index: Number; 
  todos: String[];
  setTodos: (todos: String[]) => void;
}

export const TodoItem = ({ todo, index, todos, setTodos }: TodoItemType) => {
  return (
    <div style={{ display: "flex", gap: "20px"}}>
      <li key={todo}>{todo.todo}</li>
      <button
        onClick={() => {
          const updatedTodos = deleteTodo(index, todos);
          setTodos(updatedTodos);
        }}
      >
        Delete
      </button>
    </div>
  );
};
