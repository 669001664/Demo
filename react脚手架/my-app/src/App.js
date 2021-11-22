import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default class App extends Component {
    state = {
        todos: [
            { id: 1, name: '上班', done: true },
            { id: 2, name: '吃饭', done: true },
            { id: 3, name: '睡觉', done: false }
        ]
    }
    addToto = (todoObj) => {
        const { todos } = this.state;
        const newTodos = [todoObj, ...todos];
        this.setState({ todos: newTodos });
    }
    deleteTodo = (id) => {
        const { todos } = this.state;
        const newTodos = todos.filter((todo) => {
            if (todo.id !== id) {
                return todo;
            } else {
                return false;
            }
        })
        this.setState({ todos: newTodos });
    }
    updateTodo = (id, done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todo) => {
            if (todo.id === id) return { ...todo, done }
            else return todo
        })
        this.setState({ todos: newTodos });
    }
    checkAll = (done) => {
        const { todos } = this.state;
        const newTodos = todos.map((todo) => {
            return { ...todo, done }
        })
        this.setState({ todos: newTodos })
    }
    clearDoneTodo = () => {
        const { todos } = this.state;
        const newTodos = todos.filter((todo) => {
            return !todo.done
        })
        this.setState({ todos: newTodos });
    }
    render() {
        const { todos } = this.state;
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addToto={this.addToto} />
                    <List deleteTodo={this.deleteTodo} todos={todos} updateTodo={this.updateTodo} />
                    <Footer checkAll={this.checkAll} clearDoneTodo={this.clearDoneTodo} todos={todos} />
                </div>
            </div>
        )
    }
}
