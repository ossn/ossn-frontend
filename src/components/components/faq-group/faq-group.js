// external modules
import React from 'react';

// local modules
import FaqItem from './../faq-item/faq-item';
import ShadowBox from './../shadow-box/shadow-box';

export default (props) => {
  const items = props.group.map((item, i)=>{
    return <FaqItem item={item} key={i} />
  });

  const classes = props.className
  return (
    <ShadowBox className={classes}>
      {items}
    </ShadowBox>
  )
}
