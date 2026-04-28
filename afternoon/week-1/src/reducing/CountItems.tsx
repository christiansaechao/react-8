import React from "react";
import ProblemCard from "../extras/ProblemCard";

// cart.reduce((acc, curr) => , default value)
// cart.reduce((acc, curr) => function whatever you want to do, );

// new storage = accumulator;



// let items = ["tv", "fridge", "remote"];
// let searchTerm = 'tv'; 

// items.reduce((accumulator, item) => {
//   return item  === searchTerm ? accumulator + item
// }, "1");

export const CountItems = () => {
  const items = ["a", "b", "c", "d", 12];

  return (
    <ProblemCard
      title="Reduce 02 — Count items"
      method="reduce"
      question="Use reduce() to count how many items are in the array (without using .length)."
      dataPreview={items}
    >
      {items.reduce((acc: any, curr: any) => acc+=1, 0)}
    </ProblemCard>
  );
};
