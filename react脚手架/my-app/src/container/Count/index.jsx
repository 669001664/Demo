import React, { Component } from 'react';
import { connect } from "react-redux";
import { increment, decrement, asyncIncrement } from '../../redux/actions/count'

class Count extends Component {
    increment = () => {
        const { value } = this.selectNumber
        this.props.increment(value * 1);
    }
    decrement = () => {
        const { value } = this.selectNumber
        this.props.decrement(value * 1)
    }
    asyncIncrement = () => {
        const { value } = this.selectNumber
        this.props.asyncIncrement(value*1, 500)
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <h4>person的人数为{this.props.persons}</h4>
                <h1>当前求和为：{this.props.count}</h1>
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

const mapStateToProps = state => ({ count: state.count, persons: state.person.length})

const mapDispatchToProps =  {
        increment,
        decrement,
        asyncIncrement
}

export default connect(mapStateToProps, mapDispatchToProps)(Count);