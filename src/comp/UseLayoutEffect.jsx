import React from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

const UseLayoutEffect = ({text}) => {
    const refDiv = useRef();
    useLayoutEffect(() => {
        refDiv.current.style.height = "200px";
    },[text])
    return(
        
            <div style={{border: "1px solid #3498db",borderRadius:"10px",marginBottom:"10px" }} ref={refDiv} >{text}</div>
        
    )
}

export default UseLayoutEffect