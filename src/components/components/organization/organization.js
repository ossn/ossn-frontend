/*
   A single organization.
*/

import React from 'react';
import ShadowBox from './../shadow-box/shadow-box';

const Organization = (props) => {
  if (!props.organization) {
    return <div> organization not found error </div>
  }

  const title = props.organization.title;
  const url = props.organization.link;
  const icon = props.organization.attachment.publicURL;
  const description = props.organization.description;
  const classes = `${props.className}`;

  return (
    <div className={classes}>
      <ShadowBox>
        <img  src={icon} width="100px" alt={title}/> <br />
        <a href={url} > {title} </a>
        <p>
          {description}
        </p>
      </ShadowBox>
    </div>
  );
};

export default Organization;
