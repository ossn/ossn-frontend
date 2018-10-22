// External modules.
import React from 'react'
import { Helmet } from 'react-helmet';

// Local modules.
import BasicLayout from '../components/layouts/layout-base/layout-base';
import LayoutContained from './../components/layouts/layout-contained/layout-contained';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const NotFoundPage = () => (
  <BasicLayout>
    <Helmet>
      <title>{['NOT FOUND', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
    </Helmet>

    <LayoutContained>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </LayoutContained>
  </BasicLayout>
);

export default NotFoundPage;
