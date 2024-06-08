import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const todoList = useSelector((state)=> state.todo);

    const todoArray = todoList?.map((todo) => {

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