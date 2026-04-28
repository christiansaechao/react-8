import "./App.css";
import { BusinessCard } from "./components/BusinessCard";

/**
 * 1. Show your name
 * 2. Occupation / Last job you had
 * 3. Hobby
 */

function App() {
  return (
    <>
      <BusinessCard
        name="Chris"
        occupation="something cool"
        hobby="snowboarding"
      />

      <BusinessCard
        name="Joel"
        occupation="Senior Data Engineer"
        hobby="Hacksacking"
      />

      <BusinessCard name="Lena" occupation="Dev Ops" hobby="Crocheting" />
    </>
  );
}

export default App;
