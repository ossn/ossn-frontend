/*
  A wrapper for a list of FAQ entries.
  Appears at /faq-page
*/

// external modules
import React from 'react';

// local modules
import FaqItem from './../faq-item/faq-item';
import ShadowBox from './../shadow-box/shadow-box';

export default (props) => {
  const items = props.group.map((item, i)=>{
    return <FaqItem item={item} key={i} />
  });

  const classes = `${props.className} faq__group`;
  return (
    <div className={classes}>
      <ShadowBox>
        <div className="faq__group-header">
          <h2 title="title title--x-small">
            This is a header
          </h2>
        </div>
        <div>
          {items}
        </div>
      </ShadowBox>
    </div>
  )
}
