import React from "react";
import { useTodos } from "../store/useTodos";

export const FakeTodo = () => {
  const [state, setState] = React.useState(false);
  //   const { booleanState, invertValue, todos, addTodo } = useTodos((state) => state);
  const TodoGlobalState = useTodos((state) => state);

  return (
    <div>
      {TodoGlobalState.booleanState + ""}
      <button onClick={() => invertValue()}>Invert state value</button>
    </div>
  );
};
