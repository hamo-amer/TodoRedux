import {ADD_TODO,EDIT_TODO,DELETE_TODO,COMPLETE_TODO,FILTER} from '../const/Const'

const initState={
    todos:[{id:1,text:"Learn HTML",isDone:false},
           {id:2,text:"Learn CSS",isDone:false},
    ],
    filtertodos:"no-filter"
}
const TodoReducer=(state=initState,action)=>{
switch(action.type){
    case ADD_TODO:
        return {...state,todos:[...state.todos,action.payload]};                                       
    case EDIT_TODO:
        return {...state,todos:state.todos.map(todo=>
            todo.id===action.payload.id ? {...action.payload,isDone:todo.isDone}:todo)};
        case DELETE_TODO:
            return {...state,todos:state.todos.filter(todo=>todo.id!==action.payload)};
        case COMPLETE_TODO:
            return {...state,todos:state.todos.map(todo=>todo.id===action.payload ? 
                {...todo,isDone:!todo.isDone}:todo)};
        case FILTER:
            return {...state,filtertodos:action.payload}
        default:
            return state;
}
}
export default TodoReducer;