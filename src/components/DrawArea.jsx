import React, { useState,useCallback } from 'react';
import Immutable, { List } from 'immutable';
import Drawing from './Drawing'

function DrawArea (props) {

    const [boundingRect,setBoundingRect] = useState(null);
    const drawArea = useCallback(node => {
        if (node !== null) {
          setBoundingRect(node.getBoundingClientRect());
        }
      }, []);

      const [state, setState] = useState ({
        lines: new Immutable.List(),
        isDrawing: false
      });

  
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
      setState(prevState =>  ({
        lines: prevState.lines.updateIn([prevState.lines.size - 1], line => [...line,point]),
        isDrawing: prevState.isDrawing
      }));
    }
    }
  
    function handleMouseUp() {
      setState(prevState =>  ({ 
          lines: prevState.lines,
          isDrawing: false }));
    }
  
    function relativeCoordinatesForEvent(mouseEvent) {
      return new Immutable.Map({
        x: mouseEvent.clientX - boundingRect.left,
        y: mouseEvent.clientY - boundingRect.top,
        col: props.cursorColor
      });
    }


      return (
        <div
          className="drawArea"
          ref={drawArea}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <Drawing lines={state.lines} />
          </div>
      );
  }

  export default DrawArea;