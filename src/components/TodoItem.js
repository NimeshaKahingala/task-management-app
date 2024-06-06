import React, { useState } from "react";

function TodoItem(props) {

    const [isBtnChecked, setIsBtnChecked] = useState(props.todoItem.isChecked);
    const [isUpdate, setIsUpdate] = useState(false);
    const [updatedText, setUpdatedText] = useState(props.todoItem.todoText);

    function handleSave() {
        const updatedTodo = { ...props.todoItem, todoText: updatedText, isChecked: isBtnChecked };
        props.handleUpdateTodo(updatedTodo);
        setIsUpdate(false);
    }

    function handleCancel() {
        setUpdatedText(props.todoItem.todoText);
        setIsBtnChecked(props.todoItem.isChecked);
        setIsUpdate(false);
    }

    function handleDelete() {
        props.deleteTodo(props.todoItem.id);
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
                <button onClick={handleDelete}>Delete</button>

                {}

            </div>
        </>
    )
}

export default TodoItem;