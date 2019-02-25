import { navigate } from "gatsby";
import { produce } from "immer";
import React, { useEffect, useState, useReducer } from "react";
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
import "./club-full.scss";
import { mapStateToProps } from "./helpers";
import * as queries from "./queries";
import { reducer } from "./reducers";

/**
 * Detailed view of a club including related events and members
 *
 * @param props
 */
function ClubFull(props) {
  const [state, dispatch] = useReducer(produce(reducer), props.club);
  const [editing, setEditing] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [isOwner, setIsOwner] = useState(false);
  const [id] = window.location.pathname.split("/").slice(-1);

  /**
   * Fetches the club resource and updates the state
   */
  useEffect(() => {
    getClub(id).then(updateClub);
  }, []);

  /**
   * Updates the document title when the state's club name changes
   */
  useEffect(() => {
    document.title = `${state.name} | ${GatsbyConfig.siteMetadata.title}`;
  }, [state.name]);

  /**
   * Updates the currentUser's role variables that are being used for UX purposes.
   */
  useEffect(() => {
    if (props.currentUser) {
      const user = (state.users || []).find(
        user => user.id === props.currentUser.id
      );

      if (user) {
        setIsMember(true);

        if (["admin", "club_owner"].includes(user.role)) {
          setIsOwner(true);
        }
      }
    }
  }, [state.users, props.currentUser]);

  /**
   * Updates the editing variable that is being used for UX purposes.
   *
   * @param {boolean} editing
   */
  function handleClick(editing) {
    return function() {
      setEditing(editing);
    };
  }

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  function handleChange(event) {
    dispatch({
      payload: {
        name: event.target.name,
        value: event.target.value
      },
      type: "valueChange"
    });
  }

  /**
   *
   */
  async function handleSubmit() {
    const { events, location, users, ...rest } = state;

    const { data } = await props.client.mutate({
      fetchPolicy: "no-cache",
      mutation: queries.EDIT_CLUB,
      variables: { ...location, ...rest }
    });

    if (data.editClub) {
      dispatch({
        payload: data.editClub,
        type: "stateUpdate"
      });

      setEditing(false);
    }
  }

  async function joinClub() {
    try {
      const { data } = await props.client.mutate({
        mutation: queries.JOIN_CLUB,
        variables: { id }
      });

      if (data.joinClub) {
        getClub(id).then(updateClub);
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
        variables: { id }
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

    dispatch({
      payload: club,
      type: "stateUpdate"
    });
  }

  return (
    <LayoutContained className="club-full">
      <header className="club-full__header">
        <div className="club-full__cover-wrapper">
          <img
            alt=""
            className="club-full__cover-image"
            src={state.bannerImageUrl || clubCover}
          />
        </div>

        <div className="club-full__header-bottom">
          <div className="club-full__profile-picture-section">
            <div className="club-full__profile-picture-wrapper">
              <img
                alt="Club profile"
                className="club-full__profile-picture"
                src={state.imageUrl || groupSmallImage}
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
                  value={state.name || ""}
                />

                <TextInput
                  label="Subtitle"
                  name="shortDescription"
                  onChange={handleChange}
                  value={state.shortDescription || ""}
                />
              </>
            ) : (
              <>
                {state.name && (
                  <h1 className="club-full__title">{state.name}</h1>
                )}
                {state.shortDescription && (
                  <p className="club-full__subtitle">
                    {state.shortDescription}
                  </p>
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
                value={(state.location || {}).address || ""}
                multiline
              />
              <TextInput
                label="Latitude"
                name="location[lat]"
                onChange={handleChange}
                value={(state.location || {}).lat || ""}
              />
              <TextInput
                label="Longitude"
                name="location[lng]"
                onChange={handleChange}
                value={(state.location || {}).lng || ""}
              />
              <TextInput
                label="Email"
                name="email"
                onChange={handleChange}
                value={state.email || ""}
              />
              <TextInput
                label="Github URL"
                name="github"
                onChange={handleChange}
                value={state.github || ""}
              />
              <TextInput
                label="Club URL"
                name="clubUrl"
                onChange={handleChange}
                value={state.clubUrl || ""}
              />
            </div>
          ) : (
            <ClubInfo
              club={{
                address: (state.location || {}).address,
                clubUrl: state.clubUrl || "",
                email: state.email || "",
                github: state.githubUrl || ""
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
                value={state.bannerImageUrl || ""}
              />
              <h2>Club image URL</h2>
              <TextInput
                label="Club image URL"
                name="imageUrl"
                onChange={handleChange}
                value={state.imageUrl || ""}
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
                value={state.description || ""}
              />
              <h2>Code of conduct</h2>
              <TextInput
                label="Code of Conduct"
                multiline
                name="codeOfConduct"
                onChange={handleChange}
                value={state.codeOfConduct || ""}
              />
            </>
          ) : (
            <>
              {state.description && (
                <>
                  <h2>Description</h2>
                  <ReactMarkdown source={state.description || ""} />
                </>
              )}
              {state.codeOfConduct && (
                <>
                  <h2>Code of conduct</h2>
                  <ReactMarkdown source={state.codeOfConduct || ""} />
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
            {state.users && state.users.length > 0 && (
              <>
                <h2>Members</h2>
                <MemberList members={state.users} />

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

export default connect(mapStateToProps)(withApollo(ClubFull));
