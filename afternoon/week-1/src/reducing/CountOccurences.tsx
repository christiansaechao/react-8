import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const CountOccurences = () => {
  const words = [
    "apple",
    "banana",
    "apple",
    "orange",
    "banana",
    "apple",
    "kiwi",
    "watermelon",
    "kiwi",
    "cucumber",
  ];

  const countedFruit = words.reduce(
    (acc: any, curr: any) => {
      //If the current word is not in the accumulator, we initialize it to 1, if it is increase the value by 1
      //          0 + 1
      acc[curr] = (acc[curr] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    ></ProblemCard>
  );
};
