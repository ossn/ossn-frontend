// External modules.
import React from 'react';
import {Link} from 'gatsby';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import Navigation from './../../navigation/footer-navigation/footer-navigation';

// Styles.
import './footer.scss';

const Footer = (props) => {
  return (
    <div className="footer">
      <LayoutContained className="footer__inner">
        <nav className="footer__primary">
          <Link to="/" className="footer__primary-logo" activeClassName="is-active">
            <span className="footer__ossn-logo">Open Source Student Network</span>
            <span className="footer__mozilla-logo">Mozilla</span>
          </Link>

          <div className="footer__sections">
            <Navigation />
            <section className="footer__section footer__section--social">
              <h5 className="footer__heading"> Keep in touch </h5>
              <ul className="footer__list">
                <li>
                  {/*TODO add correct url*/}
                  <a className="footer__link" href="/">Our blog</a>
                </li>
                <li>
                  <a className="footer__link" href="/">Facebook page</a>
                </li>
                <li>
                  <a  className="footer__link"href="/">Twitter page</a>
                </li>
              </ul>
            </section>
          </div>
        </nav>

        <nav className="footer__secondary">
          <div className="footer__legal">
            <p className="footer__license">
              Portions of this content are ©1998–2018 by individual mozilla.org contributors.
              Content available under a <a rel="license" href="https://www.mozilla.org/foundation/licensing/website-content/">Creative Commons license</a>.
            </p>
            <ul className="footer__terms">
              <li>
                <a rel="nofollow" href="https://www.mozilla.org/privacy/websites/">Website Privacy Notice</a>
              </li>
              <li>
                <a rel="nofollow" href="https://www.mozilla.org/privacy/websites/#cookies">Cookies</a>
              </li>
              <li>
                <a rel="nofollow" href="https://www.mozilla.org/about/legal/">Legal</a>
              </li>
            </ul>
          </div>
        </nav>
      </LayoutContained>
    </div>
  );
};

export default Footer;
