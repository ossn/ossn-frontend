import "./text-input.scss";

import React from "react";

export default props => {
  const type = props.password ? "password" : "text";
  const label = props.label ? props.label : "";
  const id = props.id ? props.id : "";
  const required = props.required || false;
  let classes = ["text-input"];
  if (props.multiline) classes.push("text-input--multiline");
  if (props.className) classes.push(props.className);

  const input = props.multiline ? (
    <textarea
      placeholder={label}
      onChange={props.onChange}
      value={props.value}
      className={classes.join(" ")}
      id={id}
      name={props.name}
      required={required}
    />
  ) : (
    <input
      type={type}
      placeholder={label}
      onChange={props.onChange}
      value={props.value}
      className={classes.join(" ")}
      id={id}
      name={props.name}
      required={required}
    />
  );

  return <div>{input}</div>;
};
