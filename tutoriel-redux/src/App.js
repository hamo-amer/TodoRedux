import React from 'react'

import './App.css';
import TodosList from './components/TodosList'
import AddTodo from './components/AddTodo'
import Filter from './components/Filter'


function App() {
  
  
  return (
    <div className="App">
      <Filter />
      <AddTodo />
   <TodosList  />
    </div>
  );
}

export default App;
