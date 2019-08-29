import React from "react";
import { ChevronRight } from "react-feather";

/**
 * A single FAQ question and answer.
 * Appears at /faq-page.
 */
class FaqItem extends React.PureComponent {
  state = {
    open: false
  };

  /**
   * Handles the collapse/expand actions.
   */
  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  /**
   * Handles keys.
   */
  handleKeyPress = e => {
    if (e.key === "Enter") return this.handleToggle;
  };

  render() {
    const snapshot = this.state;
    const isExpanded = snapshot.open;
    const isHidden = !snapshot.open;
    const id = this.props.id;

    const classString = `faq__item ${
      isExpanded ? "is-expanded" : "is-collapsed"
    }`;
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
          <p>{this.props.children}</p>
        </div>
      </li>
    );
  }
}

export default FaqItem;
