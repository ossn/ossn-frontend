// External modules.
import { parse } from "query-string";
import React from "react";
import { Helmet } from "react-helmet";

import GatsbyConfig from "../../gatsby-config";
import BasicLayout from "../components/layouts/layout-base/layout-base";
import LayoutContained from "../components/layouts/layout-contained/layout-contained";
import LoginContent from "./../components/components/login-content/login-content";

class Login extends React.PureComponent {
  state = {
    user: undefined
  };

  componentDidMount = () => {
    // QUESTION: Can this be moved to auth-wrapper ?
    //is being reset at /src/actions/authActions::requestLogout()
    // localStorage item: gotrue.user.token.access_token is a copy of the token
    let { token } = parse(this.props.location.search);
    if (token) {
      // eslint-disable-next-line no-undef
      localStorage.setItem("token", token);
      this.props.navigate("/login");
    }
  };

  render() {
    return (
      <BasicLayout>
        <Helmet>
          <title>
            {["Login", "|", GatsbyConfig.siteMetadata.title].join(" ")}
          </title>
        </Helmet>
        <LayoutContained>
          <LoginContent />
        </LayoutContained>
      </BasicLayout>
    );
  }
}

export default Login;
