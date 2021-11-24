import React, { useContext } from 'react'
import { todosContext } from '../../todos';
import './index.css'

export default function Footer() {
    const { todos, dispatch } = useContext(todosContext);
    const todoDone = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length;
    return (
        <div className="todo-footer">
            <label>
                <input onChange={(e) => dispatch({ type: 'checkAll', value: e })} checked={todoDone === total && total !== 0 ? true : false} type="checkbox" />
            </label>
            <span>
                <span>已完成{todoDone}</span> / 全部{total}
            </span>
            <button onClick={() => {dispatch({type: 'deleteAllDone'})}} className="btn btn-danger">清除已完成任务</button>
        </div>
    )
}
