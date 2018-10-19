import React from 'react';

class FaqItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

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
          <div className="faq__item-title"> {this.props.item.header} </div>
          <div onClick={this.handleToggle}> {/* Here goes the arrow */}
            Arrow
          </div>
        </div>
        <div className="faq__item-content"> {content} </div>
      </div>
    );
  }
}

export default FaqItem;
