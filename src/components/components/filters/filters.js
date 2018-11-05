// external modules
import React from 'react';
import Select from 'react-select';

// local modules
import Toggle from './../toggle/toggle';

// styles
import './filters.scss';

/*
  Uses a horizontal toggle item and puts their labels.
  The implementation of the logic has to be at an higher level.
*/
export class ToggleFilter extends React.Component {
  handleToggle = this.props.onClick;

  render() {
    const left = this.props.left ? this.props.left : 'left item';
    const right = this.props.right ? this.props.right : 'right item';

    return (
      <div className="filter filter--toggle">
        <span> {left} </span>
        <Toggle
          onClick={this.handleToggle}
          active={this.props.active}
          left={this.props.left}
          right={this.props.right}
        />
        <span> {right} </span>
      </div>
    );
  }
}

/*
  Uses an input element.
  The implementation of the logic has to be at an higher level.
*/
export class SearchFilter extends React.Component {
  handleSearch = this.props.onChange;

  render() {
    return (
      <div className="filter filter--search">
        <label htmlFor={`${this.props.id}`}>
          Search
          <input
            type="text"
            placeholder={this.props.placeholder}
            onChange={this.handleSearch}
            id={this.props.id}
          />
        </label>
      </div>
    );
  }
}

/*
  Uses a select element and list the given options.
  The implementation of the logic has to be at an higher level.
*/
export class SelectFilter extends React.Component {
  render() {
    const options = this.props.options || [];

    return (
      <Select
        options={options}
        onChange={this.props.onChange}
        value={this.props.value}
      />
    );
  }
}
