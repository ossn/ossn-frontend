import "./map.scss";

import React from "react";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import { ClubTeaser } from "./../club-teaser-list/club-teaser-list";

/**
 * The content for the clubs list map view.
 */
class ClubMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      clubs: this.props.clubs || [],
      bounds: [["25.3345123", "-99.5218668"], ["38.3345123", "-80.5218668"]]
    };
  }

  /**
   * Updates the state when clubs results change.
   */
  componentDidMount = () => {
    this.props.clubs !== this.state.clubs && this.updateClubs(this.props.clubs);
  };

  /**
   * Updates the state when clubs results change.
   */
  componentDidUpdate() {
    this.props.clubs !== this.state.clubs && this.updateClubs(this.props.clubs);
  }

  /**
   * Updates clubs and map bounds according to club locations.
   *
   * @param {Array} clubs
   */
  updateClubs = clubs => {
    let boundsArray = clubs.reduce((accumulator, currentValue) => {
      if (
        currentValue.location &&
        currentValue.location.lat &&
        currentValue.location.lng
      ) {
        accumulator.push([
          currentValue.location.lat,
          currentValue.location.lng
        ]);
      }
      return accumulator;
    }, []);

    /**
     * Ensures valid bounds with no or one result.
     */
    boundsArray.length < 1
      ? (boundsArray = [
          ["25.3345123", "-99.5218668"],
          ["38.3345123", "-80.5218668"]
        ])
      : boundsArray.length < 2 &&
        boundsArray.push(
          [boundsArray[0][0] * 0.9, boundsArray[0][1] * 0.9],
          [boundsArray[0][0] / 0.9, boundsArray[0][1] / 0.9]
        );

    this.setState({ clubs: this.props.clubs, bounds: boundsArray });
  };

  render() {
    const { bounds, clubs } = this.state;

    /**
     * Adds the club markers.
     *
     * @param {Array} clubs
     */
    const markers = clubs.map(club => {
      return (
        // Check that club has a defined location.
        club.location && club.location.lat && club.location.lng ? (
          <Marker
            position={[club.location.lat, club.location.lng]}
            key={club.id}
          >
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
          height: "400px",
          overflow: "hidden",
          minWidth: "200px",
          display: "inline-block",
          width: "100%"
        }}
        className="map"
      >
        <Map bounds={bounds} style={{ height: "400px" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright" target="_blank"
        rel="noopener noreferrer">OpenStreetMap</a> contributors'
          />
          {markers}
        </Map>
      </div>
    );
  }
}

export default ClubMap;
