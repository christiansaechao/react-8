import { useState } from "react";

/*
Requirements:
- Display a count starting at 0
- Add buttons for:
  - Increment (+1)
  - Decrement (-1)
  - Reset to 0
- Prevent count from going below 0
- Show a message when count is 0 (e.g., "You reached the limit")
*/

export default function SmartCounter() {
  const [count, setCount] = useState(0); // number


  function ButtonActions(action: string) {
    if (action === "add") {
      setCount(prev => prev + 1);
    }
  }

  const Increment = () => {
    setCount(prev => prev + 2); // 2
    setCount(prev => prev + 2); // 2 + 2
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  return (
    <div>
      <button onClick={() => ButtonActions("add")}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
      <span>count = {count}</span>
    </div>
  );
}
