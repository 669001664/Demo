import React, { useRef, useImperativeHandle, forwardRef } from 'react'

export default function Demo() {
    let input1 = useRef();
    let input2 = useRef();
    let changeInput1 = () => {
        input1.current.focus();
        input1.current.setValue('input1')
    }
    let changeInput2 = () => {
        input2.current.value = 'input2'
    }
    let RefMyInput1 = forwardRef(Myinput1);
    let RefMyInput2 = forwardRef(Myinput2)
    return (
        <div>
            <button onClick={changeInput1}>设置1</button>
            <RefMyInput1 ref={input1} />
            <button onClick={changeInput2}>设置2</button>
            <RefMyInput2 ref={input2} />
        </div>
    )
}


function Myinput1(props, ref) {
    let focInput = useRef();
    let setInput = useRef();
    useImperativeHandle(ref, () => ({
        focus() {
            focInput.current.focus()
        },
        setValue(value) {
            setInput.current.value = value;
        }
    }))
    return (
        <div>
            <div>
                获取焦点 <input ref={focInput}></input>
            </div>
            <div>
                获取值 <input ref={setInput}></input>
            </div>
        </div>

    )
}

function Myinput2(props, ref) {
    return (
        <div>
            <input ref={ref}></input>
        </div>
    )
}

