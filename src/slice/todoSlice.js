import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: [{ id: 1, todoText: "text1", isChecked: true }, { id: 2, todoText: "text2", isChecked: false }, { id: 3, todoText: "text3", isChecked: false }, { id: 4, todoText: "text4", isChecked: true }],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload]
        },
        updateTodo: (state,action) => {
            const index = state.findIndex((todo) => {
                return action.payload.id === todo.id;
            });
            return [...state.slice(0, index), action.payload, ...state.slice(index + 1)];
        },
        deleteTodo: (state,action) => {
            const index = state.findIndex((todo) => {
                return action.payload === todo.id;
            });

           return [...state.slice(0, index), ...state.slice(index + 1)];
        }
    }
});

export default todoSlice.reducer;
export const {addTodo, updateTodo,deleteTodo} = todoSlice.actions;