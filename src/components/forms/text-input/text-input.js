import React from 'react';

import './text-input.scss';

export default (props) => {

  const type = props.password ? 'password' : 'text';
  const label = props.label ? props.label : '';
  let classes = ['text-input'];
  if (props.multiline) classes.push('text-input--multiline');
  if (props.className) classes.push(props.className);

  const input = props.multiline
    ? <textarea placeholder={label} onChange={props.onChange}
      value={props.value} className={classes.join(' ')}></textarea>
    : <input type={type} placeholder={label} onChange={props.onChange}
        value={props.value} className={classes.join(' ')}/>;

  return (
    <div>
      {input}
    </div>
  )
}
