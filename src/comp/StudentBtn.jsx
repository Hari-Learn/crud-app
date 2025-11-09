import React from "react";

const StudentBtn = (props) => {
    return(
        <button style={{marginLeft:"10px"}} onClick={props.handleClick}>{props.name}</button>
    )

}
export default StudentBtn

//Reusability — You can reuse StudentBtn in many places, and each time you can pass a different function from the parent.