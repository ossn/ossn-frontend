import "./text-input.scss";

import React from "react";

/**
 * Creates form text input.
 * According to the props the generated input might be textarea or textfield.
 * The implementation of the onChange logic has to be at an higher level and
 * passed as prop.
 *
 * Props might contain:
 *  {String} password: it sets the type of the input
 *  {String} label: the input label
 *  {String} id: the input id
 *  {boolean} required
 *  {boolean} showLabel
 *  {boolean} multiline: defines textarea or input tag
 *  {String} className: classes added to the component
 *
 * @param props
 */
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
      placeholder={props.showLabel ? "" : label}
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
      placeholder={props.showLabel ? "" : label}
      onChange={props.onChange}
      value={props.value}
      className={classes.join(" ")}
      id={id}
      name={props.name}
      required={required}
    />
  );

  return (
    <div>
      {props.showLabel && (
        <label className="text-input__label" htmlFor={id}>
          {label}
        </label>
      )}
      {input}
    </div>
  );
};
