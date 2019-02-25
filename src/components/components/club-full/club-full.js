import "./club-full.scss";

import { navigate } from "gatsby";
import compose from "immer";
import { setWith } from "lodash";
import React, { useEffect, useState } from "react";
import { withApollo } from "react-apollo";
import { Check, Feather, PlusCircle, X } from "react-feather";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";

import GatsbyConfig from "../../../../gatsby-config";
import clubCover from "../../../images/ClubCover.png";
import groupSmallImage from "../../../images/group-small.jpg";
import TextInput from "../../forms/text-input/text-input";
import { LoginLink } from "../../layouts/auth-wrapper/auth-wrapper";
import Layout2ColsUnequal from "../../layouts/layout-2col-unequal/layout-2col-unequal";
import LayoutContained from "../../layouts/layout-contained/layout-contained";
import ClubInfo from "../club-info/club-info";
import MemberList from "../member-list/member-list";
import Shape from "../shape/shape";
import * as queries from "./queries";

/**
 * Detailed view of a club including related events and members
 *
 * @param props
 */
function ClubFull(props) {
  const { title, ...rest } = props.club;
  const [club, setClub] = useState({ name: title, ...rest });
  const [editing, setEditing] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [history, setHistory] = useState(props.club);

  /**
   * Fetches the club resource and updates the state
   */
  useEffect(() => {
    const [id] = window.location.pathname.split("/").slice(-1);

    getClub(id).then(updateClub);
  }, []);

  /**
   * Updates the document title when the state's club name changes
   */
  useEffect(() => {
    document.title = `${club.name} | ${GatsbyConfig.siteMetadata.title}`;
  }, [club.name]);

  /**
   * Updates the currentUser's role variables that are being used for UX purposes.
   */
  useEffect(() => {
    if (props.currentUser) {
      const user = (club.users || []).find(
        user => user.id === props.currentUser.id
      );

      if (user) {
        setIsMember(true);

        if (["admin", "club_owner"].includes(user.role)) {
          setIsOwner(true);
        }
      }
    }
  }, [club.users, props.currentUser]);

  /**
   * Updates the editing variable that is being used for UX purposes.
   *
   * @param {boolean} editing
   */
  function handleClick(editing) {
    return function() {
      editing ? setHistory(club) : setClub(history);
      setEditing(editing);
    };
  }

  /**
   * Updates the state's club object
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  function handleChange(event) {
    setClub(
      compose(
        club,
        function(draftClub) {
          setWith(draftClub, event.target.name, event.target.value || "");
        }
      )
    );
  }

  /**
   *
   */
  async function handleSubmit() {
    const { events, location, users, ...rest } = club;

    const { data } = await props.client.mutate({
      fetchPolicy: "no-cache",
      mutation: queries.EDIT_CLUB,
      variables: { ...location, ...rest }
    });

    if (data.editClub) {
      setClub({ ...club, ...data.editClub });
      setEditing(false);
    }
  }

  async function joinClub() {
    try {
      const { data } = await props.client.mutate({
        mutation: queries.JOIN_CLUB,
        variables: { id: club.id }
      });

      if (data.joinClub) {
        setClub({ ...club, users: (await getClub(club.id)).users });
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  /**
   * Fetches a club resource by id and returns it
   *
   * @param {string} id
   */
  async function getClub(id) {
    try {
      const { data } = await props.client.query({
        fetchPolicy: "no-cache",
        query: queries.GET_CLUB,
        variables: { id: id.toString() }
      });

      return data.club;
    } catch (error) {
      if (error.toString() == "Error: GraphQL error: record not found") {
        navigate("/404");
      }
    }
  }

  function updateClub(club) {
    if (!club) {
      return;
    }

    setClub(club);
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
                  value={club.name || ""}
                />

                <TextInput
                  label="Subtitle"
                  name="sortDescription"
                  onChange={handleChange}
                  value={club.sortDescription || ""}
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
              <button className="button club-full__cta" onClick={joinClub}>
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
                value={(club.location || {}).address || ""}
                multiline
              />
              <TextInput
                label="Latitude"
                name="location[lat]"
                onChange={handleChange}
                value={(club.location || {}).lat || ""}
              />
              <TextInput
                label="Longitude"
                name="location[lng]"
                onChange={handleChange}
                value={(club.location || {}).lng || ""}
              />
              <TextInput
                label="Email"
                name="email"
                onChange={handleChange}
                value={club.email || ""}
              />
              <TextInput
                label="Github URL"
                name="githubUrl"
                onChange={handleChange}
                value={club.githubUrl || ""}
              />
              <TextInput
                label="Club URL"
                name="clubUrl"
                onChange={handleChange}
                value={club.clubUrl || ""}
              />
            </div>
          ) : (
            <ClubInfo
              club={{
                address: (club.location || {}).address,
                clubUrl: club.clubUrl || "",
                email: club.email || "",
                github: club.githubUrl || ""
              }}
            />
          )}
        </div>

        <div className="club-full__description">
          {editing && (
            <>
              <h2>Banner image URL</h2>
              <TextInput
                label="Banner image URL"
                name="bannerImageUrl"
                onChange={handleChange}
                value={club.bannerImageUrl || ""}
              />
              <h2>Club image URL</h2>
              <TextInput
                label="Club image URL"
                name="imageUrl"
                onChange={handleChange}
                value={club.imageUrl || ""}
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
                value={club.description || ""}
              />
              <h2>Code of conduct</h2>
              <TextInput
                label="Code of Conduct"
                multiline
                name="codeOfConduct"
                onChange={handleChange}
                value={club.codeOfConduct || ""}
              />
            </>
          ) : (
            <>
              {club.description && (
                <>
                  <h2>Description</h2>
                  <ReactMarkdown source={club.description || ""} />
                </>
              )}
              {club.codeOfConduct && (
                <>
                  <h2>Code of conduct</h2>
                  <ReactMarkdown source={club.codeOfConduct || ""} />
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

          <div className="club-full__members-section">
            {club.users && club.users.length > 0 && (
              <>
                <h2>Members</h2>
                <MemberList members={club.users} />

                <Shape
                  className="club-full__members-shape club-full__members-shape--waves"
                  darkSkyBlue
                  waves
                />
              </>
            )}
          </div>
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
