import React from 'react';

const ModalBox = (props) => {
  return(
    <div>
      <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>Four</li>
      </ul>
      <span onClick={props.dismiss}> Dismiss </span>
    </div>
  )
}

export default ModalBox;
