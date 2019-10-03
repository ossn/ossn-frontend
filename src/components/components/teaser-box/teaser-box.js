/*
 The template for announcements and job listing components.
 */
import "./teaser-box.scss";

import React from "react";
import ShadowBox from "./../shadow-box/shadow-box";
import LayoutScroll from "./../../layouts/layout-scroll/layout-scroll";
import { verboseDate } from "./../../../utils/dates";

/**
 * The template for announcements and job listing components for logged in
 * users.
 *
 * @param props
 */
export const TeaserBox = props => {
  const resource = props.resource;
  let title = resource.title;
  const date = verboseDate(Number(props.resource.date)) || "";
  const target = resource.link || "#";
  const image = resource.imageUrl;

  const classes = [props.className, "teaser-box"];
  const imageContent = image && (
    <div className="teaser-box__image-wrapper">
      <img src={image} alt={title} className="teaser-box__image" />
    </div>
  );

  return (
    <div className={classes.join(" ")}>
      <a
        href={target}
        className="teaser-box__wrapper-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShadowBox smallPaddings className="teaser-box__link-inner">
          <div className="teaser-box__inner">
            {imageContent}
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

/**
 * The template teaser box used for logged out users.
 *
 * @param props
 */
export const DummyTeaserBox = props => {
  const classes = [props.className, "teaser-box teaser-box--dummy"];

  return (
    <div className={classes.join(" ")}>
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

/**
 * The wrapper for teaser box elements.
 *
 * @param props
 */
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

  const classes = ["teaser-box__list-wrapper"];
  if (props.dummyData) classes.push("teaser-box__list-wrapper--dummy");
  classes.push(props.className || "");

  return (
    <LayoutScroll className={classes.join(" ")} stretchItems>
      {resources}
    </LayoutScroll>
  );
};
