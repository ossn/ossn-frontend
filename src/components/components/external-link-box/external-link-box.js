import React from 'react';

// local modules
import ShadowBox from './../shadow-box/shadow-box';

// styles
import './external-link-box.scss';

export const ExternalLinkBox = (props) => {
  const resource = props.resource;
  // TODO: remove the Lorem ipsum
  const title = resource.title;
  const target = resource.url;
  const image = resource.icon || 'https://www.publicdomainpictures.net/pictures/230000/nahled/eins-bis-null-1498972707SZr.jpg';

  const classes = [props.className, 'external-link-box'];
  return (
    <div className={classes.join(' ')} >
      <a href={target} className="external-link-box__wrapper-link">
        <ShadowBox zeroPadding>
          <div className="external-link-box__image-wrapper">
            <img src={image} alt={title} className="external-link-box__image"/>
          </div>
          <div className="external-link-box__text">
            <div className="external-link-box__title"> {title} </div>
            <div className="external-link-box__url"> {target} </div>
          </div>
        </ShadowBox>
      </a>
    </div>
  );
};

export default ExternalLinkBox;
