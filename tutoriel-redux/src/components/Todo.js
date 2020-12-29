import React from 'react'
import {useDispatch} from 'react-redux'
import {removeTodo,completeTodo} from '../FolderRedux/actions'
import Modal from './ModalForm'

function Todo({todo}) {
    const dispatch=useDispatch()
    return (
        <div className="todo">
            <h4 style={todo.isDone ? {textDecoration:"line-through"}:null}>{todo.text}</h4>
            <button onClick={()=>dispatch(removeTodo(todo.id))}>Delete</button>
           <Modal todo={todo} />
            <button onClick={()=>dispatch(completeTodo(todo.id))}>Complete</button>
        </div>
    )
}

export default Todo
