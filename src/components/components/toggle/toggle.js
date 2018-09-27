import React from 'react';
import './toggle.scss';

export default (props) => {

  const onClick = props.onClick;
  const classes = [props.className, 'toggle'];
  if (props.active) classes.push('toggle--active');
  const classString = classes.join(" ");

  return (
    <div onClick={onClick} className={classString}>
      <div className="toggle__track"></div>
      <div className="toggle__bullet"></div>
    </div>
  )
}
