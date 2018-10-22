import React from 'react';

import './layout-contained.scss'



const LayoutContained = (props) => {

  const baseClass = 'layout-contained';

  // Handle extra classes. Add the classes found in props.
  let classes = [baseClass];
  if (props.className) classes.push(props.className);

  const classString = classes.join(" ");

  return(
    <div className={classString}>
      {props.children}
    </div>
  );
};

export default LayoutContained;
