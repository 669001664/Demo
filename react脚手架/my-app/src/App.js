import React, { useState, useEffect } from 'react'

export default function Demo() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true)
    useEffect(() => {
        console.log('父 did');
        return () => {
            console.log('父 willunmount');
        }
    },[])
    function DemoComponent() {
        useEffect(() => {
            console.log('子 did');
            return () => {
                console.log('子 willunmount');
            }
        })
        return <p>子组件</p>
    }
    return (
        <div>
            <p>COUNT:{count}</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
            {show&&<DemoComponent />}
            <button onClick={() => setShow(!show)}>切换</button>
        </div>
    )
}