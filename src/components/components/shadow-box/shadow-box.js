import React from 'react';

import './shadow-box.scss'

const ShadowBox = (props) => {
  const content = props.data.map((element, i) => {
    return (
      <div className="shadow-box" key={i}>
        { i }
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