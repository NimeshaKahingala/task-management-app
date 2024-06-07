import { createSlice } from "@reduxjs/toolkit";

const counterBSlice = createSlice({
    name: 'counterBB',
    initialState: { count: 0 },
    reducers: {
        incrementB: (state) => {
            state.count = state.count + 1
        },
        decrementB: (state) => {
            state.count = state.count - 1
        },
        incrementByAmountB: (state, action) => {
            state.count = state.count + action.payload
        }
    }
});

export default counterBSlice.reducer;
export const{incrementB, decrementB, incrementByAmountB} = counterBSlice.actions;

