import "./toggle.scss";

import React from "react";
import { returnKeyCheck } from "./../../../utils/accessibility";

/**
 * Horizontal toggle
 *
 * As the user clicks on it the bullet moves from left to right or right to
 * left.
 * Creates toggle element used in filter component.
 *
 * @param props
 */

export default props => {
  const onClick = props.onClick;
  const classes = [props.className, "toggle"];
  if (props.active) classes.push("toggle--active");
  const classString = classes.join(" ");
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
