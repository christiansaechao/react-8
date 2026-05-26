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
import { useEffect } from "react";
// array methods: map, filter, reduce
// list / array: => returns a new array
// iterates over the list, returns new array;

function App() {
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:3000/users/1");
        console.log(response);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        throw new Error(err);
      }
    })();
  }, []);

  return <></>;
}

export default App;
