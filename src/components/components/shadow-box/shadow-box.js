/*
  Wrapper it's children and adds a white background and shadow.
*/
import React from 'react';
import './shadow-box.scss';

export default props => {
  let classes = ['shadow-box'];

  // TODO  Check what and where we need.
  // if (props.fullWidth) classes.push('shadow-box--full-width');
  // if (props.fullHeight) classes.push('shadow-box--full-height');
  if (props.className) classes.push(props.className);
  if (props.zeroRadius) classes.push(`shadow-box--zero-radius`);
  if (props.zeroPadding) classes.push(`shadow-box--zero-padding`);
  if (props.smallPaddings) classes.push('shadow-box--small-paddings');
  if (props.className) classes.push(props.className);

  return <div className={classes.join(' ')}>{props.children}</div>;
};
