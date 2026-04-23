import React from "react";
import ProblemCard from "../extras/ProblemCard";

export const CountOccurences = () => {
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

  // const fruitCount = { };

  /**
   * go through fruits, if fruit not in object, add it wiht count o
   * QUESTION: How many of each fruit are in the array?
   */

  const repeatedWord = words.reduce((fruitCount: any, word: any) => {
    fruitCount[word] = (fruitCount[word] || 0) + 1;
    return fruitCount;
  }, {});

  const keys = Object.keys(repeatedWord)

  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >

      {keys[0]} {repeatedWord.apple}; <br></br>
      {keys[1]} {repeatedWord.banana}; <br></br>
      {keys[2]} {repeatedWord.orange};
    </ProblemCard>
  );
};
