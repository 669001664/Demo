import React, { createContext, useReducer } from 'react'

export const UPDATE_color = 'UPDATE_color'
export const ColorContext = createContext();

const reducer = (color, action) => {
    switch (action.type) {
        case UPDATE_color:
            return action.color
        default:
            return color
    }
}

export const Color = props => {
    const [color, dispatch] = useReducer(reducer, 'blue')
    return (
        <ColorContext.Provider value={{ color, dispatch }}>
            {props.children}
        </ColorContext.Provider>
    )
}