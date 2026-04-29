import { useState } from "react";

/*
Requirements:
- Create a toggle between light mode and dark mode
- Change background color and text color
- Button text should update based on current mode
  (e.g., "Switch to Dark Mode")
*/

// = assignment, == loose comparing 2 == "2", === strictly comparing 2 === 2

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  const lightTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div 
      className={`btn btn-outline ${theme === "light" ? "bg-red-500" : "bg-blue-200 "} p-4 m-2 border-1`}
    >
      <button onClick={lightTheme}>Toggle Theme: {theme}</button>
    </div>
  );
}
