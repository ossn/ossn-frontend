import { produce } from "immer";
import React, { useCallback, useEffect, useReducer, useState } from "react";
import { withApollo } from "react-apollo";
import { Check, Feather, PlusCircle, X } from "react-feather";
import ReactMarkdown from "react-markdown";
import { connect } from "react-redux";

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
import * as helpers from "./helpers";
import { reducer } from "./reducers";
import * as requests from "./requests";

/**
 * Displays a club's details including related events and members
 *
 * @param {object} props
 */
function ClubFull(props) {
  const [state, dispatch] = useReducer(produce(reducer), props.club);
  const [canEdit, setCanEdit] = useState(false);
  const [editing, setEditing] = useState(false);
  const [isMember, setIsMember] = useState(false);
  const [id] = window.location.pathname.split("/").slice(-1);

  /**
   * Fetches a club resource and updates the state
   */
  useEffect(() => {
    requests
      .fetchClub(id)
      .then(updateState)
      .catch(helpers.handleError);
  }, [id]);

  /**
   * Updates document's title when state's name changes
   */
  useEffect(() => {
    helpers.updateDocumentTitle(state.name);
  }, [state.name]);

  /**
   * Updates the currentUser's role variables that are being used for UX purposes.
   */
  useEffect(() => {
    if (props.currentUser) {
      const { id } = props.currentUser;

      const user = helpers.findOne.call(state.users, { id });

      if (user) {
        setIsMember(true);

        if (helpers.isAdmin(user)) {
          setCanEdit(true);
        }
      }
    }
  }, [props.currentUser, state.users]);

  /**
   *
   * @param {string} name
   * @param {string} value
   */
  function changeValue(name, value) {
    dispatch({ payload: { name, value }, type: "valueChange" });
  }

  /**
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  function handleChange(event) {
    changeValue(event.target.name, event.target.value);
  }

  /**
   * Updates the editing variable that is being used for UX purposes.
   *
   * @param {boolean} editing
   */
  function handleClick(editing) {
    return () => {
      setEditing(editing);
    };
  }

  /**
   *
   */
  const handleJoin = useCallback(async () => {
    try {
      await requests.joinClub(id);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  }, [id]);

  /**
   *
   */
  const handleUpdate = useCallback(async () => {
    try {
      updateState(await requests.updateClub(state));
      setEditing(false);
    } catch (error) {
      // eslint-disable-next-line
      console.error(error);
    }
  }, [state]);

  function updateState(nextState) {
    dispatch({ payload: nextState, type: "stateUpdate" });
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
              <button className="button club-full__cta" onClick={handleJoin}>
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
                name="githubUrl"
                onChange={handleChange}
                value={state.githubUrl || ""}
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
          {editing ? (
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

          {canEdit && (
            <div className="club-full__button-list">
              {editing ? (
                <>
                  <button
                    className="member__button button button--reset"
                    onClick={handleClick(false)}
                  >
                    <X size={16} /> Cancel
                  </button>

                  <button
                    className="member__button button button--submit"
                    onClick={handleUpdate}
                  >
                    <Check size={16} /> Save changes
                  </button>
                </>
              ) : (
                <button
                  className="member__button button button--reset"
                  onClick={handleClick(true)}
                >
                  <Feather size={16} /> Edit club
                </button>
              )}
            </div>
          )}

          {state.users && state.users.length > 0 && (
            <div className="club-full__members-section">
              <h2>Members</h2>
              <MemberList members={state.users} />

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

export default connect(helpers.mapStateToProps)(withApollo(ClubFull));
