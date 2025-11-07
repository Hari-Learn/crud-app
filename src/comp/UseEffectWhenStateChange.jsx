import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectWhenStateChange = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

  useEffect(() => {
    console.log("Effect runs when 'count' changes:", count);
  }, [count]);

  useEffect(() => {
    console.log("Effect runs when 'name' changes:", name);
  }, [name]);

  return (
    <div>
      <h2>Effect On Count Change</h2>
      <p>Count: {count}</p>
      <p>Name: {name}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setName("John " + Math.random().toFixed(2))}>
        Change Name
      </button>
    </div>
  );
}

export default UseEffectWhenStateChange

// No array → every render

// Empty array → once (on mount)

// Specific dependencies → when those change