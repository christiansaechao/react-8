import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { Fruit } from "./components/Fruit";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { RenderFromData } from "./mapping/RenderFromData";
import { EvensOnly } from "./filtering/EvensOnly";
import { PreFilter } from "./filtering/PreFilter";
import { SumNumbers } from "./reducing/SumNumbers";
import { CountOccurences } from "./reducing/CountOccurences";
import ProblemCard from "./extras/ProblemCard";

// component

// port 5173
function App() {
  // html

  const cars = [{ name: "BMW", color: "red" }, "Honda", "Toyota"];

  const someFunc = () => {
    fetch("http://localhost:3000/")
  }

  return (
    <>
      <ProblemCard>
        <div></div>
      </ProblemCard>

      <CapitalizeWords />

      <RenderFromData />
      <EvensOnly />
      <PreFilter />
      {/* <SumNumbers /> */}
      <CountOccurences />
    </>
  );
}

export default App;