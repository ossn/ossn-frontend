import './map.scss';

import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';

import { ClubTeaser } from './../club-teaser-list/club-teaser-list';

// local modules
// styles
class ClubMap extends React.Component {
  render() {
    // center the map.
    const position = [38.3345123, -99.5218668];
    const clubs = this.props.clubs || [];

    const markers = clubs.map((club, i) => {
      return (
        // Check that clug has a defined location.
        club.location && club.location.lat && club.location.lng ? (
          <Marker position={[club.location.lat, club.location.lng]} key={i}>
            <Popup className="map__popup">
              <ClubTeaser club={club} />
            </Popup>
          </Marker>
        ) : null
      );
    });

    return (
      <div
        style={{
          height: '400px',
          overflow: 'hidden',
          minWidth: '200px',
          display: 'inline-block',
          width: '100%'
        }}
        className="map"
      >
        <Map center={position} zoom={5.25} style={{ height: '400px' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {markers}
        </Map>
      </div>
    );
  }
}

export default ClubMap;
