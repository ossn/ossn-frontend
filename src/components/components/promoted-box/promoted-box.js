import React from "react";
import Shape from "./../shape/shape";

export default props => {
  return (
    <div className="promoted-box">
      <div className="promoted-box__inner">
        <h3 className="promoted-box__title"> Next steps after signing up </h3>
        <ol className="promoted-box__content">
          <li className="promoted-box__item">
            Are you part of a Club&apos;s leadership?
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfYQEKz8gMnxWrIxJZer6lJG1p08LtPboV3Aupfj2PtWmKD1A/viewform">
              Register your Club with OSSN here
            </a>
            .
          </li>
          <li className="promoted-box__item">
            Explore contribution opportunities
          </li>
          <li className="promoted-box__item"> Join our Slack instance </li>
          <li className="promoted-box__item">
            Explore available internships/jobs
          </li>
          <li className="promoted-box__item">Check the latest announcements</li>
        </ol>
      </div>
      <Shape className="promoted-box__shape" triangle sunnyYellow />
    </div>
  );
};
