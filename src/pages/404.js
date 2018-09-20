import React from 'react'
import { Helmet } from 'react-helmet';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const NotFoundPage = () => (
  <div>
    <Helmet>
      <title>{['NOT FOUND', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
    </Helmet>

    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
);

export default NotFoundPage;
