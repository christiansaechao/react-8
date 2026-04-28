import { useState } from "react";
import ContactForm from "./SimpleForm";

/*
Requirements:
- Create a toggle between light mode and dark mode
- Change background color and text color
- Button text should update based on current mode
  (e.g., "Switch to Dark Mode")
*/

/**
 * 1. User clicks button
 * 2. invoke setTheme
 * 3. add tailwind class to className on div
 *
 * {conditional ? success : failure }
 */

// = assignment, == loose comparison, === strict comparison

export default function ThemeToggle({ name }: { name: string }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    // const themeVar = (theme === "light") ? "dark" : "light";
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <div className={`${theme === "light" ? "bg-red-500" : "bg-green-500"} p-4`}>
      {name}
      {theme}
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}
