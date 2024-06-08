import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {updateTodo,deleteTodo} from "../slice/todoSlice";

function TodoItem(props) {

    const dispatch = useDispatch();

    const [isBtnChecked, setIsBtnChecked] = useState(props.todoItem.isChecked);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updatedText, setUpdatedText] = useState(props.todoItem.todoText);

    function handleSave() {
        const updatedTodo = { ...props.todoItem, todoText: updatedText, isChecked: isBtnChecked };
        dispatch(updateTodo(updatedTodo))
        setIsUpdate(false);
    }

    function handleCancel() {
        setUpdatedText(props.todoItem.todoText);
        setIsBtnChecked(props.todoItem.isChecked);
        setIsUpdate(false);
    }



    return (
        <>
            <div className='todo-item'>
                {isUpdate ? <input value={updatedText} onChange={(e) => setUpdatedText(e.target.value)}></input>
                    : <div>{updatedText}</div>}

                <input type='checkbox' checked={isBtnChecked} onChange={(e) => setIsBtnChecked(!isBtnChecked)} />

                {isUpdate ? <>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>
                    : <button onClick={() => setIsUpdate(true)}>Update</button>}
                <button onClick={()=> dispatch(deleteTodo(props.todoItem.id))}>Delete</button>

                {}

            </div>
        </>
    )
}

export default TodoItem;