import ProblemCard from "../extras/ProblemCard";

export const CapitalizeWords = () => {
  const animals = ["dog", "cat", "bird"];

  return (
    <ProblemCard
      title="Map 03 — Capitalize words"
      method="map"
      question="Render each word with the first letter capitalized."
      dataPreview={animals}
    >
      {animals.map((animal) => {

        const fullWord = animal.charAt(0).toUpperCase() + animal.slice(1);
        
        return <div>{fullWord}</div>;
      })}
    </ProblemCard>
  );
};
