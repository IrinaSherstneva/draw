import React, { useState, useCallback } from 'react';
import Immutable from 'immutable';
import Drawing from './Drawing'
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import ClearIcon from '@material-ui/icons/Clear';

export default function DrawArea(props) {

  const [boundingRect, setBoundingRect] = useState(null);
  const drawArea = useCallback(node => {
    if (node !== null) {
      setBoundingRect(node.getBoundingClientRect());
    }
  }, []);
  const [state, setState] = useState({
    lines: new Immutable.List(),
    isDrawing: false
  });

  /* Handling functions */
  function clearState() {
    setState(prevState => ({
      lines: new Immutable.List(),
      isDrawing: prevState.isDrawing
    })
    );
  }
  function handleMouseDown(mouseEvent) {
    if (mouseEvent.button !== 0) {
      return;
    }
    const point = relativeCoordinatesForEvent(mouseEvent);
    setState(prevState => ({
      lines: prevState.lines.push(new Immutable.List([point])),
      isDrawing: true
    }));
  }
  function handleMouseMove(mouseEvent) {
    if (state.isDrawing) {
      const point = relativeCoordinatesForEvent(mouseEvent);
      setState(prevState => ({
        lines: prevState.lines.updateIn([prevState.lines.size - 1], line => [...line, point]),
        isDrawing: prevState.isDrawing
      }));
    }
  }
  function handleMouseUp() {
    setState(prevState => ({
      lines: prevState.lines,
      isDrawing: false
    }));
  }
  function relativeCoordinatesForEvent(mouseEvent) {
    return new Immutable.Map({
      x: mouseEvent.clientX - boundingRect.left - 5,
      y: mouseEvent.clientY - boundingRect.top - 4,
      col: props.cursorColor,
      width: props.width
    });
  }


  return (
    <div
      className="drawArea"
      ref={drawArea}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}>
      <Drawing lines={state.lines} />
      <Tooltip title="Clear all" aria-label="clear">
        <Fab onClick={clearState} className='deleteButton' color="default">
          <ClearIcon />
        </Fab>
      </Tooltip>
    </div>
  );
}