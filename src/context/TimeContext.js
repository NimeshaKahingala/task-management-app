import React, { createContext, useEffect, useState } from "react";

export const TimeContext = createContext();

export const TimeContextProvider = ({children})=> {
    const [time,setTime] = useState(Date.now());

    useEffect(()=>{
        const intervalId = setInterval(()=>setTime(Date.now()),5000);

        return ()=>clearInterval(intervalId); //cleanup fn
    })

    return (
        <TimeContext.Provider value={time}>
            {children}
        </TimeContext.Provider>
    )
}