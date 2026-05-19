import React from "react";
import { deleteTodo } from "../utils/TodosUtils";
import { LineItem } from "./LineItem";
import { useTodos } from "../store/useTodos";

export const TodoItem = () => {
  const { todos } = useTodos((state) => state);

  return (
    <ul>
      {todos.map((todo, index) => {
        return <LineItem todo={todo} key={index} index="12" todos={todos} />;
      })}
    </ul>
  );
};
