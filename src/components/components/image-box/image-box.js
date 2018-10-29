/*
  The news tiles.
  Appears at / (home page)
*/

// External modules.
import React from 'react';

// Local modules.
import './image-box.scss'
// import Image from './images/panel-typewriter.jpg'

export default (props) => {
  const baseClass = 'image-box';


  const titleLargeTop = props.titleLargeTop ? <span>{props.titleLargeTop}</span> : '';
  const titleSmall = props.titleSmall ? <span>{props.titleSmall}</span> : '';
  const titleLargeBottom = props.titleLargeBottom ? <span>{props.titleLargeBottom}</span> : '';
  // const image = props.image ? props.image : Image;
  // const image = Image;
  // const quotedText = props.quotedText;
  // const quoteSignature = props.quoteSignature;
  // const link = props.link;

  // handle component classes. Add the variations found in props.
  let classes = [baseClass];
  if (props.tall) classes.push(`${baseClass}--tall`);
  const classString = classes.join(" ");

  return (
    <div className={classString}>
      {/*<img src={image} alt="" className="image-box__image"/>*/}
      <div className="image-box__text">
        <h3>
          {titleLargeTop}
          {titleSmall}
          {titleLargeBottom}
        </h3>
      </div>
    </div>
  )
}
