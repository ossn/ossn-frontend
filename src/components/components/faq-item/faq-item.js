/*
  A single FAQ question and answer.
  Appears at /faq-page.
*/
import React from 'react';
import { ChevronRight } from 'react-feather';

class FaqItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  // Handles the collapse actions.
  handleToggle = () => {
    const snapshot = { ...this.state };
    this.setState({ open: !snapshot.open });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') return this.handleToggle;
  };

  render() {
    const snapshot = { ...this.state };
    const isExpanded = snapshot.open;
    const stateClass = snapshot.open ? 'is-expanded' : 'is-collapsed';
    const isHidden = !snapshot.open;
    const id = this.props.id;

    let classes = ['faq__item'];
    if (stateClass) classes.push(stateClass);
    let classString = classes.join(' ');

    return (
      <li className={classString}>
        <h3>
          <button
            className="faq__item-title button button--no-style"
            onClick={this.handleToggle}
            onKeyPress={this.handleKeyPress}
            aria-controls={id}
            aria-expanded={isExpanded}
          >
            <ChevronRight size={16} className="faq__icon icon" />
            {this.props.header}
          </button>
        </h3>
        <div id={id} className="faq__item-content" hidden={isHidden}>
          {this.props.children}
        </div>
      </li>
    );
  }
}

export default FaqItem;
