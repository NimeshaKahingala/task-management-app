import React, { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoContextProvider = ({ children }) => {
    const [todoList, setTodoList] = useState([{ id: 1, todoText: "text1", isChecked: true }, { id: 2, todoText: "text2", isChecked: false }, { id: 3, todoText: "text3", isChecked: false }, { id: 4, todoText: "text4", isChecked: true }]);

    const addTodo = (newTodo) => {
        const newTodoList = [...todoList, newTodo];
        setTodoList(newTodoList);
    }

    const handleUpdateTodo = (updatedTodo) => {
        const index = todoList.findIndex((todo) => {
            return updatedTodo.id === todo.id;
        });
        const update = [...todoList.slice(0, index), updatedTodo, ...todoList.slice(index + 1)];
        setTodoList(update);
    }

    const deleteTodo = (todoId) => {
        console.log("id", todoId);
        const index = todoList.findIndex((todo) => {
            return todoId === todo.id;
        });

        const deleteTodoList = [...todoList.slice(0, index), ...todoList.slice(index + 1)];
        setTodoList(deleteTodoList);
    }

    return (
        <TodoContext.Provider value={{ todoList, addTodo, handleUpdateTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    )
}
