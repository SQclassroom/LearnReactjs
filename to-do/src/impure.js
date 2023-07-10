import React from "react";

let Count = 0;
const Impure = () =>{
    Count++;    
    return(
        <>
            <div>Message{Count}</div>
        </>
    );
}

export default Impure;