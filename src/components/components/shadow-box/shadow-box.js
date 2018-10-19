import React from 'react';
import './shadow-box.scss'

export default (props) => {
  let classes = ['shadow-box'];
  if (props.className) classes.push(props.className);
  // TODO  Check what and where we need.
  // if (props.fullWidth) classes.push('shadow-box--full-width');
  // if (props.fullHeight) classes.push('shadow-box--full-height');
  if (props.className) classes.push(props.className);
  if (props.zeroRadius) classes.push(`shadow-box--zero-radius`);
  if (props.zeroPadding) classes.push(`shadow-box--zero-padding`);

  return (
    <div className={classes.join(' ')}>
      {props.children}
    </div>
  )
}
