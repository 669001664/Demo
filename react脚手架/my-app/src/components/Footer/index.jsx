import React, { Component } from 'react'
import './index.css'

export default class Footer extends Component {
    handleCheckAll = (event) => {
        this.props.checkAll(event.target.checked);
    }
    handleClearDoneTodo = () => {
        this.props.clearDoneTodo();
    }
    render() {
        const { todos } = this.props;
        const todoDone = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
        const total = todos.length;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll}  checked={todoDone === total && total !== 0 ? true : false} />
                </label>
                <span>
                    <span>已完成{todoDone}</span> / 全部{total}
                </span>
                <button onClick={this.handleClearDoneTodo} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
