import React from 'react'
import { SwatchesPicker } from 'react-color'

export default function FullPicker(props) {
    
    console.log(props.color);
    return (
    <div className="fullPicker">
    <SwatchesPicker onChange={props.onChange}/>
    </div>
    )
}