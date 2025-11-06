import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UserEffectDemo = () =>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.error("Count :"+count*2)
    },[count])
    return(
        <>
        <h1>Gotcha : {count}</h1>
        <button onClick={()=>(setCount(count+1))}>
        +1
        </button>
        </>
    )
}

export default UserEffectDemo