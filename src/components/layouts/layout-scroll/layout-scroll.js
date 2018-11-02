import './layout-scroll.scss';

import React, { memo } from 'react';

const LayoutScroll = props => {
  const baseClass = 'layout-scroll';

  // Handle extra classes. Add the classes found in props.
  let classes = [baseClass];
  if (props.className) classes.push(props.className);

  const classString = classes.join(' ');

  return <div className={classString}>{props.children}</div>;
};

export default memo(LayoutScroll);
