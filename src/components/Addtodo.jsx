import React, { useState } from 'react'
import {useDispatch} from 'react-redux';
import { addTodo } from '../Features/Todos';
function Addtodo() {
    const [input, setInput] = useState()
    const dispatch = useDispatch()

    const todohandler = (e) =>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }
  return (
    <>
    <h3>Add Todos</h3>
    <form style={{display: "flex", justifyContent: 'space-around'}} onSubmit={todohandler}>
        <input style={{marginRight: "10px"}}type='text' value={input} placeholder='Enter the todo name...' onChange={(e) => setInput(e.target.value)}/>
        <button type='submit'>Add todo</button>
    </form>
    </>
  )
}

export default Addtodo