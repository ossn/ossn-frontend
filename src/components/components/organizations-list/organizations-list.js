import React from 'react';
import OrganizationTeaser from './../organization-teaser/organization-teaser';

const OrganizationList = (props) => {
  const lalalist = props.organizations.map((org, i)=>{
    return <OrganizationTeaser organization={org.node} key={i} />
  });

  return (
    <div>
      {lalalist}
    </div>
  );
}


export default OrganizationList;
