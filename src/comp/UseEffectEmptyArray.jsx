import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectEmptyArray = () => {
   const [count, setCount] = useState(0);

  useEffect(() => {
    console.warn("Effect runs ONLY once (on mount)");
  }, []);

  return (
    <div>
      <h2>Effect Only Once</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default UseEffectEmptyArray

//[] means “run once on mount.”
//Updates to state or props do not trigger the effect again.