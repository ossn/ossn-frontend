/*
  Wrapper it's children and adds a white background and shadow.
*/
import React, { memo } from 'react';
import './shadow-box.scss';

const ShadowBox = props => {
  let classes = ['shadow-box'];

  if (props.className) classes.push(props.className);
  if (props.zeroRadius) classes.push(`shadow-box--zero-radius`);
  if (props.zeroPadding) classes.push(`shadow-box--zero-padding`);
  if (props.smallPaddings) classes.push('shadow-box--small-paddings');

  return <div className={classes.join(' ')}>{props.children}</div>;
};

export default memo(ShadowBox);
