// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// local modules
import BasicLayout from '../components/layouts/layout-base/layout-base';
import Map from './../components/components/map/map';
import {ClubTeaserList} from './../components/components/club-teaser-list/club-teaser-list';
import {ToggleFilter, SearchFilter} from './../components/components/filters/filters';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Clubs extends React.Component {

  /*
    Handle the value of th seaarch and the toggle button from state
  */
  constructor() {
    super();
    this.state = {
      view: 'list',
      searchString: ''
    };
    this.handleSearch = this.handleSearch.bind(this)
  }

  // state management functions. Used by children components.
  handleToggleMap = () => {
    const snapshot = {...this.state};
    this.setState({view: snapshot.view === 'map' ? 'list' : 'map'});
  }

  handleSearch = (event) => {
    this.setState({searchString: event.target.value});
  }

  render() {
    const snapshot = {...this.state}

    // take a copy of the function
    let clubs  = this.props.data.ossnApi.clubs.slice();

    // filter clubs by the seaarch string
    if (snapshot.searchString !== '' || typeof snapshot.searchString !== 'undefined') {
      clubs = clubs.filter((club, i)=> {
        return club.title.toLowerCase().indexOf(snapshot.searchString.trim().toLowerCase()) >= 0;
      });
    }

    // decide which view to show
    const content = snapshot.view === 'map'
      ? <Map />
      : <ClubTeaserList clubs={clubs} />;

    return (
      <BasicLayout>
        <Helmet>
          <title>{['Clubs', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>
        <div>
        <ToggleFilter onClick={this.handleToggleMap}
          active={snapshot.view === 'map'}
          left="list" right="map" />
          <SearchFilter placeholder="Filter" onChange={this.handleSearch}/>
        </div>

        <div>
          {content}
        </div>

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
