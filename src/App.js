import React, { useEffect } from 'react'
import TodoList from './Todo/TodoList'
import TodoAdd from './Todo/TodoAdd'
import Loader from './Loader'

function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setTodos(todos)
        setLoading(false)
      } )
  }, [])

  function removeTodo(id){
    setTodos(todos.filter(todo => todo.id !== id))
  }

  function toggleTodo(id){
    setTodos(todos.map(todo => {
      if(todo.id === id)
        todo.completed = !todo.completed
      return todo
    })
    )
  }

  function createTodo(title){
    setTodos(todos.concat({
      id:Date.now(),
      completed: false,
      title
    }))
  }
  
  return (
    <div className='wrapper' >
      <h1>Todo List</h1>
      {loading ? <Loader /> : (
      <TodoList todos={todos} deleteTodo={removeTodo} checkTodo={toggleTodo}/>
      )}
      <TodoAdd createTodo={createTodo}/>
    </div>
  )
}

export default App;
