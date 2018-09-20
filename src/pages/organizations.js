import React from 'react';
import BasicLayout from './../components/layouts/base/base';
import { Helmet } from 'react-helmet';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const Organization = () => {
  return (
    <BasicLayout>
      <Helmet>
        <title>{['Organization', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
      </Helmet>

      Organization
    </BasicLayout>
  );
};

export default Organization;
