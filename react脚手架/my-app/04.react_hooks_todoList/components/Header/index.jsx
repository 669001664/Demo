import React, { useContext } from 'react'
import { todosContext } from '../../todos'
import './index.css'

export default function Header() {
    const { dispatch } = useContext(todosContext)
    return (
        <div className="todo-header">
            <input type="text" onKeyUp={(e) => {dispatch({ type: 'addTodo', value: e })}} placeholder="请输入你的任务名称，按回车键确认" />
        </div>
    )
}
