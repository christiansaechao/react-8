import React from "react";
import ProblemCard from "../extras/ProblemCard.tsx";

type SearchSimulationType = {
  searchTerm: string;
};

// == and ===
// == loose comparison | data types don't matter | 12 == "12"
// === strict comparison 1 === true | 0 === false

export const SearchSimulation = ({ searchTerm }: SearchSimulationType) => {
  const items = ["React", "JavaScript", "TypeScript", "Node", "CSS"];

  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm: searchTerm }}
    >
      This is example: {searchTerm}
      {items
        .filter((item) => {
          return item.includes(searchTerm);
        })
        .map((item) => {
          return <p key={item}>{item}</p>;
        })}
    </ProblemCard>
  );
};