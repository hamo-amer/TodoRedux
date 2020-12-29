import {combineReducers} from 'redux'
import TodoReducer from './TodoReducer'


const allReducers=combineReducers({
    TodoReducer,
})
export default allReducers;