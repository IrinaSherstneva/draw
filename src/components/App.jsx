import React, { useState } from 'react';
import DrawArea from './DrawArea'
import ColorPicker from './ColorPicker'
import FullPicker from './FullPicker'
import PaletteIcon from '@material-ui/icons/Palette';
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';


export default function App(){
    const [color,setColor] = useState("red");
    const [clicked,setClicked] = useState(false);
    function handleColorChange (color) {
        setColor(color.hex);
        console.log(color.hex);
      };
      function handleClick(){
        setClicked(prev=>!prev);
      }
      const useStyles = makeStyles((theme) => ({
        extendedIcon: {
          marginRight: theme.spacing(3),
        },
      }));
      const classes = useStyles();

     return (
     <>
     <DrawArea cursorColor={color}/>
     <div className="tools">
     <ColorPicker color={color }
        onChange={ handleColorChange }/>
    {/* <button className="palette" onClick={handleClick}> */}
    <Fab variant="extended" onClick={handleClick}>
        <PaletteIcon style={{color:color}} className={classes.extendedIcon} />
        More colors
        </Fab>
        {clicked ? 
      <FullPicker className="fullPicker" color={color }
        onChange={ handleColorChange }/> : null}
      {/* </button> */}
      </div>
    </> )
}
