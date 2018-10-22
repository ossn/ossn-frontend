import React from 'react';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import TextInput from './../../forms/text-input/text-input';

class Member extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      github: '',
      personal: '',
      description: '',
      edit: false
    }
  }

  handleName = (event) => {
    this.setState({name: event.target.value});
  };

  handleLocation = (event) => {
    this.setState({location: event.target.value});
  };

  handleGithub = (event) => {
    this.setState({github: event.target.value});
  };

  handlePersonal = (event) => {
    this.setState({personal: event.target.value});
  };

  handleDescription = (event) => {
    this.setState({description: event.target.value});
  };

  handleEdit = () => {
    this.setState({edit: true});
  };

  handleSave = () => {
    this.handleCancel();
  };

  handleCancel = () => {
    this.setState({edit: false})
  };

  render() {
    const snapshot = {...this.state};

    const fullName = this.props.member.firstName + " " + this.props.member.lastName;

    const name = snapshot.edit
      ?  <TextInput lablel="Name" onChange={this.handleName} value={snapshot.name} />
      : <div> {fullName} </div>;

    const location = snapshot.edit
      ? <TextInput label="Location" onChange={this.handleLocation} value={snapshot.location} />
      : <div> {this.props.member.location} </div>;

    const description = snapshot.edit
      ? <TextInput multiline label="description" onChange={this.handleDescription} value={snapshot.description} />
      : <div> {this.props.description} </div>;

    const github = snapshot.edit
      ? (<div> <span>github.com/</span> <TextInput label="profile" onChange={this.handleGithub} value={snapshot.github} /> </div>)
      : <div> {this.props.member.github} </div>;

    const personal = snapshot.edit
      ? <TextInput label="personal web page" onChange={this.handlePersonal} value={snapshot.personal} />
      : <div> {this.props.member.personalPage} </div>;

    let buttonList = [];

    if (snapshot.edit) {
      buttonList.push(<div onClick={this.handleCancel} key={0} > Cancel </div>);
      buttonList.push(<div onClick={this.handleSave} key={1} > Save changes </div>);
    } else if (this.props.editable) {
      buttonList.push(<div onClick={this.handleEdit} key={2} > Edit my profile </div>);
    }

    return (
      <LayoutContained>
        <div>
          <img src="" alt="profile" />
        </div>
        <div> {name} </div>
        <div> {location} </div>
        <div> {description} </div>
        <div> {github} </div>
        <div> {personal} </div>
        <div>
          {buttonList}
        </div>
      </LayoutContained>
    );
  }
}

export default Member;
