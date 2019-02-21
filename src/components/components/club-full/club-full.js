import compose from 'immer';
import { setWith } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { withApollo } from 'react-apollo';
import { Check, Feather, PlusCircle, X } from 'react-feather';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import GatsbyConfig from '../../../../gatsby-config';
import clubCover from '../../../images/ClubCover.png';
import groupSmallImage from '../../../images/group-small.jpg';
import TextInput from '../../forms/text-input/text-input';
import { LoginLink } from '../../layouts/auth-wrapper/auth-wrapper';
import Layout2ColsUnequal from '../../layouts/layout-2col-unequal/layout-2col-unequal';
import LayoutContained from '../../layouts/layout-contained/layout-contained';
import ClubInfo from '../club-info/club-info';
import MemberList from '../member-list/member-list';
import Shape from '../shape/shape';
import './club-full.scss';
import { useDerivedClubState } from './hooks';
import * as queries from './queries';

function ClubFull(props) {
  const [club, setClub] = useDerivedClubState(props);
  const [editing, setEditing] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    document.title = `${club.name} | ${GatsbyConfig.siteMetadata.title}`;
  }, [club.name]);

  useEffect(() => {
    if (props.currentUser) {
      const user = (club.users || []).find(
        user => user.id === props.currentUser.id
      );

      if (user) {
        setIsMember(true);

        if (['admin', 'club_owner'].includes(user.role)) {
          setIsOwner(true);
        }
      }
    }
  }, [props.currentUser]);

  function handleClick(editing) {
    return function() {
      setEditing(editing);
    };
  }

  function handleChange(event) {
    setClub(
      compose(
        club,
        function(draftClub) {
          setWith(draftClub, event.target.name, event.target.value);
        }
      )
    );
  }

  const join = useCallback(
    async function() {
      try {
        const { data } = await props.client.mutate({
          fetchPolicy: 'no-cache',
          mutation: queries.JOIN_CLUB,
          variables: { id: club.id }
        });

        if (data.joinClub) {
          const nextClub = await refetch();
          setClub({ ...club, nextClub });
        }
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    },
    [club.id]
  );

  async function refetch() {
    try {
      const { data } = await props.client.query({
        query: queries.GET_CLUB,
        variables: { id: club.id }
      });

      return data.club;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  async function handleSubmit() {
    const { events, location, users, ...rest } = club;

    const { data } = await props.client.mutate({
      fetchPolicy: 'no-cache',
      mutation: queries.EDIT_CLUB,
      variables: { ...location, ...rest }
    });

    if (data.editClub) {
      setClub({ ...club, ...data.editClub });
      setEditing(false);
    }
  }

  return (
    <LayoutContained className="club-full">
      <header className="club-full__header">
        <div className="club-full__cover-wrapper">
          <img
            alt=""
            className="club-full__cover-image"
            src={club.bannerImageUrl || clubCover}
          />
        </div>

        <div className="club-full__header-bottom">
          <div className="club-full__profile-picture-section">
            <div className="club-full__profile-picture-wrapper">
              <img
                alt="Club profile"
                className="club-full__profile-picture"
                src={club.imageUrl || groupSmallImage}
              />
            </div>
          </div>

          <div className="club-full__title-wrapper">
            {editing ? (
              <>
                <TextInput
                  label="Title"
                  name="name"
                  onChange={handleChange}
                  value={club.name || ''}
                />

                <TextInput
                  label="Subtitle"
                  name="sortDescription"
                  onChange={handleChange}
                  value={club.sortDescription || ''}
                />
              </>
            ) : (
              <>
                {club.name && <h1 className="club-full__title">{club.name}</h1>}
                {club.sortDescription && (
                  <p className="club-full__subtitle">{club.sortDescription}</p>
                )}
              </>
            )}
          </div>
        </div>
      </header>

      <Layout2ColsUnequal
        className="club-full__body"
        horizontalGutters
        inverse
        verticalGutters
      >
        <div className="club-full__info-container">
          {props.currentUser ? (
            !isMember && (
              <button className="button club-full__cta" onClick={join}>
                <PlusCircle /> Become a member of this club
              </button>
            )
          ) : (
            <LoginLink
              className="button button--medium button--full club-full__login"
              label="Login/Signup to become a member"
            />
          )}

          {editing ? (
            <div className="club-full__sidebar-content">
              <TextInput
                label="Address"
                name="location[address]"
                onChange={handleChange}
                value={(club.location || {}).address || ''}
                multiline
              />
              <TextInput
                label="Latitude"
                name="location[lat]"
                onChange={handleChange}
                value={(club.location || {}).lat || ''}
              />
              <TextInput
                label="Longitude"
                name="location[lng]"
                onChange={handleChange}
                value={(club.location || {}).lng || ''}
              />
              <TextInput
                label="Email"
                name="email"
                onChange={handleChange}
                value={club.email || ''}
              />
              <TextInput
                label="Github URL"
                name="github"
                onChange={handleChange}
                value={club.github || ''}
              />
              <TextInput
                label="Club URL"
                name="clubUrl"
                onChange={handleChange}
                value={club.clubUrl || ''}
              />
            </div>
          ) : (
            <ClubInfo
              club={{
                address: (club.location || {}).address,
                clubUrl: club.clubUrl || '',
                email: club.email || '',
                github: club.githubUrl || ''
              }}
            />
          )}
        </div>

        <div className="club-full__description">
          <div>
            {editing && (
              <>
                <h2>Banner image URL</h2>
                <TextInput
                  label="Banner image URL"
                  name="bannerImageUrl"
                  onChange={handleChange}
                  value={club.bannerImageUrl || ''}
                />
                <h2>Club image URL</h2>
                <TextInput
                  label="Club image URL"
                  name="imageUrl"
                  onChange={handleChange}
                  value={club.imageUrl || ''}
                />
              </>
            )}

            {editing ? (
              <>
                <h2>Description</h2>
                <TextInput
                  label="Description"
                  multiline
                  name="description"
                  onChange={handleChange}
                  value={club.description || ''}
                />
                <h2>Code of conduct</h2>
                <TextInput
                  label="Code of Conduct"
                  multiline
                  name="codeOfConduct"
                  onChange={handleChange}
                  value={club.codeOfConduct || ''}
                />
              </>
            ) : (
              <>
                {club.description && (
                  <>
                    <h2>Description</h2>
                    <ReactMarkdown source={club.description || ''} />
                  </>
                )}
                {club.codeOfConduct && (
                  <>
                    <h2>Code of conduct</h2>
                    <ReactMarkdown source={club.codeOfConduct || ''} />
                  </>
                )}
              </>
            )}

            <div className="club-full__button-list">
              {editing && (
                <>
                  <button
                    className="member__button button button--reset"
                    onClick={handleClick(false)}
                  >
                    <X size={16} /> Cancel
                  </button>

                  <button
                    className="member__button button button--submit"
                    onClick={handleSubmit}
                  >
                    <Check size={16} /> Save changes
                  </button>
                </>
              )}

              {!editing && isOwner && (
                <button
                  className="member__button button button--reset"
                  onClick={handleClick(true)}
                >
                  <Feather size={16} /> Edit club
                </button>
              )}
            </div>
          </div>

          {club.users && club.users.length > 0 && (
            <div className="club-full__members-section">
              <h2>Members</h2>
              <MemberList members={club.users} />

              <Shape
                className="club-full__members-shape club-full__members-shape--waves"
                darkSkyBlue
                waves
              />
            </div>
          )}
        </div>
      </Layout2ColsUnequal>
    </LayoutContained>
  );
}

function mapStateToProps(state) {
  return {
    currentUser: state.user.user
  };
}

export default connect(mapStateToProps)(withApollo(ClubFull));
