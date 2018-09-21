import React from 'react';
import {Link} from 'gatsby';

export const LabelWithIcon = (props) => {
  return(
    <div>
      <div> o </div>
      <div> {props.label} </div>
    </div>
  );
}

export const LinkWithIcon = (props) => {
  return(
    <a href={props.link}>
      <div> o </div>
      <div> {props.label} </div>
    </a>
  );
}

export const InternalLinkWithIcon = (props) => {
  return(
    <Link to={this.props.link}>
      <div> o </div>
      <div> {props.label} </div>
    </Link>
  );
}
