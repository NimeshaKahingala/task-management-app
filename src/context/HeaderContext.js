import React, { createContext, useState } from "react";

export const UserContext = createContext();

console.log("userCOntext",UserContext);

export const UserContextProvider= ({children})=> {

    const[user] = useState({name:"Liza", age:20});

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )

}