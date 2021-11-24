import React, { useContext } from 'react'
import { ColorContext } from './color'

export default function ShowColor() {
    let { color } = useContext(ColorContext)
    return (<h2 style={{ color: color }}>
        当前的颜色为{color}
    </h2>)
}
