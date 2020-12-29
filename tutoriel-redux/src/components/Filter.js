import React from 'react'
import {useDispatch} from 'react-redux'
import {filterTodos} from '../FolderRedux/actions'


function Filter() {
   const dispatch=useDispatch()
   // dispatch filterTodos "no-filter" or "filter" or "done"
    return (
        <div className="filter">
            <form>
                <label for="all">All Todos</label>
            <input type="radio" id="all" name="filt" onClick={()=>dispatch(filterTodos("no-filter"))}/>
            <label for="notDone">Filter</label>
            <input type="radio" id="notDone" name="filt" onClick={()=>dispatch(filterTodos("filter"))} />
            <label for="complete">Completed</label>
            <input type="radio"id="complete" name="filt" onClick={()=>dispatch(filterTodos("done"))}/>
            </form>
        </div>
    )
}

export default Filter
