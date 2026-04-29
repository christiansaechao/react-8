import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SmartCounter from "./components/useState/Counter";
import ThemeToggle from "./components/useState/ThemeToggle";
import ContactForm from "./components/useState/SimpleForm";
import CharacterCounter from "./components/useState/CharacterCountInput"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <ContactForm /> */}
      <CharacterCounter/>
    </>
  );
}

export default App;
