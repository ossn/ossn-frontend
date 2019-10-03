import "./leader-tools-list.scss";
import "./leader-tools.scss";

import React from "react";
import {
  Archive,
  Briefcase,
  Clipboard,
  ExternalLink,
  FileText,
  Minus,
  Plus
} from "react-feather";
import MediaQuery from "react-responsive";

import Layout2Col from "./../../layouts/layout-2col/layout-2col";
import ShadowBox from "./../shadow-box/shadow-box";

/**
 * LeaderToolList, LeaderTool and AllLeaderTools components.
 * Appear at /leaders-corner.
 */

/**
 * A single LeaderTool.
 *
 * @param props
 */
const LeaderTool = props => {
  const title = props.tool.title;
  const icon = props.tool.attachment.publicURL;
  const url = props.tool.link;

  return (
    <li className="leader-tool">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="leader-tool__link"
        title={title}
      >
        <div className="leader-tool__icon-wrapper">
          <img src={icon} className="leader-tool__icon" alt={title} />
        </div>
        <div className="leader-tool__title"> {title} </div>
        <ExternalLink className="leader-tool__link-icon icon" />
      </a>
    </li>
  );
};

/**
 * Wraps a list of tools with title.
 */
export class LeaderToolList extends React.PureComponent {
  state = {
    isOpen: false
  };

  /**
   * Creates the tool header.
   */
  getSimpleHeader() {
    return <span className="title title--x-small"> {this.props.title} </span>;
  }

  /**
   * Creates the expandable tool header.
   * Is used in mobile screen widths.
   */
  getResponsiveHeader() {
    const button = (
      <button
        onClick={() => this.handleOpen()}
        className="leader-tools-list__title-button"
      >
        {this.getSimpleHeader()}
        <span className="leader-tools-list__title-symbol">
          {this.state.isOpen ? <Minus /> : <Plus />}
        </span>
      </button>
    );

    return button;
  }

  /**
   * Updates the object open/closed state.
   */
  handleOpen() {
    this.setState(state => ({ open: !state.open }));
  }

  render() {
    const snapshot = this.state;

    const tools = this.props.tools.map((tool, i) => {
      return <LeaderTool tool={tool} key={i} />;
    });

    const hideDetails = !snapshot.isOpen && this.props.isMobile;
    return (
      <div
        className={`leader-tools-list__wrapper ${
          snapshot.isOpen ? "leader-tools-list__wrapper--open" : ""
        }`}
      >
        <h2
          className="leader-tools-list__title"
          aria-controls={this.props.detailsId}
          aria-expanded={snapshot.isOpen}
        >
          {this.props.icon ? (
            <this.props.icon className="leader-tools-list__title-icon" />
          ) : (
            ""
          )}
          {this.props.isMobile
            ? this.getResponsiveHeader()
            : this.getSimpleHeader()}
        </h2>
        <ShadowBox
          zeroRadius
          zeroPadding
          className="leader-tools-list__content-wrapper"
        >
          <ul
            className="leader-tools-list"
            hidden={hideDetails}
            aria-hidden={hideDetails}
          >
            {tools}
          </ul>
        </ShadowBox>
      </div>
    );
  }
}

/**
 * Wraps all the tools and adds layout.
 *
 * @param props
 */
export const AllLeaderTools = props => {
  const variousTools = props.variousTools;
  const prManagement = props.prManagement;
  const codeOfConduct = props.codeOfConduct;
  const usefulResources = props.usefulResources;

  return (
    <Layout2Col verticalGutters horizontalGutters groups>
      <div className="leader-tools-list__section">
        <MediaQuery maxWidth={767}>
          <LeaderToolList
            isMobile
            title="Project Management Tools"
            tools={prManagement}
            icon={Briefcase}
            detailsId="project-management-tools"
          />
          <LeaderToolList
            isMobile
            title="Code of conduct"
            tools={codeOfConduct}
            icon={FileText}
            detailsId="code-of-conduct"
          />
          <LeaderToolList
            isMobile
            title="Various tools"
            tools={variousTools}
            icon={Archive}
            detailsId="various-tools"
          />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <LeaderToolList
            title="Project Management Tools"
            tools={prManagement}
            icon={Briefcase}
            detailsId="project-management-tools"
          />
          <LeaderToolList
            title="Code of conduct"
            tools={codeOfConduct}
            icon={FileText}
            detailsId="code-of-conduct"
          />
          <LeaderToolList
            title="Various tools"
            tools={variousTools}
            icon={Archive}
            detailsId="various-tools"
          />
        </MediaQuery>
      </div>
      <div className="leader-tools-list__section">
        <MediaQuery maxWidth={767}>
          <LeaderToolList
            isMobile
            title="Useful resources running a club"
            tools={usefulResources}
            icon={Clipboard}
            detailsId="useful-resources"
          />
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <LeaderToolList
            title="Useful resources running a club"
            tools={usefulResources}
            icon={Clipboard}
            detailsId="useful-resources"
          />
        </MediaQuery>
      </div>
    </Layout2Col>
  );
};
