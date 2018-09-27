// external modules
import React from 'react';

// local modules
import Toggle from './../toggle/toggle';

// styles
import './filters.scss';

export class ToggleFilter extends React.Component {

  handleToggle = this.props.onClick;

  render() {
    const left = this.props.left ? this.props.left : 'left item';
    const right = this.props.right ? this.props.right : 'right item';

    return(
      <div className="filter filter--toggle">
        <span> {left} </span>
        <Toggle onClick={this.handleToggle} active={this.props.active} left={this.props.left} right={this.props.right} />
        <span> {right} </span>
      </div>
    );
  }
}

export class SearchFilter extends React.Component {

  handleSearch = this.props.onChange;
  render() {
    return (
      <div className="filter filter--search">
        <label> Search </label>
        <input type="text" placeholder={this.props.placeholder} onChange={this.handleSearch}/>
      </div>
    )
  }
}
