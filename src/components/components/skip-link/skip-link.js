import React from "react";

/**
 * Hidden anchor to content for screen readers.
 */
const SkipLink = () => {
  return (
    <div id="skip-link">
      <a className="visually-hidden--focusable" href="#content">
        Skip to main content
      </a>
    </div>
  );
};

export default SkipLink;
