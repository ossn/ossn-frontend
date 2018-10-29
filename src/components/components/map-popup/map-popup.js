import React from 'react';
import {Link} from 'gatsby';

// styles
import './map-popup.scss';

export default (props) => {

  return  (
    <div className="map-popup">
        <div className="map-popup__image-wrapper">
          <img src={props.club.imageUrl} alt={props.club.title} className="map-popup__image" />
        </div>
        <div className="map-popup__text">
          <div className="title title--x-small map-popup__title"> RIT Linux user group </div>
          <div className="map-popup__description"> Description </div>
          <div className="button button--x-small">
            <Link to="/club" className="map-popup__link"> Club page</Link>
          </div>
        </div>
    </div>
  );
}
