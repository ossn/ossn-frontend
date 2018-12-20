/*
 Constructs a collapsible list of entries at the mobile.

 props:
 title: the title of the list.
 links: the list of the links to be displayed.
 id: the id of the expanding element
 a link attribute = {
 title (str): the text to be displayed
 target (str): the `to` or `href` attribute of the `Link` or `a` element.
 external (boolean):  if true, the component will be `<a>` else `<Link>`.
 }
 */

// external modules
import { Link } from 'gatsby';
import React from 'react';
import { Plus, Minus } from 'react-feather';

// returns just the title
const SimpleHeader = props => {
  return <div> {props.title} </div>;
};

// if the screen is mobile, wraps the SimpleHeader with a button to handle the
// click action
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

// A link that points inside the site. Uses the `Link`  component.
const InternalLink = props => {
  return (
    <Link className="footer__link" to={props.link.target}>
      {props.link.title}
    </Link>
  );
};

// A link that points outside the site. Users the `a` component.
const ExternalLink = props => {
  return (
    <a className="footer__link" href={props.link.target}>
      {props.link.title}
    </a>
  );
};

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    const isMobile = this.props.isMobile;
    this.expandable = React.createRef();
    this.state = {
      isOpen: false,
      isMobile: isMobile
    };
  }

  handleClick = event => {
    const snapshot = { ...this.state };
    if (!snapshot.isMobile) return;
    this.setState({
      isOpen: !snapshot.isOpen
    });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') return this.handleClick;
  };

  parseLinks = linkList => {
    if (!linkList) return [];
    const list = linkList.map((link, i) => {
      const cmp = link.external ? (
        <ExternalLink link={link} key={i} />
      ) : (
        <InternalLink link={link} key={i} />
      );

      return <li key={i}>{cmp}</li>;
    });

    return list;
  };

  render() {
    const snapshot = { ...this.state };
    const links = this.parseLinks(this.props.links);
    const isExpanded = snapshot.isOpen && snapshot.isMobile;
    let classes = ['footer__section footer__section--mobile'];
    if (this.props.className) classes.push(this.props.className);
    let classString = classes.join(' ');
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
