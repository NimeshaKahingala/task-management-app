import React, { useContext } from "react";
import { UserContext } from "../context/HeaderContext";

function Component4() {
    const user1 = useContext(UserContext);
    return(
        <h2>
        hello {user1.name}
        </h2>
    )
}

export default Component4;