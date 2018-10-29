// External modules.
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';
import Map from './../components/components/map/map';
import {ClubTeaserList} from './../components/components/club-teaser-list/club-teaser-list';
import {ToggleFilter, SearchFilter} from './../components/components/filters/filters';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Clubs extends React.Component {

  /*
    Handle the value of th search and the toggle button from state.
  */
  constructor() {
    super();
    this.state = {
      view: 'list',
      searchString: ''
    };
    this.handleSearch = this.handleSearch.bind(this)
  }

  // State management functions. Used by children components.
  handleToggleMap = () => {
    const snapshot = {...this.state};
    this.setState({view: snapshot.view === 'map' ? 'list' : 'map'});
  };

  handleSearch = (event) => {
    this.setState({searchString: event.target.value});
  };

  render() {
    const snapshot = {...this.state};

    // Take a copy of the function.
    let clubs  = this.props.data.ossnApi.clubs.slice();

    // Filter clubs by the search string.
    if (snapshot.searchString !== '' || typeof snapshot.searchString !== 'undefined') {
      clubs = clubs.filter((club, i)=> {
        return club.title.toLowerCase().indexOf(snapshot.searchString.trim().toLowerCase()) >= 0;
      });
    }

    // Decide which view to show.
    const content = snapshot.view === 'map'
      ? <Map clubs={clubs} />
      : <ClubTeaserList clubs={clubs} />;

    return (
      <BasicLayout>
        <Helmet>
          <title>{['Clubs', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>
        <LayoutContained>
          <h1> Clubs </h1>
          <ToggleFilter onClick={this.handleToggleMap}
          active={snapshot.view === 'map'}
          left="list" right="map" />
          <SearchFilter placeholder="Filter" onChange={this.handleSearch}/>
          {content}
        </LayoutContained>
      </BasicLayout>
    )
  }
}

export default Clubs;

export const query = graphql`
  {
    ossnApi {
      clubs {
        id
        title:name
        subtitle: sortDescription
        imageUrl
        clubUrl
        location {
          id
          lat
          lng
        }
      }
    }
  }
`;
