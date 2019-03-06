import React, { memo } from "react";
import { Helmet } from "react-helmet";

import BasicLayout from "../components/layouts/layout-base/layout-base";
import GatsbyConfig from "./../../gatsby-config";
import LayoutContained from "./../components/layouts/layout-contained/layout-contained";
import { PlainHeader } from "./../components/components/plain-header/plain-header";

/**
 * Privacy policy page.
 */
const PrivacyPolicy = props => {
  return (
    <BasicLayout location={props.location}>
      <Helmet>
        <title>{`Privacy Notice | ${GatsbyConfig.siteMetadata.title}`}</title>
      </Helmet>

      <LayoutContained>
        <PlainHeader
          title="Website Privacy Notice and Terms"
          subtitle="Version 1.0 March 1st 2019"
        />
        <p className="highlighted-text highlighted-text--small">
          We care about your privacy. That’s why Mozilla (that&#39;s us) puts
          you in charge of the information you share on the Open Source Student
          Network (OSSN) website.We also follow our{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.mozilla.org/privacy/"
          >
            Mozilla Privacy Policy
          </a>{" "}
          for handling information you share with us. Here’s what you should
          know about the Open Source Student Network site:
          <ul>
            <li>
              <b>Personal Data.</b> To create an account, you must provide
              Mozilla with your name and either an email address or a Github
              account. You may provide more information with your account,but
              all other information is optional. Only your name is public by
              default.
            </li>
            <li>
              <b>Cookies and Analytics.</b> To improve our website, we use
              Google Analytics which places a cookie on your device to obtain
              metrics (such as number of site visits, source of web traffic,
              duration people stay on the site, and bounce rates). For more
              information, see our{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwifpuSu4M3gAhVKrVQKHecCCsYQFjAAegQIBxAB&url=https%3A%2F%2Fwww.mozilla.org%2Fen-US%2Fprivacy%2Fwebsites%2F&usg=AOvVaw1RZS2oczUre0JinqgjR6yp"
              >
                Websites, Communications and Cookies Privacy Notice
              </a>
              .
            </li>
            <li>
              <b>Emails.</b> If you subscribe to our newsletter, we may send you
              occasional emails about topics we think you’d be interested in. We
              use{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mailchimp.com/legal/privacy/"
              >
                MailChimp
              </a>{" "}
              to send these emails and you can unsubscribe from the footer of
              the email.
            </li>
          </ul>
        </p>
      </LayoutContained>
    </BasicLayout>
  );
};

export default memo(PrivacyPolicy);
