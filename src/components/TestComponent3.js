import React, { useContext } from "react";
import Component4 from "./TestComponent4";
import { TimeContext } from "../context/TimeContext";

function Component3() {
    const time = useContext(TimeContext);
    return(
        <>
         <h1>Component 3 {time}</h1>
        <Component4/>
        </>
    )
}

export default Component3;