import React from 'react';
import {RadioGroup,FormControl} from '@material-ui/core';
import Tool from './Tool'
import BrushIcon from '@material-ui/icons/Brush';
import ClearAllIcon from '@material-ui/icons/ClearAll';

export default function Menu(props) {
  return (
    <FormControl >
      <RadioGroup row aria-label="position" name="position" defaultValue="brush">
        <Tool checked={props.selectedTool === "brush"} handleChange={()=>props.onChange('brush')} img={<BrushIcon className='icon' />} />
        <Tool checked={props.selectedTool === "erasor"} handleChange={()=>props.onChange('erasor')} img={<ClearAllIcon className='icon' />} />
      </RadioGroup>
    </FormControl>
  );
}
