/*
  A single FAQ question and answer.
  Appears at /faq-page
*/
import React from 'react';

class FaqItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  // handles the collapse actions.
  handleToggle = () => {
    const snapshot = {...this.state};
    this.setState({open: !snapshot.open});
  }

  render() {
    const snapshot = {...this.state};
    const content = snapshot.open ? this.props.item.body : '';

    return (
      <div className="faq__item">
        <div>
          <div className="faq__item-title" onClick={this.handleToggle}> {this.props.item.header} </div>
        </div>
        <div className="faq__item-content"> {content} </div>
      </div>
    );
  }
}

export default FaqItem;
