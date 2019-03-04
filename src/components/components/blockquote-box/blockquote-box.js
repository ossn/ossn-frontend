import "./blockquote-box.scss";

import React from "react";
import Shape from "./../shape/shape";

/**
 * Blockquote box used at front page boxes.
 * Displays text and author.
 *
 * @param props
 */
export default props => {
  const blockquote = props.blockquote;
  const author = props.author;

  return (
    <div className="blockquote-box">
      <blockquote className="blockquote-box__blockquote">
        <p className="blockquote-box__text">
          <svg
            className="blockquote-box__svg blockquote-box__svg--before"
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="65"
            viewBox="-0.2 0.1 84.2 64.5"
          >
            <title>“</title>
            <path
              d="M33.4 46c-2.2 9.6-8.6 18.1-18.7 18.1 -8.4 0-14.4-5.5-14.4-14.4 0-19.3 13.5-36 30.2-49l10.1 10.4c-5.5 3.7-16.1 13.2-18.7 21C29.4 33.3 35.6 36.4 33.4 46zM76 46c0 9.8-8.6 18.1-18.7 18.1 -8.4 0-14.4-5.5-14.4-14.4 0-19.3 13.5-36 30.2-49l10.1 10.4c-5.5 3.7-16.1 13.2-18.7 21C72 33.3 76 39.4 76 46z"
              fill="#FFF"
            />
          </svg>
          {blockquote}
          <svg
            className="blockquote-box__svg blockquote-box__svg--after"
            xmlns="http://www.w3.org/2000/svg"
            width="84"
            height="65"
            viewBox="-0.2 0.1 84.2 64.5"
          >
            <title>“</title>
            <path
              d="M50.1 18.9c2.2-9.6 8.6-18.1 18.7-18.1 8.4 0 14.4 5.5 14.4 14.4 0 19.3-13.5 36-30.2 49l-10.1-10.4c5.5-3.7 16.1-13.2 18.7-21C54.1 31.6 47.9 28.6 50.1 18.9zM7.5 18.9c0-9.8 8.6-18.1 18.7-18.1 8.4 0 14.4 5.5 14.4 14.4 0 19.3-13.5 36-30.2 49L0.3 53.8c5.5-3.7 16.1-13.2 18.7-21C11.5 31.6 7.5 25.6 7.5 18.9z"
              fill="#FFF"
            />
          </svg>
        </p>
        <Shape waveLarge seafoamBlue className="blockquote-box__wave" />
        <footer>
          <cite className="blockquote-box__cite">{author}</cite>
        </footer>
      </blockquote>
    </div>
  );
};
