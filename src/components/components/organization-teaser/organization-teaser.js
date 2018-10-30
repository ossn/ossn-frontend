/*
  Contains organization teaser.
*/

import React from 'react';

// Style.
import './organization-teaser.scss'

const OrganizationTeaser = (props) => {
  if (!props.organization) {
    return <div> No organization found </div>;
  }

  const title = props.organization.title;
  const url = props.organization.link;
  const icon = props.organization.attachment.publicURL;

  let classes = ['organization-teaser'];
  if (props.className) classes.push(props.className);
  let classString = classes.join(" ");

  return (
    <a href={url} className={classString} title={title} target="_blank" rel="noopener noreferrer">
      <img src={icon} alt={title} />
    </a>
  );
};

export default OrganizationTeaser;
