import React, { Component } from 'react';
import store from '../../redux/store';
import { increment, decrement, asyncIncrement } from '../../redux/createReducer'
class Count extends Component {
    increment = () => {
        const { value } = this.selectNumber
        store.dispatch(increment(value * 1))
    }
    decrement = () => {
        const { value } = this.selectNumber
        store.dispatch(decrement(value * 1))
    }
    asyncIncrement = () => {
        const { value } = this.selectNumber
        store.dispatch(asyncIncrement(value * 1, 500))
    }
    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.asyncIncrement}>异步加</button>&nbsp;
            </div>
        );
    }
}

export default Count;