import React from 'react';

// Local modules.
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import TextInput from './../../forms/text-input/text-input';
import ShadowBox from  './../shadow-box/shadow-box';
import './member.scss';

class Member extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Alce McKenzie',
      location: 'Planet earth',
      club: 'RIT Linux Users Group',
      github: 'dpliakos',
      personal: 'duckduckgo.com',
      description: 'this is a line of text. And this continues',
      edit: false,
      edit: true
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
      ?  <TextInput lablel="Name" onChange={this.handleName} value={snapshot.name}
        className="form-input--member form-input--member-name" placeholder="name"
        />
      : <div> {snapshot.name} </div>;

    const location = snapshot.edit
      ? <TextInput label="Location" onChange={this.handleLocation} value={snapshot.location} />
      : <div> {snapshot.location} </div>;

    const description = snapshot.edit
      ? <TextInput multiline label="description" onChange={this.handleDescription} value={snapshot.description} />
      : <div> {snapshot.description} </div>;

    const github = snapshot.edit
      ? (<div> <span>github.com/</span> <TextInput label="profile" onChange={this.handleGithub} value={snapshot.github} /> </div>)
      : (<a href="#">
          <span className="member__link-prefix">github.com/</span>
          <span>{snapshot.github}</span>
        </a>);

    const personal = snapshot.edit
      ? <TextInput label="personal web page" onChange={this.handlePersonal} value={snapshot.personal} />
      : (<a href="#">
          <span className="member__link-prefix">http://</span>
          <span>{snapshot.personal}</span>
        </a>);

    let buttonList = [];

    if (snapshot.edit) {
      buttonList.push(
        <div onClick={this.handleCancel} key={0}
          className="member__button member__button--cancel" > Cancel
        </div>
      );

      buttonList.push(
        <div onClick={this.handleSave} key={1}
          className="member__button member__button--save"> Save changes
        </div>
      );

    } else if (this.props.editable) {
      buttonList.push(
        <div onClick={this.handleEdit} key={2}
          className="member__button member__button--edit" > Edit my profile
        </div>
      );
    }

    return (
        <div className="member">
          <ShadowBox>
            <div className="member__image-wrapper">
              <img src="http://assets.nydailynews.com/polopoly_fs/1.2479149.1451350340!/img/httpImage/image.jpg_gen/derivatives/article_750/motorhead29n-2-web.jpg" alt="profile" className="member__image" />
            </div>

            <div className="title title--small member__name">
              {name}
            </div>

            <div className="member__location">
              {location}
            </div>

            <div className="member__description">
              {description}
            </div>

            <div className="member__club">
              {snapshot.club}
            </div>

            <div className="member__link member__link--github">
              {github}
            </div>

            <div className="member__link member__link--personal-page">
                {personal}
            </div>
           </ShadowBox>

            <div className="member__button-list">
              {buttonList}
            </div>
        </div>
    );
  }
}

export default Member;
