/*
  Profile page template.
  This component is used for showing and editing a memeber's profile.

  handling props:
    ediatble: if true, shows the 'edit' button. This button can triger the edit
    state of the component.

  The state has the profile information and the edit flag.
  If the edit flag is true, every field is an input element.
  else is a lebel.

  The state also stores the state of the compnent, so modifications on edit can
  be undone.
*/
import React from 'react';
import { Feather, Check, X, GitHub, Users, Link } from 'react-feather';

// Local modules.
import TextInput from './../../forms/text-input/text-input';
import ShadowBox from './../shadow-box/shadow-box';
import Shape from './../shape/shape';
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import MediaQuery from 'react-responsive';

// styles
import './member.scss';

// utils
import { returnKeyCheck } from './../../../utils/accessibility';

class Member extends React.Component {
  constructor(props) {
    super(props);

    const mockInit = {
      name: 'Alice McKenzie',
      imageUrl:
        'https://images.pexels.com/photos/1545510/pexels-photo-1545510.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      location: 'Planet earth',
      club: 'RIT Linux Users Group',
      github: 'dpliakos',
      personal: 'duckduckgo.com',
      description: 'this is a line of text. And this continues'
    };

    this.state = {
      ...mockInit,
      edit: false,
      // edit: true,
      history: {
        ...mockInit
      }
    };
  }

  // Replace the state with a the value of the `state.history`.
  // can be called from the `cancel` button.
  reverse({ name, imageUrl, location, club, github, personal, description }) {
    const oldState = {
      name,
      imageUrl,
      location,
      club,
      github,
      personal,
      description,
      edit: false
    };

    this.setState(oldState);
  }

  // saves the currect state as the state.history field.
  // The history is reversed if the user pushes cancel.
  saveToHistoryAndEdit({
    name,
    imageUrl,
    location,
    club,
    github,
    personal,
    description
  }) {
    const newHistory = {
      name,
      imageUrl,
      location,
      club,
      github,
      personal,
      description
    };

    this.setState({ history: newHistory, edit: true });
  }

  handleName = event => {
    this.setState({ name: event.target.value });
  };

  handleLocation = event => {
    this.setState({ location: event.target.value });
  };

  handleGithub = event => {
    this.setState({ github: event.target.value });
  };

  handlePersonal = event => {
    this.setState({ personal: event.target.value });
  };

  handleDescription = event => {
    this.setState({ description: event.target.value });
  };

  handleEdit = () => {
    const snapshot = { ...this.state };
    this.saveToHistoryAndEdit(snapshot);
  };

  handleSave = () => {
    this.setState({ edit: false });
  };

  handleCancel = () => {
    const history = { ...this.state.history };
    this.reverse(history);
  };

  render() {
    const snapshot = { ...this.state };

    // Shuffles shapes to print them randomly in different areas.
    // Uses Fisher-Yates (aka Knuth) Shuffle algorithm.
    // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
    function shuffle(array) {
      let currentIndex = array.length,
        temporaryValue,
        randomIndex;

      // While there remain elements to shuffle.
      while (0 !== currentIndex) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    const shapesUnordered = [
      <Shape
        seafoamBlue
        square
        className="member__shape member__shape--square"
        key="square"
      />,
      <Shape
        sunnyYellow
        triangle
        className="member__shape member__shape--triangle"
        key="triangle"
      />,
      <Shape
        darkSkyBlue
        circle
        className="member__shape member__shape--circle"
        key="circle"
      />
    ];
    const shapes = shuffle(shapesUnordered);

    // Used like so
    //   var arr = [2, 11, 37, 42];
    //   arr = shuffle(arr);
    //   console.log(arr);

    const name = snapshot.edit ? (
      <TextInput
        label="Name"
        onChange={this.handleName}
        value={snapshot.name}
        className="form-input--member form-input--member-name"
        placeholder="name"
      />
    ) : (
      <div> {snapshot.name} </div>
    );

    const location = snapshot.edit ? (
      <TextInput
        label="Location"
        onChange={this.handleLocation}
        value={snapshot.location}
      />
    ) : (
      <div> {snapshot.location} </div>
    );

    const description = snapshot.edit ? (
      <TextInput
        multiline
        label="description"
        onChange={this.handleDescription}
        value={snapshot.description}
      />
    ) : (
      <div> {snapshot.description} </div>
    );

    const club = snapshot.edit ? (
      <div> Club handling </div>
    ) : (
      <div>
        <Users className="member__icon" />
        {snapshot.club}
      </div>
    );

    const github = snapshot.edit ? (
      <div>
        <span>github.com/</span>{' '}
        <TextInput
          label="profile"
          onChange={this.handleGithub}
          value={snapshot.github}
        />
      </div>
    ) : (
      <a href="#passLinter">
        <GitHub className="member__icon" />
        <span className="member__link-prefix">github.com/</span>
        <span className="member__link-content">{snapshot.github}</span>
      </a>
    );

    const personal = snapshot.edit ? (
      <TextInput
        label="personal web page"
        onChange={this.handlePersonal}
        value={snapshot.personal}
      />
    ) : (
      <a href="#passLinter">
        <Link className="member__icon" />
        <span className="member__link-prefix">http://</span>
        <span className="member__link-content">{snapshot.personal}</span>
      </a>
    );

    let buttonList = [];

    if (snapshot.edit) {
      buttonList.push(
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleCancel}
          onKeyDown={e => {
            returnKeyCheck(e, this.handleCancel);
          }}
          className="member__button button button--reset"
          key={0}
        >
          <X size={21} />
          <span> Cancel </span>
        </div>
      );

      buttonList.push(
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleSave}
          onKeyDown={e => {
            returnKeyCheck(e, this.handleSave);
          }}
          className="member__button button button--submit"
          key={1}
        >
          <Check size={20} />
          <span> Save changes </span>
        </div>
      );
    } else if (this.props.editable) {
      buttonList.push(
        <div
          tabIndex={0}
          role="button"
          onClick={this.handleEdit}
          onKeyDown={e => {
            returnKeyCheck(e, this.handleEdit);
          }}
          className="member__button button button--reset"
          key={2}
        >
          <Feather size={18} />
          <span> Edit my profile </span>
        </div>
      );
    }

    return (
      <LayoutContained className="member">
        <div className="member__inner">
          <MediaQuery minWidth={576}>
            <div className="member__shape-wrapper-left">{shapes[1]}</div>
            <div className="member__shape-wrapper-right">{shapes[2]}</div>
          </MediaQuery>
          <ShadowBox className="member__card" zeroPadding>
            <div className="member__card-shape-wrapper">{shapes[0]}</div>
            <div className="member__card-inner">
              <div className="member__image-wrapper">
                <div className="member__image-inner">
                  <img
                    src={snapshot.imageUrl}
                    alt="profile"
                    className="member__image"
                  />
                </div>
              </div>
              <div className="title title--small member__name">{name}</div>

              <div className="member__location">{location}</div>

              <div className="member__description">{description}</div>

              <Shape
                seafoamBlue
                waveLarge
                divider
                className="member__divider"
              />

              <div className="member__club">{club}</div>

              <Shape
                seafoamBlue
                waveLarge
                divider
                className="member__divider"
              />

              <div className="member__link member__link--github">{github}</div>

              <div className="member__link member__link--personal-page">
                {personal}
              </div>
            </div>
          </ShadowBox>

          <div className="member__button-list">{buttonList}</div>
        </div>
      </LayoutContained>
    );
  }
}

export default Member;
