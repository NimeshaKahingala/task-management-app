import React,{useState} from "react";

function AddTodo(props) {
    const [newText,setNewText] = useState("");

    function handleAddClick() {
        const newTodo = {id:Date.now(), todoText:newText, isChecked:false};
        props.addTodo(newTodo);
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