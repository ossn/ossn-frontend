import './map.scss';

import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { ClubTeaser } from './../club-teaser-list/club-teaser-list';

// local modules
// styles
class ClubMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clubs: this.props.clubs || [],
      bounds: [[25.3345123, -99.5218668], [38.3345123, -80.5218668]]
    };
  }

  componentDidMount = () => {
    this.props.clubs !== this.state.clubs && this.updateClubs(this.props.clubs);
  };

  componentDidUpdate() {
    this.props.clubs !== this.state.clubs && this.updateClubs(this.props.clubs);
  }

  updateClubs = clubs => {
    let boundsArray = [];
    this.props.clubs.map((club, i) => {
      club.location && club.location.lat && club.location.lng
        ? boundsArray.push([club.location.lat, club.location.lng])
        : null;
    });

    // Ensure valid bounds with no or one result.
    boundsArray.length < 2 && boundsArray.push(this.state.bounds);
    this.setState({ clubs: this.props.clubs, bounds: boundsArray });
  };

  render() {
    const snapshot = this.state;

    // center the map.
    let bounds = snapshot.bounds;
    const markers = snapshot.clubs.map((club, i) => {
      return (
        // Check that club has a defined location.
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
        <Map bounds={bounds} style={{ height: '400px' }}>
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
