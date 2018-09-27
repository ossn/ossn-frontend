// external modules
import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

// local modules
import BasicLayout from '../components/layouts/layout-base/layout-base';
import Layout3Col from './../components/layouts/layout-3col/layout-3col';
import ShadowBox from './../components/components/shadow-box/shadow-box';
import Map from './../components/components/map/map';
import {ToggleFilter, SearchFilter} from './../components/components/filters/filters';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Clubs extends React.Component {

  constructor() {
    super();
    this.state = {
      view: 'list',
      searchString: ''
    };
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleToggleMap = () => {
    const snapshot = {...this.state};
    this.setState({view: snapshot.view === 'map' ? 'list' : 'map'});
  }

  handleSearch = (event) => {
    this.setState({searchString: event.target.value});
  }

  render() {

    const clubs = <ShadowBox data={this.props.data.ossnApi.clubs} />

    const snapshot = {...this.state}
    const content = snapshot.view === 'map'
      ? <Map />
      : (
        <Layout3Col>
          {clubs}
        </Layout3Col>
      );

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

        <div onClick={this.handleToggleMap}> Toggle map </div>
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
        location {
          id
          lat
          lng
        }
      }
    }
  }
`;
