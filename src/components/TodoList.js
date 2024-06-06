import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
    const todoArray = props.todoList.map((todo) => {

        return (
            <TodoItem todoItem={todo} key={todo.id} handleUpdateTodo={props.handleUpdateTodo} deleteTodo={props.deleteTodo}/>
        )
    })

    return (
        <>
         {todoArray}
        </>
    )
}

export default TodoList;