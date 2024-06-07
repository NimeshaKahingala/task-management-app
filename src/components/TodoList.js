import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { TodoContext } from "../context/TodoContext";

function TodoList(props) {

    const {todoList} = useContext(TodoContext);

    const todoArray = todoList.map((todo) => {

        return (
            <TodoItem todoItem={todo} key={todo.id}/>
        )
    })

    return (
        <>
         {todoArray}
        </>
    )
}

export default TodoList;