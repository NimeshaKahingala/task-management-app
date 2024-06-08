import React,{useState} from "react";
import { useDispatch } from "react-redux";
import {addTodo} from "../slice/todoSlice";

function AddTodo(props) {
    const dispatch = useDispatch();

    const [newText,setNewText] = useState("");

    function handleAddClick() {
        const newTodo = {id:Date.now(), todoText:newText, isChecked:false};
       dispatch(addTodo(newTodo));
        setNewText("");
    }


    return (
        <>
            <input type='text' value={newText} onChange={(e)=> setNewText(e.target.value)}/>
            <button className='btn' onClick={handleAddClick}>ADD</button>
        </>
    )
}

export default AddTodo;