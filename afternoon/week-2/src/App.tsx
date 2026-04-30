import React, { useState, useEffect } from "react";
import "./App.css";
import TitleUpdater from "./components/useEffect/SyncState";
import RenderLogger from "./components/useEffect/RenderLogger";
import RandomUser from "./components/useEffect/FetchData";

function App() {
  const [click, setClick] = useState(false);
  const [second, setSecond] = useState(false);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <>
      <RandomUser />
    </>
  );
}

export default App;
