import { useState, useEffect } from "react";
import TitleUpdater from "./SyncState";

/*
Requirements:
- Create a counter
- Log to console when component renders
- Try:
  - No dependency array
  - Empty array []
  - [count] dependency
- Observe differences
*/

export default function RenderLogger() {
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("name change");
  }, [name]);

  return (
    <div>
      {/* CODE HERE */}
      <TitleUpdater />
      <label htmlFor="name">INPUT </label>
      <input
        name="name"
        placeholder="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
}
