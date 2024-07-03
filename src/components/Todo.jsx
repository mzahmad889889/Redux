import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../Features/Todos'

function Todo() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
    <div style={{marginTop: "20px"}}>Todos</div>
    {todos.map((todo) => (
        <ul>
        <li style={{display: "flex", justifyContent:"space-between", backgroundColor:"grey"}} key={todo.id}>
            <p style={{marginLeft: '10px'}}>{todo.text}</p>
            <button style={{backgroundColor: "red"}} onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
        </ul>
))}
    </>
  )
}

export default Todo