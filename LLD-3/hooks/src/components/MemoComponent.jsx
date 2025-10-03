import React, { useCallback, useState } from "react";
import Child from "./Child";

function MemoComponent() {
  const [count, setCount] = useState(0);

//   function sayHello(){
//     return "hello"
//   } 

  let sayHello = useCallback(()=>{
     return 'Hello'
  } , [])
  
  
  // get created as a new function
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h3>{count}</h3>

      <Child name="Click" sayHelloFn={sayHello} />
    </div>
  );
}

export default MemoComponent;
