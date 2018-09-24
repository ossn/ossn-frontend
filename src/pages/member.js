import React from 'react';
import BasicLayout from '../components/layouts/layout-base/layout-base';
import { Helmet } from 'react-helmet';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const Members = () => {
  return (
    <BasicLayout>
      <Helmet>
        <title>{['Members', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
      </Helmet>

      single Member
    </BasicLayout>
  );
};

export default Members;
