import React, { useState } from 'react';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default function Tool(props) {
  return (
        <FormControlLabel
          value={props.value}
          control={<Radio checked={props.checked} color="default" size='small' onChange={props.handleChange}/>}
          label={props.img}
          labelPlacement="top"
        />
  )
}
