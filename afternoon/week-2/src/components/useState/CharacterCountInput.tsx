import React, { useState } from "react";

/*
Requirements:
- Create a textarea input
- Show character count
- Limit to 100 characters
- If limit exceeded:
  - Show warning or change style
  - Disable submit button
*/

export default function CharacterCounter() {
  const [text, setText] = useState("");
  const [theme, setTheme] = useState();
  let buttonDisabled = false; // true false


  // 3rd party, api, ref
  React.useEffect(() => {

  }, [text]);

  return (
    <div>
      <input value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Type something"/>
      <p>{text.length}</p>
      <p>{text.length > 10 ? "you've exceeded character limit" : "" }</p>
      <button className="bg-orange-400 p-2" onClick={() => alert("Being Clicked")} disabled={buttonDisabled}>button</button>
    </div>
  );
}
