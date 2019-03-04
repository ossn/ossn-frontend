import "./filter.scss";

import React from "react";
import { Search } from "react-feather";
import Toggle from "./../toggle/toggle";

/**
 * Creates a horizontal toggle item and puts its labels.
 * The implementation of the handleToggle logic has to be at an higher level
 * and passed as prop.
 * Active element is considered to be the one on the right.
 */
export class ToggleFilter extends React.Component {
  handleToggle = this.props.onClick;

  render() {
    const left = this.props.left ? this.props.left : "left item";
    const right = this.props.right ? this.props.right : "right item";
    const inheritedClass = this.props.className ? this.props.className : "";
    const classes = [inheritedClass, "filter", "filter--toggle"];

    return (
      <div className={classes.join(" ")}>
        <button
          onClick={this.props.active && this.handleToggle}
          className="filter__toggle-text"
        >
          {left}
        </button>
        <Toggle
          onClick={this.handleToggle}
          active={this.props.active}
          left={this.props.left}
          right={this.props.right}
        />
        <button
          onClick={!this.props.active && this.handleToggle}
          className="filter__toggle-text"
        >
          {right}
        </button>
      </div>
    );
  }
}

/**
 * Creates a search input element.
 * The implementation of the onChange logic has to be at an higher level and
 * passed as prop.
 */
export class SearchFilter extends React.Component {
  handleSearch = this.props.onChange;

  render() {
    const inheritedClass = this.props.className ? this.props.className : "";
    const classes = [inheritedClass, "filter", "filter--search"];
    const placeholder = this.props.placeholder || "Search";

    return (
      <form className={classes.join(" ")}>
        <Search size={18} className="filter__search-icon" />
        <label htmlFor={this.props.id} className="">
          <input
            type="text"
            placeholder={placeholder}
            onChange={this.handleSearch}
            onKeyPress={e => {
              if (e.key === "Enter") e.preventDefault();
            }}
            id={this.props.id}
          />
          <span className="visually-hidden">{this.props.label}</span>
        </label>
      </form>
    );
  }
}
