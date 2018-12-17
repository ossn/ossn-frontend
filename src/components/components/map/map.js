import React from 'react';

// local modules
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { ClubTeaser } from './../club-teaser-list/club-teaser-list';

// styles
import './map.scss';

class ClubMap extends React.Component {
  render() {
    // center the map.
    const position = [38.3345123, -99.5218668];
    const clubs = this.props.clubs || [];

    const markers = clubs.map((club, i) => {
      return (
        <Marker
          position={[
            club.location || 38.0582213,
            club.location || -115.6058512
          ]}
          key={i}
        >
          <Popup className="map__popup">
            <ClubTeaser club={club} />
          </Popup>
        </Marker>
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
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          {markers}
        </Map>
      </div>
    );
  }
}

export default ClubMap;
