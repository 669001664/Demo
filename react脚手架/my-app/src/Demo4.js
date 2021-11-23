import React, { useState, useCallback, useEffect } from 'react'

function useWinSize() {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
    })
    const reSize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        })
    }, [])
    useEffect(() => {
        window.addEventListener('resize', reSize)
        return () => {
            window.removeEventListener('resize', reSize)
        }
    }, [])

    return size
}

function Demo() {
    const clientSize = useWinSize();
    return (
        <div>
            <h2>{clientSize.width}x{clientSize.height}</h2>
        </div>
    )
}

export default Demo
