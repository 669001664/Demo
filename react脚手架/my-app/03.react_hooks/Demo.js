import React, { useState, createContext, useContext } from 'react'

export default function Demo() {
    const [count, setCount] = useState(0)
    function DemoComponent() {
        let count = useContext(countContext);
        return <h2>{count}</h2>
    }
    const countContext = createContext();
    return (
        <div>
            <p>COUNT:{count}</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <countContext.Provider value={count}>
                <DemoComponent></DemoComponent>
            </countContext.Provider>
        </div>
    )
}