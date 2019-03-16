import { navigate } from "gatsby";
import React from "react";
import { withApollo } from "react-apollo";
import {
  Calendar,
  Check,
  Feather,
  GitHub,
  Inbox,
  Link,
  Users,
  X
} from "react-feather";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import GatsbyConfig from "../../../../gatsby-config";
import memberImage from "../../../images/member-136x136.png";
import { returnKeyCheck } from "../../../utils/accessibility";
import { mapUserToProps } from "../../../utils/redux-utils";
import TextInput from "../../forms/text-input/text-input";
import LayoutContained from "../../layouts/layout-contained/layout-contained";
import ShadowBox from "../shadow-box/shadow-box";
import Shape from "../shape/shape";
import { editUserMutation, getUserQuery } from "./member-queries";
import "./member.scss";

/**
 * Profile page template.
 * This component is used for showing and editing a member's profile.
 *
 * handling props:
 * editable: if true, shows the 'edit' button. This button can trigger the edit
 * state of the component.
 *
 * The state has the profile information and the edit flag.
 * If the edit flag is true, every field is an input element. Else is a label.
 * The state also stores the state of the component,
 * so modifications on edit can be undone.
 */

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

/**
 * Shuffles shapes to print them randomly in different areas.
 * Uses Fisher-Yates (aka Knuth) Shuffle algorithm.
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
const shuffle = array => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

class Member extends React.PureComponent {
  constructor(props) {
    super(props);

    const initData = {
      name: this.props.member.name,
      isOverTheLegalLimit: this.props.member.isOverTheLegalLimit,
      imageUrl: this.props.member.imageUrl,
      sortDescription: this.props.member.sortDescription,
      clubs: this.props.member.clubs || [],
      githubUrl: this.props.member.githubUrl,
      personalUrl: this.props.member.personalUrl,
      description: this.props.member.description,
      receiveNewsletter: this.props.member.receiveNewsletter,
      clubsToPreserve: (this.props.member.clubs || []).map(club => club.id),
      shapes: shuffle(shapesUnordered),
      editable: !!this.isCurrentUser(),
      edit: false
    };

    this.state = {
      ...initData,
      history: {
        ...initData
      }
    };
  }

  /**
   * Fetches the user resource and updates the state.
   */
  componentDidMount = () => {
    let { id } = this.props.member;
    if (!id) {
      id = this.getIdFromPath();
    }

    if (window.location.search.includes("edit=true")) {
      this.setState({ edit: true });
    }

    this.props.client
      .query({
        query: getUserQuery,
        variables: { id }
      })
      .then(({ data = {} }) => {
        if (data.user) {
          const graphData = {
            ...data.user,
            clubsToPreserve: data.user.clubs.map(club => club.id),
            editable: !!this.isCurrentUser()
          };

          return this.setState(({ shapes, edit }) => ({
            ...graphData,
            edit,
            shapes,
            history: {
              ...graphData,
              edit,
              shapes
            }
          }));
        }
      })
      .catch(e => {
        //TODO: Handle error
        if (e.toString() == "Error: GraphQL error: record not found") {
          navigate("/404");
        }
      });
  };

  /**
   * Updates editable state according to the current user.
   *
   * @param prevProps
   */
  componentDidUpdate(prevProps) {
    if ((prevProps.user.user || {}).id !== (this.props.user.user || {}).id) {
      this.setState({ editable: !!this.isCurrentUser() });
    }
    const urlHasEdit = window.location.search.includes("edit=true");
    if (urlHasEdit !== this.state.edit) {
      this.setState({ edit: urlHasEdit });
    }
  }

  /**
   * Returns viewed user id from path.
   */
  getIdFromPath = () => {
    let path = this.props.location.pathname.split("/");
    return path[path.indexOf("members") + 1].split("?")[0];
  };

  /**
   * Checks if the logged in user is the same as the viewed user.
   * @returns {boolean}
   */
  isCurrentUser = () => {
    let { id } = this.props.member;
    if (!id) {
      id = this.getIdFromPath();
    }

    return this.props.user.user && id === this.props.user.user.id;
  };

  /**
   * Updates the state's user object
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   */
  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.type === "checkbox" ? target.checked : target.value
    });
  };

  /**
   * Updates the state's user object club subscriptions.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event
   * @param {object} event.target
   * @param {boolean} event.target.checked
   * @param {string} event.target.name
   */
  handleClubSubscription = ({ target: { checked, name: clubId } }) => {
    this.setState(({ clubsToPreserve }) => ({
      clubsToPreserve: checked
        ? // Add club id to array
          clubsToPreserve.concat([clubId])
        : // Remove club id from array
          clubsToPreserve.filter(club => club !== clubId)
    }));
  };

  /**
   * Updates the state's user edit state
   */
  handleEdit = () => {
    navigate(`${window.location.pathname}?edit=true`);
    this.setState(state => ({ history: { ...state }, edit: true }));
  };

  /**
   * Updates the state's user edit state to false and reverts changes.
   */
  handleCancel = () => {
    navigate(`${window.location.pathname}`);
    this.setState(state => ({ ...state.history, edit: false }));
  };

  /**
   * Updates state's user object and edit state.
   */
  handleSave = () => {
    navigate(`${window.location.pathname}`);
    this.setState(({ clubsToPreserve, clubs }) => ({
      clubs: clubs.filter(club => clubsToPreserve.includes(club.id)),
      edit: false
    }));
  };

  /**
   * Submits changes to user.
   */
  handleSubmit = e =>
    this.props.client
      .mutate({
        variables: {
          ...this.state,
          clubs: this.state.clubsToPreserve
        },
        mutation: editUserMutation
      })
      .then(this.handleSave);

  render() {
    const snapshot = this.state;
    const isEditing = snapshot.edit && this.isCurrentUser();

    const name = isEditing ? (
      <TextInput
        label="Name"
        name="name"
        onChange={this.handleChange}
        value={snapshot.name}
        className="member__text-field form-input--member form-input--member-name"
        placeholder="name"
        required
        showLabel
      />
    ) : (
      <div> {snapshot.name} </div>
    );

    const sortDescription = isEditing ? (
      <TextInput
        label="Short Description"
        name="sortDescription"
        onChange={this.handleChange}
        value={snapshot.sortDescription}
        className="member__text-field form-input--member form-input--member-name"
        showLabel
      />
    ) : (
      snapshot.sortDescription && (
        <div className="member__location-content">
          {" "}
          {snapshot.sortDescription}{" "}
        </div>
      )
    );

    const description = isEditing ? (
      <TextInput
        multiline
        label="Description"
        name="description"
        onChange={this.handleChange}
        value={snapshot.description}
        className="member__text-area"
        showLabel
      />
    ) : (
      snapshot.description && <div> {snapshot.description} </div>
    );

    const club = isEditing ? (
      <div>
        {snapshot.clubs.length > 0 && (
          <h2 className="member__checkbox-title">Unsubscribe from club</h2>
        )}

        {snapshot.clubs.length > 0 &&
          snapshot.clubs.map((club, i) => {
            return (
              <div
                className="member__checkbox member__checkbox--with-icon"
                key={club.id}
              >
                <Users className="member__icon" />
                <label htmlFor={"club-" + club.id}>
                  <input
                    name={club.id}
                    type="checkbox"
                    defaultChecked
                    id={"club-" + club.id}
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
            .map(club => club.name || "Club name missing")
            .join(", ")}
        </div>
      )
    );

    const newsletter = isEditing && (
      <div className="member__newsletter">
        <div className="member__checkbox member__checkbox--with-icon">
          <Inbox className="member__icon" />
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

    const isOverTheLegalLimit = isEditing && (
      <div className="member__legal">
        <Shape seafoamBlue waveLarge divider className="member__divider" />

        <div className="member__checkbox member__checkbox--with-icon">
          <Calendar className="member__icon" />
          <label htmlFor="isOverTheLegalLimit">
            <input
              name="isOverTheLegalLimit"
              type="checkbox"
              id="isOverTheLegalLimit"
              defaultChecked={snapshot.isOverTheLegalLimit}
              onChange={this.handleChange}
              required
            />
            I am older than 18 years old
          </label>
        </div>
      </div>
    );

    const github = isEditing ? (
      <div className="member__text-field--wrapper-with-icon">
        <GitHub className="member__icon" />
        <TextInput
          label="Github Url"
          name="githubUrl"
          onChange={this.handleChange}
          value={snapshot.githubUrl}
          className="member__text-field form-input--member form-input--member-name"
        />
      </div>
    ) : (
      snapshot.githubUrl && (
        <a href={snapshot.githubUrl} target="_blank" rel="noopener noreferrer">
          <GitHub className="member__icon" />
          <span className="member__link-content">{snapshot.githubUrl}</span>
        </a>
      )
    );

    const personalUrl = isEditing ? (
      <div className="member__text-field--wrapper-with-icon">
        <Link className="member__icon" />
        <TextInput
          label="personal web page"
          name="personalUrl"
          onChange={this.handleChange}
          value={snapshot.personalUrl}
          className="member__text-field form-input--member form-input--member-name"
        />
      </div>
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

    if (isEditing) {
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
        <button className="member__button button button--submit" type="submit">
          <Check size={16} /> Save changes
        </button>
      );
    } else if (this.isCurrentUser()) {
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

    const memberInner = (
      <div className="member__inner">
        <div className="member__shape-wrapper-left">{snapshot.shapes[1]}</div>
        <div className="member__shape-wrapper-right">{snapshot.shapes[2]}</div>
        <ShadowBox className="member__card" zeroPadding>
          <div className="member__card-shape-wrapper">{snapshot.shapes[0]}</div>
          <div className="member__card-inner">
            <div className="member__image-wrapper">
              <div className="member__image-inner">
                <img
                  src={snapshot.imageUrl || memberImage}
                  alt="profile"
                  className="member__image"
                />
              </div>
            </div>
            {name && (
              <div className="title title--small member__name">{name}</div>
            )}

            {sortDescription && (
              <div className="member__location">{sortDescription}</div>
            )}

            {description && (
              <div className="member__description">{description}</div>
            )}

            <Shape seafoamBlue waveLarge divider className="member__divider" />

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

            {github && (
              <div className="member__link member__link--github">{github}</div>
            )}

            {personalUrl && (
              <div className="member__link member__link--personal-page">
                {personalUrl}
              </div>
            )}

            {isOverTheLegalLimit}
            {newsletter}
          </div>
        </ShadowBox>

        {buttonList.length > 0 && (
          <div className="member__button-list">{buttonList}</div>
        )}
      </div>
    );

    return (
      <LayoutContained className="member">
        <Helmet>
          <title>
            {`${snapshot.name} | ${GatsbyConfig.siteMetadata.title}`}
          </title>
        </Helmet>
        {isEditing ? (
          <form onSubmit={e => e.preventDefault() || this.handleSubmit(e)}>
            {memberInner}
          </form>
        ) : (
          memberInner
        )}
      </LayoutContained>
    );
  }
}

export default connect(mapUserToProps)(withApollo(Member));
