import React, { useContext } from "react";
import Component3 from "./TestComponent3";
import { UserContext } from "../context/HeaderContext";

function Component2() {
    const {age} = useContext(UserContext);
    return(
        <>
         <h1>Component 2 {age}</h1>
        <Component3/>
        </>
    )
}

export default Component2;