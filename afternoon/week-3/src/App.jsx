import { useState, useEffect } from "react";
import "./App.css";

/**
 * useState
 * TODO App
 * - add a todo
 * - delete a todo
 * - mark complete on todo
 */

// http://localhost:5173/

function App() {
  const [timerState, setTimerState] = useState(null);
  const [time, setTime] = useState(0);
  const [elapsedTime, setElapsedTime] = useState(0);

  function handleStart() {
    setTimerState((prev) => {
      const next = !prev;

      if (!next) {
        
      }

      localStorage.setItem("timerState", JSON.stringify(next));
      return next;
    });
  }

  useEffect(() => {
    if (!timerState) return;
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timerState]);

  useEffect(() => {
    const state = localStorage.getItem("timerState");

    if (state !== null) {
      setTimerState(JSON.parse(state));
    }
  }, []);

  return (
    <>
      {timerState + ""}
      {time}
      <button onClick={() => handleStart()}>
        {timerState ? "Stop" : "Start"}
      </button>
    </>
  );
}

export default App;
