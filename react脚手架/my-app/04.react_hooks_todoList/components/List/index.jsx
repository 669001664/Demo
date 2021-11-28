import React, { useContext, useState } from 'react'
import { todosContext } from '../../todos';
import './index.css'

export default function List() {
    const { todos, dispatch } = useContext(todosContext);
    const [mouse, setMouse] = useState(false)
    return (
        <ul className="todo-main">
            {
                todos.map((todo) => {
                    return (
                        <li style={{ backgroundColor: mouse === todo.id ? '#ddd' : 'white' }} onMouseEnter={() => setMouse(todo.id)} onMouseLeave={() => setMouse(false)} key={todo.id}>
                            <label>
                                <input type="checkbox" checked={todo.done} onChange={(e) => { dispatch({ type: 'changeTodo', value: { todo, e } }) }} />
                                <span>{todo.name}</span>
                            </label>
                            <button onClick={() => dispatch({ type: 'deleteTodo', id: todo.id })} style={{ display: mouse === todo.id ? 'block' : 'none' }} className="btn btn-danger">删除</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}
