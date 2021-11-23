import React, { Component } from 'react'
import Item from '../Item'
import './index.css'

export default class List extends Component {
    render() {
        let { todos, updateTodo, deleteTodo } = this.props;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
                    })
                }
            </ul>
        )
    }
}
