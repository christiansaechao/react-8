import { useState } from "react";

import "./App.css";
import Counter from "./components/useState/Counter";
import ContactForm from "./components/useState/SimpleForm";
import ThemeToggle from "./components/useState/ThemeToggle";

function App() {

  const [value, setValue] = useState();
  /**
   * 
   */



  return (
    <>
      {/* <Counter /> */}
      <ThemeToggle name={value}/>
      <ContactForm setterFunction={setValue} />
    </>
  );
}

export default App;
