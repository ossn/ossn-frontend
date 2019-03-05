import { Link } from "gatsby";
import React from "react";
import { Minus, Plus } from "react-feather";
import {
  LoginLink,
  LogoutLink
} from "./../../layouts/auth-wrapper/auth-wrapper";

/**
 * Constructs a collapsible list of entries at the mobile.
 * Scroll horizontally on mobile, then become one column layout.
 * In order to take effect, the children have to accept `className`
 * prop as their own. e.g. <Component className=`${props.className} newClass />`
 *
 * Props might contain:
 *  {String} title: the title of the list.
 *  {Array} links: the list of the links to be displayed.
 *  {String} id: the id of the expanding element
 *
 *  links contain:
 *   {String} title: the text to be displayed
 *  a link attribute
 *   {String} target (str): the `to` or `href` attribute of the `Link` or `a` element.
 *   {boolean} external:  if true, the component will be `<a>` else `<Link>`.
 *
 * @param props
 **/

/**
 * Returns the title.
 *
 * @param props
 **/
const SimpleHeader = props => {
  return <div> {props.title} </div>;
};

/**
 * Wraps the SimpleHeader with a button to handle the click action.
 * This is invoked only if the screen is mobile.
 *
 * @param props
 **/
const ResponsiveHeader = props => {
  const icon = props.isOpen ? <Minus /> : <Plus />;
  return (
    <button
      className="footer__heading footer__heading--button"
      onClick={props.onClick}
    >
      <SimpleHeader title={props.title} />
      <span>{icon}</span>
    </button>
  );
};

/**
 * A link that points inside the site. Uses the `Link`  component.
 *
 * @param props
 **/
const InternalLink = props => {
  return (
    <Link className="footer__link" to={props.link.target}>
      {props.link.title}
    </Link>
  );
};

/**
 * A link that points outside the site. Users the `a` component.
 *
 * @param props
 **/
const ExternalLink = props => {
  return (
    <a
      className="footer__link"
      href={props.link.target}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {props.link.title}
    </a>
  );
};

export default class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    const isMobile = this.props.isMobile;
    this.expandable = React.createRef();
    this.state = {
      isOpen: false,
      isMobile: isMobile
    };
  }

  /**
   * Toggles open / close and updates navigation state.
   */
  handleClick = () => {
    if (!this.state.isMobile) return;
    this.setState(({ isOpen }) => ({ isOpen: !isOpen }));
  };

  /**
   * Executes handleClick on enter key event.
   *
   * @param event
   */
  handleKeyPress = event => {
    if (event.key === "Enter") return this.handleClick;
  };

  /**
   * Executes handleClick on enter key event.
   *
   * @param {Array} linkList
   */
  parseLinks = linkList => {
    if (!linkList) return [];
    const list = linkList.map((link, i) => {
      const cmp = link.login ? (
        <span key={i}>
          <LoginLink className="footer__link" label={link.title} key={i} />
        </span>
      ) : link.logout ? (
        <span key={i}>
          <LogoutLink
            className="footer__link footer__link--button"
            label={link.title}
          />
        </span>
      ) : link.external ? (
        <ExternalLink link={link} key={i} />
      ) : (
        <InternalLink link={link} key={i} />
      );

      return <li key={i}>{cmp}</li>;
    });

    return list;
  };

  render() {
    const snapshot = this.state;
    const links = this.parseLinks(this.props.links);
    const isExpanded = snapshot.isOpen && snapshot.isMobile;
    let classString = `footer__section footer__section--mobile ${this.props
      .className || ""}`;
    const id = this.props.id;
    const header = snapshot.isMobile ? (
      <ResponsiveHeader
        onClick={() => {
          this.handleClick();
        }}
        onKeyPress={this.handleKeyPress}
        title={this.props.title}
        isOpen={snapshot.isOpen}
        aria-controls={id}
        aria-expanded={isExpanded}
      />
    ) : (
      <SimpleHeader title={this.props.title} />
    );

    return (
      <section className={classString} ref={this.expandable}>
        <h5 className="footer__heading">{header}</h5>
        <ul
          className="footer__list"
          hidden={!snapshot.isOpen && snapshot.isMobile}
          id={id}
        >
          {links}
        </ul>
      </section>
    );
  }
}
