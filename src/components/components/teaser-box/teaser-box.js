import React from 'react';

// local modules
import ShadowBox from './../shadow-box/shadow-box';

// utils
import {verboseDate} from './../../../utils/dates';

// styles
import './teaser-box.scss';

export const TeaserBox = (props) => {
  const resource = props.resource;
  // TODO: remove the Lorem ipsum
  const title = resource.shortDescription || 'Project GNOME maps was just added into the list of the available projects for contributions.';
  const date = verboseDate(resource.updatedAt) ;
  const target = resource.url;
  const image = resource.image || 'https://www.publicdomainpictures.net/pictures/230000/nahled/eins-bis-null-1498972707SZr.jpg';

  const classes = [props.className, 'teaser-box'];
  return (
    <div className={classes.join(' ')} >
      <a href={target} className="teaser-box__wrapper-link">

        <ShadowBox smallPaddings>
          <div className="teaser-box__inner">
            <div className="teaser-box__image-wrapper">
              <img src={image} alt="external resource" className="teaser-box__image"/>
            </div>
            <div className="teaser-box__text">
              <div className="teaser-box__title"> {title} </div>
              <span className="teaser-box__date"> {date} </span>
            </div>
          </div>
        </ShadowBox>
      </a>
    </div>
  );
};

export const TeaserBoxList = (props) => {

  const resources = props.items.map((resource, i) => {
    return <TeaserBox key={i} resource={resource} />
  });

  return (
    <div className="teaser-box__list-wrapper">
      {resources}
    </div>
  )
}

// export ExternalResource;
// export ExternalResourceList;
