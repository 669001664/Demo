import React from 'react'
import ChangeColor from './ChangeColor'
import { Color } from './color'
import ShowColor from './ShowColor'

export default function Demo() {
    return (
        <div>
            <Color>
                <ShowColor></ShowColor>
                <ChangeColor></ChangeColor>
            </Color>
        </div>
    )
}