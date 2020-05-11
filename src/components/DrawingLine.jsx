import React from 'react';

export default function DrawingLine(props) {
    let color="red";
    let width='3px';
    const pathData = "M " + 
      props.line.map(p => {
          color=`${p.get('col')}`;
          width=`${p.get('width')}`;
          return `${p.get('x')} ${p.get('y')}`;
        })
        .join(" L ") ;
    return <path className="path" style={{stroke:color,strokeWidth:width}} d={pathData} />;
  }