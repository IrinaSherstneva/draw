import React from 'react';
import DrawingLine from './DrawingLine'

export default function Drawing(props) {
    return (
      <svg className="drawing">
      { props.lines.map((line, index) => (
          <DrawingLine key={index} line={line} />
        )) }
      </svg>
    );
  }