import React, { useEffect, useState } from "react";

/*
Requirements:
- Create a counter
- Update the document title to:
  "Count: X"
- Update title whenever count changes
*/

export default function Counter() {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(false);

  useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Begin the count</button>{" "}
      <br />
      <button onClick={() => setClick(!click)}>Clicking</button>
    </>
  );
}
