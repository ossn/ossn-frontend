import React from 'react';
import { Link } from 'gatsby';

export const LabelWithIcon = props => {
  return (
    <div>
      <div>
        {' '}
        <span> o </span> {props.label}{' '}
      </div>
    </div>
  );
};

export const LinkWithIcon = props => {
  return (
    <a href={props.link}>
      <div>
        {' '}
        <span> o </span> {props.label}{' '}
      </div>
    </a>
  );
};

export const InternalLinkWithIcon = props => {
  return (
    <Link to={props.link}>
      <div>
        {' '}
        <span> o </span> {props.label}{' '}
      </div>
    </Link>
  );
};
