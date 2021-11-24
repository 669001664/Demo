import React, { createContext, useReducer } from 'react'
import { nanoid } from 'nanoid';

export const todosContext = createContext();

let reducer = (state, action) => {
    switch (action.type) {
        case 'deleteTodo':
            state = state.filter(item => {
                if (item.id !== action.id) return item;
                else return false
            })
            return state;
        case 'addTodo':
            const { keyCode, target } = action.value;
            if (keyCode !== 13) return state;
            if (target.value.trim() === '') return state;
            const todoObj = { id: nanoid(), name: target.value, done: false }
            state = [todoObj, ...state]
            target.value = '';
            return state;
        case 'changeTodo':
            let { todo, e } = action.value;
            state = state.map((item) => {
                if (item.id === todo.id)
                    return { ...item, done: e.target.checked }
                else return item;
            })
            return state
        case 'checkAll':
            state = state.map((item) => {
                return { ...item, done: action.value.target.checked }
            })
            return state;
        case 'deleteAllDone':
            state = state.filter(item => {
                return !item.done
            })
            return state;
        default:
            return state;
    }
}
export const Todos = props => {
    const todoList = [
        { id: 1, name: '上班', done: true },
        { id: 2, name: '吃饭', done: true },
        { id: 3, name: '睡觉', done: false }
    ]
    const [todos, dispatch] = useReducer(reducer, todoList)
    return (
        <todosContext.Provider value={{ todos, dispatch }}>
            {props.children}
        </todosContext.Provider>
    )

}