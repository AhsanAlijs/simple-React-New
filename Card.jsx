import React, { useRef, useState } from 'react'

const Card = ({ todo, deleteTodo, editTodo, index }) => {
    const [showTodo, setShowTodo] = useState(true);
    const editedValue = useRef();

    const saveEditTodo = () => {
        editedValue.current.value === "" ? alert('update value') :
            editTodo(index, editedValue.current.value)
        setShowTodo(true)
    }
    return (
        <div>
            {showTodo ? <div>
                <h4>{todo}</h4>
                <div style={{display:'flex' , alignItems:'center' , justifyContent:'center',gap:'5px'}}>
                    <button onClick={() => deleteTodo(index)}>Delete</button>
                    <button onClick={() => setShowTodo(false)}>Edit</button>
                </div>
            </div> : <div style={{marginTop:'20px'}}>
                <input type="text" placeholder='edited value' ref={editedValue} />
                <button onClick={saveEditTodo}>save</button>
            </div>}
        </div>
    )
}
export default Card