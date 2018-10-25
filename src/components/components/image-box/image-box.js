// External modules.
import React from 'react';

// Local modules.
import './image-box.scss'
import Image from './images/panel-typewriter.jpg'

export default (props) => {
  const titleLargeTop = props.titleLargeTop ? <span>{props.titleLargeTop}</span> : '';
  const titleSmall = props.titleSmall ? <span>{props.titleSmall}</span> : '';
  const titleLargeBottom = props.titleLargeBottom ? <span>{props.titleLargeBottom}</span> : '';
  // const image = props.image ? props.image : Image;
  const image = Image;
  const quotedText = props.quotedText;
  const quoteSignature = props.quoteSignature;
  const link = props.link;

  return (
    <div>
      <img src={image} alt="" className=""/>
      <h3>
        {titleLargeTop}
        {titleSmall}
        {titleLargeBottom}
      </h3>
      <div>
      </div>
    </div>
  )
}

