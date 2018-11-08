/*
 Shape.
 */
import React, { memo } from 'react';

// styles
import './shape.scss';

const Shape = props => {
  let baseClass = ['shape'];

  let shapeSvg = '';
  let classes = [baseClass];
  if (props.triangle) classes.push(`${baseClass}--triangle`);

  if (props.waveLarge) {
    classes.push(`${baseClass}--wave-large`);
    shapeSvg = (
      <svg
        className="shape__svg"
        xmlns="http://www.w3.org/2000/svg"
        width="58"
        height="20"
        viewBox="0 0 58 20"
      >
        <polyline
          className="shape__svg-inner"
          points="0.7 13.4 7.8 6.4 14.9 13.5 22 6.4 29 13.5 36.1 6.5 43.1 13.6 50.2 6.5 57.3 13.6 "
        />
      </svg>
    );
  }
  if (props.seafoamBlue) classes.push(`${baseClass}--seafoam-blue`);
  if (props.className) classes.push(props.className);
  const classString = classes.join(' ');

  return <span className={classString}>{shapeSvg}</span>;
};

export default memo(Shape);
