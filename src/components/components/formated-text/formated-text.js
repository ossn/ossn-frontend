import React from 'react';
import './formated-text.scss';
import {
  Github as GithubIcon,
  Calendar as CalendarIcon,
  Link as LinkIcon
} from 'react-feather';

// TODO: find a way to pass the icon
export default class FormatedText extends React.PureComponent {
  render() {
    const prefix = this.props.prefix || '';
    const value = this.props.value;
    const icon = this.props.icon ? this.props.icon : 'O';
    const secondary = this.props.secondary || '';

    return (
      <div className="formated-text">
        <div className="formated-text__icon">{icon}</div>
        <div className="formated-text__text">
          <div className="formated-text__main">
            <span className="formated-text__prefix">{prefix}</span>
            <span className="formated-text__value">{value}</span>
          </div>
          <span className="formated-text__secondary"> {secondary}</span>
        </div>
      </div>
    );
  }
}

export class Github extends React.PureComponent {
  render() {
    const value = this.props.value;

    return (
      <FormatedText prefix="github.com/" value={value} icon={GithubIcon} />
    );
  }
}

export class Link extends React.PureComponent {
  render() {
    const value = this.props.value;

    return <FormatedText prefix="https://" value={value} icon={LinkIcon} />;
  }
}

export class Text extends React.PureComponent {
  render() {
    const value = this.props.value;
    return <FormatedText prefix="" value={value} />;
  }
}

export class Event extends React.PureComponent {
  render() {
    const value = this.props.value;
    const secondary = this.props.secondary;

    return (
      <FormatedText value={value} secondary={secondary} icon={CalendarIcon} />
    );
  }
}
