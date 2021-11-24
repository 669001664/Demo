import React, { useContext } from 'react'
import { ColorContext, UPDATE_color } from './color'

export default function ChangeColor() {
    const { dispatch } = useContext(ColorContext)
    return (
        <div>
            <button onClick={() => dispatch({ type: UPDATE_color, color: 'yellow' })}>黄色</button>
            <button onClick={() => dispatch({ type: UPDATE_color, color: 'red' })}>红色</button>
        </div>
    )
}