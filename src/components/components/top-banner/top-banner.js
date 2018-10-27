/*
  Top banner.
*/
import React from 'react';

// styles
import './top-banner.scss';

export default (props) => {
  let classes = ['top-banner'];

  if (props.page === 'home') classes.push('top-banner--home');
  if (props.page === 'organizations') classes.push('top-banner--organizations');

  return (
    <div className={classes.join(' ')}>
      <img src={props.src} alt={props.alt} className="top-banner__image"/>
    </div>
  );
}
