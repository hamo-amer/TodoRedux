import {ADD_TODO,EDIT_TODO,DELETE_TODO,COMPLETE_TODO,FILTER} from '../const/Const'




export const addTodo=(newTask)=>{
    // newTask={id,text,isDone}
    return {
        type:ADD_TODO,
        payload:newTask
    }
}
export const removeTodo=(id)=>{
    return {
        type:DELETE_TODO,
        payload:id
    }
}
export const editTodo=(newTask)=>{
    // newTask={id,newText}
    return {
        type:EDIT_TODO,
        payload:newTask,
    }
}
export const completeTodo=(id)=>{
    return {
        type:COMPLETE_TODO,
        payload:id
    }
}

export const filterTodos=(data)=>{
    return {
        type:FILTER,
        payload:data
    }
}