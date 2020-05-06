import React, { useState } from 'react';
import DrawArea from './DrawArea'
import ColorPicker from './ColorPicker'

export default function App(){
    const [color,setColor] = useState("red");
    function handleChangeComplete (color) {
        setColor(color.hex);
        console.log(color.hex);
      };
     return (
     <>
     <DrawArea cursorColor={color}/>
     <ColorPicker color={color }
        onChange={ handleChangeComplete }/>
    <button btn btn-lg>Pick another color</button>
    </> )
}
