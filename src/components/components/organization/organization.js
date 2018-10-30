/*
 A single organization.
 */

import React from 'react';
import { Link } from 'react-feather';

import ShadowBox from './../shadow-box/shadow-box';

// Style.
import './organization.scss'

const Organization = (props) => {
  if (!props.organization) {
    return <div> organization not found error </div>
  }

  const title = props.organization.title;
  const url = props.organization.link;
  const icon = props.organization.attachment.publicURL;
  const description = props.organization.description;

  let classes = ['organization'];
  if (props.className) classes.push(props.className);
  let classString = classes.join(" ");

  return (
    <div className={classString}>
      <ShadowBox>
        <div className="organization__inner">
          <div className="organization__image-wrapper">
            <img  src={icon} className="organization__image" alt={title}/>
          </div>
          <a href={url} className="title title--x-small organization__title" target="_blank" >
            <Link size={18} className="icon organization__icon" /> {title}
          </a>
          <p className="organization__description">
            {description}
          </p>
        </div>
      </ShadowBox>
    </div>
  );
};

export default Organization;
