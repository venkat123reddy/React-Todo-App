import { useState } from 'react'
import './App.css'
import TodoApp from './Todo-Components/TodoApp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <TodoApp/>
    
    </>
  )
}

export default App
