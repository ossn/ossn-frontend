/*
  Contains organization teaser.
*/

import React from 'react';

const OrganizationTeaser = (props) => {
  if (!props.organization) {
    return <div> No organization found </div>;
  }
  return (
    <a href={props.organization.link || "#"} className={props.className || ''}>
      <img src={props.organization.image || "#"} alt={props.organization.title} width="100px"/>
    </a>
  );
};

export default OrganizationTeaser;
