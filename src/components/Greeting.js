import React from "react";

function Greeting(props) {
    if(!props.name) {
        throw new Error("Name is required")
    }
    return(
        <h2>hello {props.name}</h2>
    )
}

export default Greeting;