import React from 'react';

export default (props) => {

  const type = props.password ? 'password' : 'text';
  const label = props.label ? props.latbel : '';
  const input = props.multiline
    ? <textarea placeholder={label} onChange={props.onChange}
      value={props.value}></textarea>
    : <input type={type} placeholder={label} onChange={props.onChange}
        value={props.value}/>;

  return (
    <div>
      {input}
    </div>
  )
}
