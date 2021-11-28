import React from 'react'
import { Todos } from './todos'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'


export default function App() {
    return (
        <div className="todo-container">
            <div className="todo-wrap">
                <Todos>
                    <Header />
                    <List />
                    <Footer />
                </Todos>
            </div>
        </div>
    )
}
