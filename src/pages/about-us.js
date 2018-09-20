import React from 'react';
import BasicLayout from './../components/layouts/base/base';
import { Helmet } from 'react-helmet';

// Import page title from gatsby config. TODO Remove and fid title another way.
import GatsbyConfig from './../../gatsby-config';

const About = () => {
  return(
    <BasicLayout>
      <Helmet>
        <title>{['About', '|', GatsbyConfig.siteMetadata.title].join(" ")}</title>
      </Helmet>

      About page
    </BasicLayout>
  );
};

export default About;
