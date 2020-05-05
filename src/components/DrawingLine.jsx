import React from 'react';

function DrawingLine(props) {
    const pathData = "M " +
      props.line
        .map(p => {
          return `${p.get('x')} ${p.get('y')}`;
        })
        .join(" L ");
  
    return <path className="path" d={pathData} />;
  }

  export default DrawingLine;