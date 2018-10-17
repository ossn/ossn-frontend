import React from 'react';
import Navigation from './../../navigation/footer-navigation/footer-navigation';
import {LinkWithIcon} from './../text-with-icon/text-with-icon';

// styles
import './footer.scss';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer__items-wrapper">
        <div className="footer__item footer__item--information">
          <img src="#" alt="OSSN netwok" />
          <p> A global non-profit dedicated to putting you in control of your online experience and shaping the future of the web for the public good. Visit us at mozilla.org </p>
          <ul className="footer__information-link-list">
            <li className="footer__information-link"> <LinkWithIcon label="License" link="https://google.com" /> </li>
            <li className="footer__information-link"> <LinkWithIcon label="Legal" link="https://google.com" /> </li>
            <li className="footer__information-link"> <LinkWithIcon label="Community" link="https://google.com" /> </li>
            <li className="footer__information-link"> <LinkWithIcon label="Privacy" link="https://google.com" /> </li>
          </ul>
        </div>
        <div className="footer__item footer__item--navigation">
          <Navigation />
        </div>
        <div className="footer__item footer__item--social">
          <div> Our blog</div>
          <div> Facebook page </div>
          <div> @ossn_club </div>
        </div>
      </div>
      <div className="footer__copyrights">
        <span> Copyright © 2018 Mozilla.com — All rights reserved. </span>
      </div>
    </div>

  );
}

export default Footer;
