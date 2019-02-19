import './member.scss';

import { navigate } from 'gatsby';
import React from 'react';
import { ApolloConsumer, withApollo } from 'react-apollo';
import { Check, Feather, GitHub, Link, Users, X } from 'react-feather';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import MediaQuery from 'react-responsive';

import GatsbyConfig from '../../../../gatsby-config';
import { returnKeyCheck } from '../../../utils/accessibility';
import { mapUserToProps } from '../../../utils/redux-utils';
import TextInput from '../../forms/text-input/text-input';
import LayoutContained from '../../layouts/layout-contained/layout-contained';
import ShadowBox from '../shadow-box/shadow-box';
import Shape from '../shape/shape';
import { editUserMutation, getUserQuery } from './member-queries';

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

// Shuffles shapes to print them randomly in different areas.
// Uses Fisher-Yates (aka Knuth) Shuffle algorithm.
// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
const shuffle = array => {
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
};

/*
 Profile page template.
 This component is used for showing and editing a member's profile.

 handling props:
 editable: if true, shows the 'edit' button. This button can trigger the edit
 state of the component.

 The state has the profile information and the edit flag.
 If the edit flag is true, every field is an input element.
 else is a label.

 The state also stores the state of the component, so modifications on edit can
 be undone.
 */
// utils
// Local modules.
// styles
class Member extends React.PureComponent {
  constructor(props) {
    super(props);

    const initData = {
      name: this.props.member.name,
      imageUrl: this.props.member.imageUrl,
      sortDescription: this.props.member.sortDescription,
      clubs: this.props.member.clubs,
      githubUrl: this.props.member.githubUrl,
      personalUrl: this.props.member.personalUrl,
      description: this.props.member.description,
      receiveNewsletter: this.props.member.receiveNewsletter,
      clubsToPreserve: this.props.member.clubs.map(club => club.id),
      shapes: shuffle(shapesUnordered),
      firstLoad: true
    };

    this.state = {
      ...initData,
      edit: false,
      editable: !!this.isCurrentUser(),
      history: {
        ...initData
      }
    };
  }

  componentDidMount = () => {
    let { id } = this.props.member;
    if (!id) {
      let path = this.props.location.pathname.split('/');
      id = path[path.indexOf('members') + 1].split('?')[0];
    }
    this.props.client
      .query({
        query: getUserQuery,
        variables: { id }
      })
      .then(({ data = {} }) => {
        if (data.user) {
          const grapgData = {
            ...data.user,
            clubsToPreserve: data.user.clubs.map(club => club.id)
          };
          return this.setState({
            ...grapgData,
            history: {
              ...grapgData
            }
          });
        }
      })
      .catch(e => {
        //TODO: Handle error
        if (e.toString() == 'Error: GraphQL error: record not found') {
          navigate('/404');
        }
      });
  };

  componentDidUpdate(prevProps) {
    if (
      (prevProps.user || {}).user &&
      prevProps.user.user.id !== this.props.user.user.id
    ) {
      this.setState({ editable: !!this.isCurrentUser() });
    } else if (
      !(prevProps.user || {}).user &&
      this.props.user.user &&
      this.state.editable === false
    ) {
      this.setState({ editable: !!this.isCurrentUser() });
    }
  }

  isCurrentUser = () =>
    this.props.user.user && this.props.member.id === this.props.user.user.id;

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === 'checkbox' ? target.checked : target.value
    });
  };

  handleClubSubscription = ({ target: { checked, name: clubId } }) => {
    this.setState(({ clubsToPreserve }) => ({
      clubsToPreserve: checked
        ? // Add club id to array
          clubsToPreserve.concat([clubId])
        : // Remove club id from array
          clubsToPreserve.filter(club => club !== clubId)
    }));
  };

  handleEdit = () => {
    this.setState(state => ({ history: { ...state }, edit: true }));
  };

  handleCancel = () => {
    this.setState(state => ({ ...state.history, edit: false }));
  };

  handleSave = () => {
    this.setState(({ clubsToPreserve, clubs }) => ({
      clubs: clubs.filter(club => clubsToPreserve.includes(club.id)),
      edit: false
    }));
  };

  render() {
    const snapshot = this.state;

    const name = <div> {snapshot.name} </div>;

    const sortDescription = snapshot.edit ? (
      <TextInput
        label="Sort Description"
        name="sortDescription"
        onChange={this.handleChange}
        value={snapshot.sortDescription}
        className="member__text-field form-input--member form-input--member-name"
      />
    ) : (
      snapshot.sortDescription && <div> {snapshot.sortDescription} </div>
    );

    const description = snapshot.edit ? (
      <TextInput
        multiline
        label="Description"
        name="description"
        onChange={this.handleChange}
        value={snapshot.description}
      />
    ) : (
      snapshot.description && <div> {snapshot.description} </div>
    );

    const club = snapshot.edit ? (
      <div>
        {snapshot.clubs.length > 0 && <h2>Uncheck to unsubscribe from club</h2>}

        {snapshot.clubs.length > 0 &&
          snapshot.clubs.map((club, i) => {
            // return <Organization organization={node.org} key={i} />
            return (
              <div className="member__checkbox" key={club.id}>
                <label htmlFor={'club-' + club.id}>
                  <input
                    name={club.id}
                    type="checkbox"
                    defaultChecked
                    id={'club-' + club.id}
                    onChange={this.handleClubSubscription}
                  />
                  {club.name}
                </label>
              </div>
            );
          })}
      </div>
    ) : (
      snapshot.clubs.length > 0 && (
        <div>
          <Users className="member__icon" />
          {snapshot.clubs
            .map(club => club.name || 'Club name missing')
            .join(', ')}
        </div>
      )
    );

    const newsletter = snapshot.edit && (
      <div className="member__newsletter">
        <Shape seafoamBlue waveLarge divider className="member__divider" />

        <div className="member__checkbox">
          <label htmlFor="newsletter">
            <input
              name="receiveNewsletter"
              type="checkbox"
              id="newsletter"
              defaultChecked={snapshot.receiveNewsletter}
              onChange={this.handleChange}
            />
            I want to receive newsletter
          </label>
        </div>
      </div>
    );

    const github = snapshot.edit ? (
      <TextInput
        label="Github Url"
        name="githubUrl"
        onChange={this.handleChange}
        value={snapshot.githubUrl}
        className="member__text-field form-input--member form-input--member-name"
      />
    ) : (
      snapshot.githubUrl && (
        <a href={snapshot.githubUrl} target="_blank" rel="noopener noreferrer">
          <GitHub className="member__icon" />
          <span className="member__link-content">{snapshot.githubUrl}</span>
        </a>
      )
    );

    const personalUrl = snapshot.edit ? (
      <TextInput
        label="personal web page"
        name="personalUrl"
        onChange={this.handleChange}
        value={snapshot.personalUrl}
        className="member__text-field form-input--member form-input--member-name"
      />
    ) : (
      snapshot.personalUrl && (
        <a
          href={snapshot.personalUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Link className="member__icon" />
          <span className="member__link-content">{snapshot.personalUrl}</span>
        </a>
      )
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
        <ApolloConsumer key="appollo-consumer">
          {client => (
            <div
              tabIndex={0}
              role="button"
              onClick={() => {
                client.mutate({
                  variables: {
                    receiveNewsletter: snapshot.receiveNewsletter,
                    sortDescription: snapshot.sortDescription,
                    clubs: snapshot.clubsToPreserve,
                    description: snapshot.description,
                    githubUrl: snapshot.githubUrl,
                    personalUrl: snapshot.personalUrl
                  },
                  mutation: editUserMutation
                });

                this.handleSave();
              }}
              onKeyDown={e => {
                returnKeyCheck(e, () => {
                  client.mutate({
                    variables: {
                      receiveNewsletter: snapshot.receiveNewsletter,
                      sortDescription: snapshot.sortDescription,
                      clubs: snapshot.clubsToPreserve,
                      description: snapshot.description,
                      githubUrl: snapshot.githubUrl,
                      personalUrl: snapshot.personalUrl
                    },
                    mutation: editUserMutation
                  });

                  this.handleSave();
                });
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
      // } else if (true) {
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
        <Helmet>
          <title>
            {[snapshot.name, '|', GatsbyConfig.siteMetadata.title].join(' ')}
          </title>
        </Helmet>

        <div className="member__inner">
          <MediaQuery minWidth={576}>
            <div className="member__shape-wrapper-left">
              {snapshot.shapes[1]}
            </div>
            <div className="member__shape-wrapper-right">
              {snapshot.shapes[2]}
            </div>
          </MediaQuery>
          <ShadowBox className="member__card" zeroPadding>
            <div className="member__card-shape-wrapper">
              {snapshot.shapes[0]}
            </div>
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

              <div className="member__location">{sortDescription}</div>

              <div className="member__description">{description}</div>

              <Shape
                seafoamBlue
                waveLarge
                divider
                className="member__divider"
              />

              {snapshot.clubs.length > 0 && (
                <div>
                  <div className="member__club">{club}</div>

                  <Shape
                    seafoamBlue
                    waveLarge
                    divider
                    className="member__divider"
                  />
                </div>
              )}

              <div className="member__link member__link--github">{github}</div>

              <div className="member__link member__link--personal-page">
                {personalUrl}
              </div>

              {newsletter}
            </div>
          </ShadowBox>

          <div className="member__button-list">{buttonList}</div>
        </div>
      </LayoutContained>
    );
  }
}

export default connect(mapUserToProps)(withApollo(Member));
