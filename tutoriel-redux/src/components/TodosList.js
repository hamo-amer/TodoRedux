import React from 'react'
import Todo from './Todo'
import {useSelector} from 'react-redux'

function TodosList() {
    const todos=useSelector(state=>state.TodoReducer.todos)
    //"no-filter" or "filter" or "done"
    const filter=useSelector(state=>state.TodoReducer.filtertodos)

const result= filter==="filter" ?
 todos.filter(todo=>todo.isDone===false):filter==="done" ? 
 todos.filter(todo=>todo.isDone===true):todos
    return (
        <div className="todos-list">
         {result.map((todo,i)=><Todo key={i} todo={todo} />)}   
        </div>
    )
}

export default TodosList
