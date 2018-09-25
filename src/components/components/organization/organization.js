import React from 'react';

const Organization = (props) => {
  if (!props.organization) {
    return <div> organization not found error </div>
  }

  const classes = `${props.className}`
  return (
    <div className={classes}>
      <img  src={props.organization.image || "#"} width="100px" alt={props.organization.title}/> <br />
      <a href={props.organization.link || "#"} > {props.organization.title} </a>
      <p>
        {props.organization.descripion}
      </p>
    </div>
  );
}

export default Organization;
