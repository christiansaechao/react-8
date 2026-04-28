import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { FullNames } from "./mapping/FullNames";
import { PriceGreaterThan20 } from "./filtering/PriceGreaterThan20";
import { MultipleConditions } from "./filtering/MultipleConditions";
import { SearchSimulation } from "./filtering/SearchSimulation";
import { CountItems } from "./reducing/CountItems";
// array methods: map, filter, reduce
// list / array: => returns a new array
// iterates over the list, returns new array;

function App() {
  return (
    <>
      <CapitalizeWords />
      <ConditionalRender />
      <FullNames />
      <PriceGreaterThan20 />
      <MultipleConditions />
      <SearchSimulation searchTerm="Node" />
      <CountItems />
    </>

  );
}

export default App;