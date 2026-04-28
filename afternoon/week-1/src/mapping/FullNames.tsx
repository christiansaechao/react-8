import ProblemCard from "../extras/ProblemCard";

import React from "react";

export const FullNames = () => {
  const people = [
    { firstName: "Taylor", lastName: "Kim" },
    { firstName: "Jordan", lastName: "Lee" },
    { firstName: "Joel", lastName: "Montano" },
    { firstName: "Humberto", lastName: "Rodriguez" },
  ];

  return (
    <ProblemCard
      title="Map 10 — Transform shape"
      method="map"
      question="Render full names by combining firstName + lastName."
      dataPreview={people}
    >
      
      {/* CODE HERE */}
      {people.map((person) => {
        return (
          <div>
            First Name: {person.firstName}, Last Name: {person.lastName}
          </div>
        );
      })}
    </ProblemCard>
  );
};
