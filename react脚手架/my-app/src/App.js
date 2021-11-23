import React, { useState, useEffect, useMemo, memo } from 'react'

function DemoComponent({ memoValue }) {
    console.log('dddd');
    useEffect(() => {
        console.log('子 did');
        return () => {
            console.log('子 willunmount');
        }
    })
    return <p>子组件{memoValue.memo}</p>
}
let MemoChild = memo(DemoComponent)
export default function Demo() {
    const [count, setCount] = useState(0);
    const [show, setShow] = useState(true)
    const [memo, setMemo] = useState(20)
    const memoValue = useMemo(() => ({ memo }), [memo])
    useEffect(() => {
        console.log('父 did');
        return () => {
            console.log('父 willunmount');
        }
    }, [])
    return (
        <div>
            <p>COUNT:{count}</p>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <button onClick={() => setMemo(memo + 1)}>click memo </button>
            {show && <MemoChild memoValue={memoValue} />}
            <button onClick={() => setShow(!show)}>切换</button>
        </div>
    )
}