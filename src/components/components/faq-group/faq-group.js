/*
  A wrapper for a list of FAQ entries.
  Appears at /faq-page
*/

// external modules
import React from 'react';

// local modules
import ShadowBox from './../shadow-box/shadow-box';

export default props => {
  const classes = `${props.className || ''} faq__group`;
  return (
    <div className={classes}>
      <ShadowBox>
        <div className="faq__group-header">
          <h2 title="title title--x-small">{props.header}</h2>
        </div>
        <ul className="faq__group-content">{props.children}</ul>
      </ShadowBox>
    </div>
  );
};
