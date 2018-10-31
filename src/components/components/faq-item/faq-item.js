/* eslint-disable */

/*
  A single FAQ question and answer.
  Appears at /faq-page
*/
import React from 'react';
import {ChevronRight} from 'react-feather';

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

  handleKeyPress = () => {
    const snapshot = { ...this.state };
    this.setState({ open: !snapshot.open });
  };

  render() {
    const snapshot = { ...this.state };
    const content = snapshot.open ? this.props.item.body : '';

    return (
      <li className="faq__item">
        <div>
          <h3
            className="faq__item-title text text--medium"
            onClick={this.handleToggle}
            onKeyPress={this.handleKeyPress}
          >
            <ChevronRight size={16} className="faq__icon icon"/>
            {this.props.item.header}
          </h3>
        </div>
        <div className="faq__item-content"> {content} </div>
      </li>
    );
  }
}

export default FaqItem;
