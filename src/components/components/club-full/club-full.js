import gql from 'graphql-tag';
import React from 'react';
import { PlusCircle, X, Check, Feather } from 'react-feather';
import ReactMarkdown from 'react-markdown';

import { ApolloConsumer } from 'react-apollo';
import TextInput from './../../forms/text-input/text-input';
import { returnKeyCheck } from './../../../utils/accessibility';
import clubCover from './../../../images/ClubCover.png';
import groupSmallImage from './../../../images/group-small.jpg';
import Layout2ColsUnequal from './../../layouts/layout-2col-unequal/layout-2col-unequal';
import LayoutContained from './../../layouts/layout-contained/layout-contained';
import ClubInfo from './../club-info/club-info';
import MemberList from './../member-list/member-list';
import Shape from './../shape/shape';

import './club-full.scss';

/*
This is the template for a single club view.
*/
// Local modules.
export default class Club extends React.PureComponent {
  constructor(props) {
    super(props);

    const location = this.props.club.location
      ? this.props.club.location
      : {
          address: 'Fake address',
          lng: -100,
          lat: 500
        };

    const initData = {
      id: this.props.club.id,
      email: this.props.club.email,
      title: this.props.club.title,
      imageUrl: this.props.club.imageUrl,
      description: this.props.club.description,
      codeOfConduct: this.props.club.codeOfConduct,
      subtitle: this.props.club.subtitle,
      github: this.props.club.githubUrl,
      bannerImageUrl: this.props.club.bannerImageUrl,
      clubUrl: this.props.club.clubUrl,
      events: this.props.club.events,
      location: {
        address: location.address,
        lng: location.lng,
        lat: location.lat
      },
      users: this.props.club.users
    };

    this.state = {
      ...initData,
      edit: false,
      editable: true,
      // edit: true,
      history: {
        ...initData
      }
    };
  }

  // Replace the state with a the value of the `state.history`.
  // can be called from the `cancel` button.
  reverse({
    email,
    title,
    imageUrl,
    description,
    codeOfConduct,
    subtitle,
    github,
    bannerImageUrl,
    clubUrl,
    location
  }) {
    const oldState = {
      email,
      title,
      imageUrl,
      description,
      codeOfConduct,
      subtitle,
      github,
      bannerImageUrl,
      clubUrl,
      location,
      edit: false
    };

    this.setState(oldState);
  }

  // saves the currect state as the state.history field.
  // The history is reversed if the user pushes cancel.
  saveToHistoryAndEdit({
    email,
    title,
    imageUrl,
    description,
    codeOfConduct,
    subtitle,
    github,
    bannerImageUrl,
    clubUrl,
    location
  }) {
    const newHistory = {
      email,
      title,
      imageUrl,
      description,
      codeOfConduct,
      subtitle,
      github,
      bannerImageUrl,
      clubUrl,
      location
    };

    this.setState({ history: newHistory, edit: true });
  }

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

  // Infrastructure for logged in user handling.
  shouldCTAAppear() {
    return true;
  }

  render() {
    const snapshot = { ...this.state };

    const ctaPlaceholder = this.shouldCTAAppear() ? (
      <a href="/test" className="button club-full__cta">
        <span className="club-full__cta-icon">
          <PlusCircle />
        </span>
        Become a member of this club
      </a>
    ) : (
      ''
    );

    let membersSection = '';

    const clubDescription = snapshot.edit ? (
      <div>
        <h2>Descrtiption</h2>

        <TextInput
          multiline
          label="description"
          onChange={this.handleDescription}
          value={snapshot.description}
        />
      </div>
    ) : snapshot.description ? (
      <div>
        <h2>Descrtiption</h2>
        <ReactMarkdown source={snapshot.description} />
      </div>
    ) : (
      ''
    );

    const codeOfConduct = snapshot.codeOfConduct ? (
      <div>
        <h2>Code of Conduct</h2>
        <ReactMarkdown source={snapshot.codeOfConduct} />
      </div>
    ) : (
      ''
    );

    if (snapshot.users && snapshot.users.length > 0)
      membersSection = (
        <>
          <h2> Members </h2>
          <Shape
            waves
            darkSkyBlue
            className="club-full__members-shape club-full__members-shape--waves"
          />
          <MemberList members={snapshot.users} />
        </>
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
        <ApolloConsumer>
          {client => (
            <div
              tabIndex={0}
              role="button"
              onClick={() => {
                client.mutate({
                  variables: {
                    id: snapshot.id,
                    club: {
                      name: snapshot.title,
                      sortDescription: snapshot.subtitle,
                      imageUrl: snapshot.imageUrl,
                      bannerImageUrl: snapshot.bannerImageUrl,
                      description: snapshot.description,
                      codeOfConduct: snapshot.codeOfConduct,
                      email: snapshot.email,
                      githubUrl: 'https://github.com/github', //snapshot.githubUrl,
                      clubUrl: 'https://github.com/github', //snapshot.clubUrl,
                      location: {
                        address: snapshot.location.address,
                        lng: snapshot.location.lng,
                        lat: snapshot.location.lat
                      }
                    }
                  },
                  mutation: editClub,
                  fetchPolicy: 'no-cache'
                });
              }}
              onKeyDown={e => {
                returnKeyCheck(e, this.handleSave);
              }}
              className="member__button button button--submit"
              key={1}
            >
              <Check size={20} />
              <span> Save changes </span>
            </div>
          )}
        </ApolloConsumer>
      );
    } else if (snapshot.editable) {
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
          <span> Edit club </span>
        </div>
      );
    }

    return (
      <LayoutContained className="club-full">
        <div className="club-full__header">
          <div className="club-full__cover-wrapper">
            <img
              src={snapshot.bannerImageUrl || clubCover}
              className="club-full__cover-image"
              alt=""
            />
          </div>

          <div className="club-full__header-bottom">
            <div className="club-full__profile-picture-section">
              <div className="club-full__profile-picture-wrapper">
                <img
                  src={snapshot.imageUrl || groupSmallImage}
                  alt="Club profile"
                  className="club-full__profile-picture"
                />
              </div>
            </div>

            <div className="club-full__title-wrapper">
              <h1 className="club-full__title"> {snapshot.title} </h1>
              <span className="club-full__subtitle">{snapshot.subtitle}</span>
            </div>
          </div>
        </div>

        <Layout2ColsUnequal
          inverse
          horizontalGutters
          verticalGutters
          className="club-full__body"
        >
          <div className="club-full__info-container">
            {ctaPlaceholder}
            <ClubInfo club={snapshot} />
          </div>
          <div className="club-full__description">
            <div>
              {clubDescription}
              {codeOfConduct}
              {buttonList}
            </div>
            <div className="club-full__members-section">{membersSection}</div>
          </div>
        </Layout2ColsUnequal>
      </LayoutContained>
    );
  }
}

const editClub = gql`
  mutation {
    editClub(
      clubId: $id
      club: {
        name: $name
        sortDescription: $sortDescription
        imageUrl: $imageUrl
        bannerImageUrl: $bannerImageUrl
        description: $description
        codeOfConduct: $codeOfConduct
        email: $email
        githubUrl: $githubUrl
        clubUrl: $clubUrl
        location: { address: $address, lng: $lng, lat: $lat }
      }
    ) {
      id
      email
      location {
        address
        lat
        lng
      }
      name
      imageUrl
      bannerImageUrl
      description
      codeOfConduct
      sortDescription
      githubUrl
      clubUrl
    }
  }
`;
