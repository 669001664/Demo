import React, { Component } from 'react'
import './index.css'

export default class Item extends Component {
    state = { mouse: false }
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag });
        }
    }
    handleDelete = (id) => {
        if(window.confirm('确定删除？')) {
            this.props.deleteTodo(id);
        }
    }
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked);
        }
    }

    render() {
        let { id, name, done } = this.props.todo;
        let { mouse } = this.state;
        return (
            <li backgroundcolor={mouse ? '#ddd' : 'white'} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button onClick={() => this.handleDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
