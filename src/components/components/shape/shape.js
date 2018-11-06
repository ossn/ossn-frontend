/*
 Shape.
 */
import React, { memo } from 'react';

// styles
import './shape.scss';

const Shape = props => {
  let baseClass = ['shape'];
  let classes = [baseClass];
  if (props.triangle) classes.push(`${baseClass}--triangle`);
  if (props.className) classes.push(props.className);
  const classString = classes.join(' ');

  return <span className={classString} />;
};

export default memo(Shape);
