import React, { useEffect, useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);

  function doubleValue(num) {
    console.log(`Running for ${num}`)
    for(let i=0 ; i<1000000000; i++){
        // some processing
    }
    return num * 2;
  }

  const doubledValue = useMemo(()=>doubleValue(number), [number])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{count}</h1>

      <input value={number} onChange={(e) => setNumber(e.target.value)} />

      <h3>Doubled Value : {doubledValue}</h3>
    </div>
  );
}

export default Memo;
