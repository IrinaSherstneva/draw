import React from 'react';

function DrawingLine(props) {
    let color="red";
    const pathData = "M " + 
      props.line.map(p => {
          color=`${p.get('col')}`;
          return `${p.get('x')} ${p.get('y')}`;
        })
        .join(" L ") ;
    return <path className="path" style={{stroke:color}} d={pathData} />;
  }

  export default DrawingLine;