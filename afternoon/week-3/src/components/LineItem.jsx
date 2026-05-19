import React from "react";
import { useTodos } from "../store/useTodos";

export const LineItem = ({ todo }) => {
  const { addTodo } = useTodos((state) => state);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <li>{todo.todo}</li>
      <button
        onClick={() => {
          const updatedTodos = deleteTodo(index, todos);
          addTodo(todo.todo);
        }}
      >
        Delete
      </button>
    </div>
  );
};
