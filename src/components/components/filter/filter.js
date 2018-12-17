// external modules
import React from 'react';
import { Search } from 'react-feather';

// local modules
import Toggle from './../toggle/toggle';

// styles
import './filter.scss';

/*
  Uses a horizontal toggle item and puts their labels.
  The implementation of the logic has to be at an higher level.
*/
export class ToggleFilter extends React.Component {
  handleToggle = this.props.onClick;

  render() {
    const left = this.props.left ? this.props.left : 'left item';
    const right = this.props.right ? this.props.right : 'right item';
    const inheritedClass = this.props.className ? this.props.className : '';
    const classes = [inheritedClass, 'filter', 'filter--toggle'];

    return (
      <div className={classes.join(' ')}>
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
    const inheritedClass = this.props.className ? this.props.className : '';
    const classes = [inheritedClass, 'filter', 'filter--search'];
    const placeholder = this.props.placeholder || 'Search';

    return (
      <form className={classes.join(' ')}>
        <Search size={18} className="filter__search-icon" />
        <label htmlFor={this.props.id} className="">
          <input
            type="text"
            placeholder={placeholder}
            onChange={this.handleSearch}
            onKeyPress={e => {
              // REVIEW: The way controll of the input and the submit prevent.
              if (e.key === 'Enter') e.preventDefault();
            }}
            id={this.props.id}
          />
          <span className="visually-hidden">{this.props.label}</span>
        </label>
      </form>
    );
  }
}

/*
  Uses a select element and adds the `filter` classes.
*/
export class SelectFilter extends React.Component {
  onBlur = this.props.onBlur;

  render() {
    const options = [...this.props.options] || [];
    const optionList = options.map((option, i) => {
      return (
        <option value={option.value} key={i}>
          {option.label}
        </option>
      );
    });

    return (
      <div className="filter filter--select">
        <select onBlur={this.onBlur}>{optionList}</select>
      </div>
    );
  }
}
