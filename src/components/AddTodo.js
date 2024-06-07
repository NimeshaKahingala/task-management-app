import React,{useState,useContext} from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo(props) {

    const {addTodo} = useContext(TodoContext);

    const [newText,setNewText] = useState("");

    function handleAddClick() {
        const newTodo = {id:Date.now(), todoText:newText, isChecked:false};
        addTodo(newTodo);
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