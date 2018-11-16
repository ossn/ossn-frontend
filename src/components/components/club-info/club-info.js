import React from 'react';

import ShadowBox from './../shadow-box/shadow-box';
import {
  Github,
  Link,
  Event,
  Map,
  Email
} from './../formated-text/formated-text';
import './club-info.scss';

/*
  An Item of the list
  props:
    link (String): the link that it points to.
*/
export class ClubInfoItem extends React.PureComponent {
  render() {
    let classes = ['club-info__item'];
    if (this.props.major) classes.push('club-info__item--major');

    let content;
    if (this.props.link) {
      content = (
        <a href={this.props.link} className={classes.join(' ')}>
          {this.props.children}
        </a>
      );
    } else {
      content = <div className={classes.join(' ')}>{this.props.children}</div>;
    }

    return <>{content}</>;
  }
}

/*

  Box containing information about a club.

  props:
    Club (object): Club object to show information.

*/
export default class ClubInfo extends React.PureComponent {
  render() {
    const location = 'club location';
    const github = 'clubProfile';
    const webpage = 'myclub.com';
    const email = 'mail@mail.com';
    const event = {
      title: 'event title',
      subtitle: 'subtitle'
    };

    return (
      <ShadowBox zeroPadding className="club-info__wrapper">
        <ul className="club-info">
          <li className="club-info__item-wrapper club-info__item-wrapper--major club-info__item-wrapper--map">
            <ClubInfoItem link="#" major>
              <Map value={location} />
            </ClubInfoItem>
          </li>
          <li className="club-info__item-wrapper club-info__item-wrapper--major club-info__item-wrapper--graph">
            <ClubInfoItem link="#" major>
              <Github value={github} />
            </ClubInfoItem>
          </li>
          <li className="club-info__item-wrapper">
            <ClubInfoItem link="#">
              <Link value={webpage} />
            </ClubInfoItem>
          </li>
          <li className="club-info__item-wrapper">
            <ClubInfoItem link={`mailto:${email}`}>
              <Email value={email} />
            </ClubInfoItem>
          </li>
          <li className="club-info__item-wrapper">
            <ClubInfoItem>
              <Event value={event.title} secondary={event.subtitle} />
            </ClubInfoItem>
          </li>
        </ul>
      </ShadowBox>
    );
  }
}
