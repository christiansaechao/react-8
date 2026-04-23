import React from "react";
import ProblemCard from "../extras/ProblemCard";
// reduce(acc, curr) => {}, default value

export const SumNumbers = () => {
  const nums = [1, 2, 3, 4];

  const sumNumbersReduced = nums.reduce((total, num) => {
    return total + num;
  }, 0);

  return (
    <ProblemCard
      title="Reduce 01 — Sum numbers"
      question="Use reduce() to compute the sum, then render it."
      dataPreview={nums}
    >
      <div>{sumNumbersReduced}</div>
    </ProblemCard>
  );
};
