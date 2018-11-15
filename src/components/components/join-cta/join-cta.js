import './join-cta.scss';

import React, { memo } from 'react';
import Img from 'gatsby-image';

import Shape from './../shape/shape';

const JoinCta = props => {
  const baseClass = 'join-cta';
  // handle component classes. Add the variations found in props.
  let classes = [baseClass];
  if (props.tall) classes.push(`${baseClass}--tall`);
  if (props.verticalGutters) if (props.className) classes.push(props.className);

  const classString = classes.join(' ');
  return (
    // TODO Change link to read destination.
    <a href="https://www.gatsbyjs.org" className={classString}>
      <Img
        fluid={props.imageJoinCta.childImageSharp.fluid}
        className="join-cta__image"
      />
      <div className="join-cta__text">
        <span className="join-cta__text-large">Join</span>
        <span className="join-cta__text-small">the</span>
        <span className="join-cta__text-medium">network</span>
        <Shape waveLarge sunnyYellow className="join-cta__shape" />
      </div>
    </a>
  );
};

export default memo(JoinCta);
