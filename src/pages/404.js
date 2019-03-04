import React from "react";
import { Helmet } from "react-helmet";
import BasicLayout from "../components/layouts/layout-base/layout-base";
import LayoutContained from "./../components/layouts/layout-contained/layout-contained";

import GatsbyConfig from "./../../gatsby-config";

/**
 * 404 Page.
 */
const NotFoundPage = props => (
  <BasicLayout location={props.location}>
    <Helmet>
      <title>{`NOT FOUND | ${GatsbyConfig.siteMetadata.title}`}</title>
    </Helmet>

    <LayoutContained>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </LayoutContained>
  </BasicLayout>
);

export default NotFoundPage;
