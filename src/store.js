import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slice/counterSlice";
import counterBReducer from "./slice/counterBSlice";
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        counterB: counterBReducer,
    },
    middleware: (getDefaultMiddleware) => {
        const middleware = getDefaultMiddleware();
        console.log("middleware", middleware);
        const updatedMiddleware= middleware.concat(logger);
        console.log("updatedMiddleware", updatedMiddleware);
        return updatedMiddleware;
        
    }
});

export default store;