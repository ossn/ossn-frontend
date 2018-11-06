/*
 The template for announcements and job listing components.
 */

import React from 'react';

// local modules
import ShadowBox from './../shadow-box/shadow-box';
import LayoutScroll from './../../layouts/layout-scroll/layout-scroll';

// utils
import { verboseDate } from './../../../utils/dates';

// styles
import './teaser-box.scss';

export const TeaserBox = props => {
  const resource = props.resource;
  const title = resource.title;
  const date = verboseDate(resource.date);
  const target = resource.link;
  const image = resource.imageUrl;

  const classes = [props.className, 'teaser-box'];
  return (
    <div className={classes.join(' ')}>
      <a href={target} className="teaser-box__wrapper-link">
        <ShadowBox smallPaddings className="teaser-box__link-inner">
          <div className="teaser-box__inner">
            <div className="teaser-box__image-wrapper">
              <img
                src={image}
                alt="external resource"
                className="teaser-box__image"
              />
            </div>
            <div className="teaser-box__text">
              <div className="teaser-box__title"> {title} </div>
              <span className="teaser-box__date"> {date} </span>
            </div>
          </div>
        </ShadowBox>
      </a>
    </div>
  );
};

export const DummyTeaserBox = props => {
  return (
    <div className="teaser-box teaser-box--dummy">
      <div className="teaser-box__wrapper-link">
        <ShadowBox smallPaddings className="teaser-box__link-inner">
          <div className="teaser-box__inner">
            <div className="teaser-box__dummy-row" />
            <div className="teaser-box__dummy-row teaser-box__dummy-row--small" />
          </div>
        </ShadowBox>
      </div>
    </div>
  );
};

export const TeaserBoxList = props => {
  let resources;
  if (props.dummyData) {
    const number = props.number || 4;
    resources = [];
    for (let i = 0; i < number; i++) resources.push(<DummyTeaserBox key={i} />);
  } else {
    resources = props.items.map((resource, i) => {
      return <TeaserBox key={i} resource={resource} />;
    });
  }

  const classes = ['teaser-box__list-wrapper'];
  if (props.dummyData) classes.push('teaser-box__list-wrapper--dummy');
  classes.push(props.className || '');

  return (
    <LayoutScroll className={classes.join(' ')} stretchItems>
      {resources}
    </LayoutScroll>
  );
};
