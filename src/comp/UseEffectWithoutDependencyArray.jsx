import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectWithoutDependencyArray = () => {
    const [x,setX] = useState(0)
    useEffect(()=>{
         console.log("Effect runs after EVERY render");
    })
    return (
         <div>
      <h2>Effect Every Render</h2>
      <p>Count: {x}</p>
      <button onClick={() => setX(x + 1)}>Increment</button>
    </div>
    )
}

export default UseEffectWithoutDependencyArray