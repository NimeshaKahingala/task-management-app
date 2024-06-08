import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import todoReducer from './slice/todoSlice';

const store = configureStore(
    {
        reducer: {
            todo: todoReducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    }
);

export default store;