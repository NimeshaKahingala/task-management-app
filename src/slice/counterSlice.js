import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count = state.count + 1
        },
        decrement: (state) => {
            state.count = state.count - 1
        },
        incrementByAmount: (state, action) => {
            state.count = state.count + action.payload
        }
    }
});

export default counterSlice.reducer;
export const{increment, decrement, incrementByAmount} = counterSlice.actions;

