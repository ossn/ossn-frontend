/*
 Contains the footer section.
 */
import './footer.scss';

import React from 'react';
import { connect } from 'react-redux';
import { mapUserToProps } from './../../../utils/redux-utils';
import { Link } from 'gatsby';
import MediaQuery from 'react-responsive';
import LayoutContained from '../../layouts/layout-contained/layout-contained';
import Navigation from '../../navigation/footer-navigation/footer-navigation';

class Footer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  isUserLoggedIn = () => {
    return !!this.props.user.user;
  };

  render() {
    // trivially added link list.
    const footerNavigationList1 = [
      {
        title: 'Clubs',
        target: '/clubs'
      },
      {
        title: 'Members',
        target: '/members'
      },
      {
        title: 'Opportunities',
        target: '/contribute'
      },
      this.isUserLoggedIn()
        ? {
            title: 'Logout',
            logout: true
          }
        : {
            title: 'Log In/SignUp',
            login: true
          },
      {
        title: 'Affiliations',
        target: '/organizations'
      },
      {
        title: 'About Us',
        target: '/about'
      }
    ];

    const footerNavigationList2 = [
      {
        title: 'Our blog',
        target: 'https://opensource.mozilla.community',
        external: true
      },
      {
        title: 'Facebook page',
        target: 'https://opensource.mozilla.community',
        external: true
      },
      {
        title: 'Twitter page',
        target: 'https://opensource.mozilla.community',
        external: true
      }
    ];

    return (
      <div className="footer">
        <LayoutContained className="footer__inner">
          <nav className="footer__primary">
            <Link
              to="/"
              className="footer__primary-logo"
              activeClassName="is-active"
            >
              <span className="footer__ossn-logo">
                Open Source Student Network
              </span>
              <span className="footer__mozilla-logo">Mozilla</span>
            </Link>

            <div className="footer__sections">
              <MediaQuery minWidth={480} className="footer__section-item">
                <Navigation
                  title="Navigation"
                  links={footerNavigationList1}
                  className="footer__section--navigation"
                  id="footer-section-navigation"
                />
                <Navigation
                  title="Keep in touch"
                  links={footerNavigationList2}
                  className="footer__section--social"
                  id="footer-section-social"
                />
              </MediaQuery>
              <MediaQuery maxWidth={479} className="footer__section-item">
                <Navigation
                  title="Navigation"
                  isMobile
                  links={footerNavigationList1}
                  className="footer__section--navigation"
                />
                <Navigation
                  title="Keep in touch"
                  isMobile
                  links={footerNavigationList2}
                  className="footer__section--social"
                />
              </MediaQuery>
            </div>
          </nav>

          <nav className="footer__secondary">
            <div className="footer__legal">
              <p className="footer__licence">
                Portions of this content are ©1998–2018 by individual
                mozilla.org contributors. Content available under a{' '}
                <a
                  rel="license"
                  href="https://www.mozilla.org/foundation/licensing/website-content/"
                >
                  Creative Commons license
                </a>
                .
              </p>
              <ul className="footer__terms">
                <li>
                  <a
                    rel="nofollow"
                    href="https://www.mozilla.org/privacy/websites/"
                  >
                    Website Privacy Notice
                  </a>
                </li>
                <li>
                  <a
                    rel="nofollow"
                    href="https://www.mozilla.org/privacy/websites/#cookies"
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a rel="nofollow" href="https://www.mozilla.org/about/legal/">
                    Legal
                  </a>
                </li>
                <li>
                  <a rel="nofollow" href="https://github.com/mozilla/coss">
                    Community Participation Guidelines
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </LayoutContained>
      </div>
    );
  }
}

export default connect(mapUserToProps)(Footer);
