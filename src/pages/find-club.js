// external modules
import React from 'react';
import { Helmet } from 'react-helmet';

// local modules
import BasicLayout from '../components/layouts/layout-base/layout-base';
import Layout3Col from './../components/layouts/layout-3col/layout-3col';
import Map from './../components/components/map/map';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class Clubs extends React.Component {

  constructor() {
    super();
    this.state = {
      view: 'list'
    }
  }

  handleToggleMap = ()=> {
    const snapshot = {...this.state};
    this.setState({view: snapshot.view === 'map' ? 'list' : 'map'});
    console.log('map toggle');
  }

  render() {
    const snapshot = {...this.state}
    const content = snapshot.view === 'map'
      ? <Map />
      : (
        <Layout3Col>
          <div> This is not a map </div>
          <div> This is not a map </div>
          <div> This is not a map </div>
          <div> This is not a map </div>
          <div> This is not a map </div>
          <div> This is not a map </div>
          <div> This is not a map </div>
        </Layout3Col>
      );


    return (
      <BasicLayout>
        <Helmet>
          <title>{['Clubs', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>
        <div onClick={this.handleToggleMap}> Toggle map </div>
        <div>
          {content}
        </div>

      </BasicLayout>
    )
  }
}

export default Clubs;
