// external modules
import React from 'react';
import { Helmet } from 'react-helmet';

// local modules
import Opportunties from './../components/components/opportunities/opportunities'
import BasicLayout from '../components/layouts/layout-base/layout-base';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

class  Opportunities extends React.Component {
  render() {
    return (
      <BasicLayout>
        <Helmet>
          <title>{['Opportunities', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
        </Helmet>
        <Opportunties />
      </BasicLayout>
    );
  }
};

export default Opportunities;
