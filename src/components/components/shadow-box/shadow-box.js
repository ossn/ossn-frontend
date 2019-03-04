import "./shadow-box.scss";

import React, { memo } from "react";

/**
 * Wrapper component that adds a white background and shadow around its
 * children.
 *
 * Possible props:
 *  {boolean} zeroRadius: if it exists zeroRadius variant class is added.
 *  {boolean} zeroPadding: if it exists zeroPadding variant class is added.
 *  {boolean} smallPaddings: if it exists smallPaddings variant class is added.
 *  {String} className: Custom classes added to the component.
 *
 * @param props
 */
const ShadowBox = props => {
  let classes = ["shadow-box"];

  if (props.className) classes.push(props.className);
  if (props.zeroRadius) classes.push(`shadow-box--zero-radius`);
  if (props.zeroPadding) classes.push(`shadow-box--zero-padding`);
  if (props.smallPaddings) classes.push("shadow-box--small-paddings");

  return <div className={classes.join(" ")}>{props.children}</div>;
};

export default memo(ShadowBox);
