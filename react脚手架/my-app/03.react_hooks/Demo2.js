import React, { useReducer } from 'react'

export default function Demo() {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'add':
                return state + 1;
            case 'sub':
                return state - 1
            default:
                return state
        }
    },0)
    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch('add')}>加一</button>
            <button onClick={() => dispatch('sub')}>减一</button>
        </div>
    )
}