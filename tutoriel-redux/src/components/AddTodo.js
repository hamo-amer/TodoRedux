import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../FolderRedux/actions'

function AddTodo() {
const [text,setText]=useState("")
const dispatch=useDispatch()
// function add
const handleSubmit=(e)=>{
    e.preventDefault()
    const newTask={
        id:Math.random(),
        text:text,
        isDone:false
    }
    setText("")
    dispatch(addTodo(newTask))
    
}
    return (
        <div className="add-todo">
        <form onSubmit={handleSubmit}>
            <input type='text' value={text} onChange={e=>setText(e.target.value)} required/>
            <button type='submit'>Add</button>
        </form>
        </div>
    )
}

export default AddTodo
