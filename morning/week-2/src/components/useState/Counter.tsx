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
  const [counter, setCounter] = useState(0); // default value or undefined

  function decrementCount() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0)
  }

  return (
    <div>
      {/* CODE HERE */}
      <button onClick={() => setCounter((prev) => prev + 1)}>Add</button>
      {counter}
      <button onClick={decrementCount}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
