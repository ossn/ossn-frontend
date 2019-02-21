/*
  Hidden anchor to content for screen readers.
*/

import React from "react";

class SkipLink extends React.Component {
  render() {
    return (
      <div id="skip-link">
        <a className="visually-hidden--focusable" href="#content">
          Skip to main content
        </a>
      </div>
    );
  }
}

export default SkipLink;
