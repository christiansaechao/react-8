import { useState, useEffect, useRef } from "react";

/*
Requirements:
- Create a timer that increments every second
- Display the count
- Add a button to stop the timer
- Use cleanup to clear interval
*/

export default function Timer() {
  const [count, setCount] = useState(0);
  
  /*

   keep track of value, when updated doesn't cause a rerender

   let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
    alert('You clicked ' + ref.current + ' times!');
  }

  return (
    <button onClick={handleClick}>
      Click me!
    </button>
  );
   */
  const timerId = useRef(null);

  //  if (timerId.current) return;


  timerId.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    console.log("Rerendering");
    return () => clearInterval(timer);


  // useEffect(() => {

   
  // }, [count]);
  

  return <div>{count}</div>;
}
