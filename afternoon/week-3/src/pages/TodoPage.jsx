import React, { useState } from "react";
import { TodoItem } from "../components/TodoItem";

export const TodoPage = () => {
  const [inputValue, setInputValue] = useState();
  return (
    <>
      <h2>Todo App</h2>
      <input
        value={inputValue}
        style={{ border: "1px solid white" }}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          const updateTodos = handleSubmit(todos, inputValue);
          setTodos(updateTodos);
        }}
      >
        Add Todo
      </button>

      <TodoItem />
    </>
  );
};
