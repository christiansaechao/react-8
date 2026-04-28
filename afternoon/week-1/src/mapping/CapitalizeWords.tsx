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
      {/* code here */}
      {animals.map((animal) => {
        return <div>{animal}</div>;
      })}
    </ProblemCard>
  );
};
