import  ProblemCard  from "../extras/ProblemCard";
export const MultipleConditions = () => {
  const users = [
    { id: 1, name: "Chris", active: true, age: 17 },
    { id: 2, name: "Pat", active: true, age: 22 },
    { id: 2, name: "Shelly", active: false, age: 28 },
    { id: 2, name: "Charmaine", active: false, age: 62 },
    { id: 3, name: "Morgan", active: true, age: 30 },
  ];

  return (
    <ProblemCard
      title="Filter 07 — Multiple conditions"
      method="filter"
      question="Render users who are active AND age > 18."
      dataPreview={users}
    >
      {users
        .filter((user) => user.active && user.age > 18)
        .map((user) => {
          return <div key={user.id}>{user.name}</div>;
        })}
    </ProblemCard>
  );
};
