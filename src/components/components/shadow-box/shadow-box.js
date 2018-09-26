import React from 'react';

import './shadow-box.scss'

const ShadowBox = (props) => {
  const content = props.data.map((element, i) => {
    console.log(element);
    return (
      <div className="shadow-box" key={i}>
        { element.text } <br />
        { element.url } <br />
        Date: { element.date }
      </div>
    )
  });

  return (
    <>
    { content }
    </>
  )
};

export default ShadowBox;