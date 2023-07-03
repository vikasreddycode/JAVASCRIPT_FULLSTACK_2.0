import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removetodo } from './Features/todoSlice'

export default function todos() {
 const todos = useSelector((state)=> state.todos1.todos);
 const dispatch = useDispatch();
  return (
    <div>
        {
            todos.map((todo) => (
              <>
                <h1 key={todo.id}>{todo.text}</h1>
                <button onClick={() => dispatch(removetodo(todo.id)) }>
                  hello
                </button>
              </>
            ))
        }
    </div> 
  )
}
