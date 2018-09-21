import React from 'react';
import BasicLayout from './../components/layouts/base/base';
import { Helmet } from 'react-helmet';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const Clubs = () => {
  return (
    <BasicLayout>
      <Helmet>
        <title>{['Clubs', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
      </Helmet>

      Single club
    </BasicLayout>
  );
};

export default Clubs;
