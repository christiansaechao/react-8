import ProblemCard from "../extras/ProblemCard";

/**
 * Conditionally Render the list of users that are online
 */

export const ConditionalRender = () => {
  const users = [
    { id: 1, name: "Sam", isOnline: true },
    { id: 2, name: "Kai", isOnline: false },
    { id: 3, name: "Tony", isOnline: true },
    { id: 4, name: "Ronald", isOnline: true },
    { id: 5, name: "Sharon", isOnline: false },
  ];
  
  return (
    <ProblemCard
      title="Map 07 — Conditional rendering inside map"
      method="map"
      question='Render each user with a status: "🟢 Online" or "⚪ Offline".'
      dataPreview={users}
    >

      {users.map((user) => {
        return <p>name: {user.name}, is online: {user.isOnline ? "🟢 Online":  "⚪ Offline"}</p>;
      })}

    </ProblemCard>
  );
};
