import React from 'react';
import './toggle.scss';

//utils
import { returnKeyCheck } from './../../../utils/accessibility';

export default props => {
  const onClick = props.onClick;
  const classes = [props.className, 'toggle'];
  if (props.active) classes.push('toggle--active');
  const classString = classes.join(' ');
  const ariaPressed = props.active;

  return (
    <div
      onClick={onClick}
      onKeyDown={event => {
        returnKeyCheck(event, props.onClick);
      }}
      role="button"
      aria-pressed={ariaPressed}
      className={classString}
      tabIndex={0}
    >
      <div className="toggle__track" />
      <div className="toggle__bullet" />
    </div>
  );
};
