import React from 'react';
import Navigation from './../../navigation/footer-navigation';
import {LinkWithIcon} from './../text-with-icon/text-with-icon';


const Footer = (props) => {
  return (
    <div>
      <div>
        <img src="#" alt="OSSN netwok" />
        <p> A global non-profit dedicated to putting you in control of your online experience and shaping the future of the web for the public good. Visit us at mozilla.org </p>
        <ul>
          <li> <LinkWithIcon label="License" link="https://google.com" /> </li>
          <li> <LinkWithIcon label="Legal" link="https://google.com" /> </li>
          <li> <LinkWithIcon label="Community" link="https://google.com" /> </li>
          <li> <LinkWithIcon label="Privacy" link="https://google.com" /> </li>
        </ul>
      </div>
      <div>
        <Navigation />
      </div>
      <div>
        <div> Our blog</div>
        <div> Facebook page </div>
        <div> @ossn_club </div>
      </div>
      <div>
        <span> Copyright © 2018 Mozilla.com — All rights reserved. </span>
      </div>
    </div>

  );
}

export default Footer;
