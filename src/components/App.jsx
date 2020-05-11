import React, { useState } from 'react';
import DrawArea from './DrawArea'
import ColorPicker from './ColorPicker'
import FullPicker from './FullPicker'
import Menu from './Menu'
import PaletteIcon from '@material-ui/icons/Palette';
import Fab from "@material-ui/core/Fab";
import { makeStyles } from '@material-ui/core/styles';


export default function App() {

  const [color, setColor] = useState("black");
  const [prevColor, setPrevColor] = useState("black");
  const [clicked, setClicked] = useState(false);
  const [width, setWidth] = useState('3px');
  const [selectedTool, setSelectedTool] = useState('brush');

  /* Styling for Fab */
  const useStyles = makeStyles((theme) => ({
    extendedIcon: {
      marginRight: theme.spacing(3),
    },
  }));
  const classes = useStyles();

  /* Handling functions */
  function handleColorChange(color) {
    handleToolChange('brush');
    setColor(color.hex);
  };
  function handleClick() {
    setClicked(prev => !prev);
  }
  function handleToolChange(change) {
    if (change === 'erasor') {
      setSelectedTool('erasor');
      setPrevColor(color);
      setColor('#f1f2f6');
      setWidth('50px');
    } else if (change === 'brush') {
      setSelectedTool('brush');
      setColor(prevColor);
      setWidth('3px');
    }
  }

  return (
    <>
      <DrawArea cursorColor={color} width={width} />
      <div className="tools">
        <div className="menu">
          <Menu selectedTool={selectedTool} onChange={handleToolChange} />
        </div>
        <ColorPicker color={color}
          onChange={handleColorChange} />
        <Fab variant="extended" onClick={handleClick}>
          <PaletteIcon style={{ color: color }} className={classes.extendedIcon} />
        More colors
        </Fab>
        {clicked ?
          <FullPicker className="fullPicker" color={color}
            onChange={handleColorChange} /> : null}
      </div>
    </>)
}
