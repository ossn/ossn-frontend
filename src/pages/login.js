import React from "react";
import { Helmet } from "react-helmet";

import GatsbyConfig from "../../gatsby-config";
import BasicLayout from "../components/layouts/layout-base/layout-base";
import LayoutContained from "../components/layouts/layout-contained/layout-contained";
import LoginContent from "./../components/components/login-content/login-content";

/**
 * Login page.
 **/
class Login extends React.PureComponent {
  state = {
    user: undefined
  };

  render() {
    return (
      <BasicLayout location={this.props.location}>
        <Helmet>
          <title>{`Login | ${GatsbyConfig.siteMetadata.title}`}</title>
        </Helmet>
        <LayoutContained>
          <LoginContent />
        </LayoutContained>
      </BasicLayout>
    );
  }
}

export default Login;
