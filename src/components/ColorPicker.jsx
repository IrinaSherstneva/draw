import React, {useState} from 'react'
import { CirclePicker } from 'react-color'
 
export default function ColorPicker(props) {
    
    console.log(props.color);
    return (
    <div className="colorPicker">
    <CirclePicker onChange={props.onChange}/>
    </div>
    )
}