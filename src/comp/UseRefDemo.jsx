import React from "react";
import { useRef } from "react";

const UseRefDemo = () =>{
    const inputRef = useRef()
    const handleRef = () => {
        inputRef.current.focus()
    }
    return(
        <>
            <input type="text" 
                ref={inputRef}
            />
            <button onClick={handleRef}>Ref Demo</button>
        </>
    )
}

export default UseRefDemo