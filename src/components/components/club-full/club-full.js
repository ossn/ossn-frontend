import "./club-full.scss";

import { navigate } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { PlusCircle, X, Check, Feather } from "react-feather";
import ReactMarkdown from "react-markdown";

import GatsbyConfig from "../../../../gatsby-config";
import { ApolloConsumer, withApollo } from "react-apollo";
import TextInput from "../../forms/text-input/text-input";
import { returnKeyCheck } from "../../../utils/accessibility";
import { mapUserToProps } from "../../../utils/redux-utils";
import clubCover from "../../../images/ClubCover.png";
import groupSmallImage from "../../../images/group-small.jpg";
import Layout2ColsUnequal from "../../layouts/layout-2col-unequal/layout-2col-unequal";
import LayoutContained from "../../layouts/layout-contained/layout-contained";
import ClubInfo from "../club-info/club-info";
import MemberList from "../member-list/member-list";
import Shape from "../shape/shape";
import { LoginLink } from "../../layouts/auth-wrapper/auth-wrapper";
import {
  getClubQuery,
  editClubMutation,
  joinClubMutation
} from "./club-full-queries";

/*
 This is the template for a single club view.
 */
// Local modules.
class Club extends React.PureComponent {
  constructor(props) {
    super(props);

    const initData = {
      id: this.props.club.id,
      email: this.props.club.email || "",
      title: this.props.club.title || "",
      imageUrl: this.props.club.imageUrl || "",
      description: this.props.club.description || "",
      codeOfConduct: this.props.club.codeOfConduct || "",
      subtitle: this.props.club.subtitle || "",
      github: this.props.club.githubUrl || "",
      bannerImageUrl: this.props.club.bannerImageUrl || "",
      clubUrl: this.props.club.clubUrl || "",
      events: this.props.club.events || "",
      address: this.props.club.location ? this.props.club.location.address : "",
      lng: this.props.club.location ? this.props.club.location.lng : "",
      lat: this.props.club.location ? this.props.club.location.lat : "",
      users: this.props.club.users
    };

    this.state = {
      ...initData,
      edit: false,
      editable: this.isUserAdmin(),
      isMember: this.isUserMember(this.props.club.users),
      history: {
        ...initData
      }
    };
  }

  componentDidMount() {
    this.updateClub();
  }

  updateClub = () => {
    let { id } = this.props.club;

    if (!id) {
      let path = this.props.location.pathname.split("/");
      id = path[path.indexOf("clubs") + 1].split("?")[0];
    }
    this.props.client
      .query({
        query: getClubQuery,
        variables: { id },
        fetchPolicy: "network-only"
      })
      .then(({ data = {} }) => {
        if (data.club) {
          const grapgData = {
            id: data.club.id,
            email: data.club.email || "",
            title: data.club.title || "",
            imageUrl: data.club.imageUrl || "",
            description: data.club.description || "",
            codeOfConduct: data.club.codeOfConduct || "",
            subtitle: data.club.subtitle || "",
            github: data.club.githubUrl || "",
            bannerImageUrl: data.club.bannerImageUrl || "",
            clubUrl: data.club.clubUrl || "",
            events: data.club.events || "",
            address: data.club.location ? data.club.location.address : "",
            lng: data.club.location ? data.club.location.lng : "",
            lat: data.club.location ? data.club.location.lat : "",
            users: data.club.users
          };

          return this.setState({
            ...grapgData,
            editable: this.isUserAdmin(),
            isMember: this.isUserMember(data.club.users),
            history: {
              ...grapgData
            }
          });
        }
      })
      .catch(e => {
        //TODO: Handle error
        if (e.toString() == "Error: GraphQL error: record not found") {
          navigate("/404");
        }
      });
  };

  isUserMember = users => {
    return !this.isUserLoggedIn()
      ? false
      : !!users.find(user => user.id === this.props.user.user.id);
  };

  isUserLoggedIn = () => {
    return !!this.props.user.user;
  };

  isUserAdmin = () => {
    return !this.isUserMember(this.props.club.users)
      ? false
      : !!this.props.club.users.find(user => user.role === "admin");
  };

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
    address,
    lng,
    lat
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
      address,
      lng,
      lat,
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
    address,
    lng,
    lat
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
      address,
      lng,
      lat
    };

    this.setState({ history: newHistory, edit: true });
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleEdit = () => {
    const snapshot = { ...this.state };
    this.saveToHistoryAndEdit(snapshot);
  };

  handleSave = () => {
    this.setState({
      edit: false
    });
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
    const ctaPlaceholder = this.isUserMember(snapshot.users) ? (
      ""
    ) : this.isUserLoggedIn() ? (
      <ApolloConsumer>
        {client => (
          <div
            tabIndex={0}
            role="button"
            onClick={() => {
              client
                .mutate({
                  variables: {
                    id: snapshot.id
                  },
                  mutation: joinClubMutation
                })
                .then(({ data }) => {
                  if ((data || {}).joinClub) {
                    this.updateClub();
                  } else {
                    //TODO: Show error to user
                    // eslint-disable-next-line no-console
                    console.error("Failed to become a member");
                  }
                });
            }}
            onKeyDown={e => {
              returnKeyCheck(e, () => {
                client
                  .mutate({
                    variables: {
                      id: snapshot.id
                    },
                    mutation: joinClubMutation
                  })
                  .then(({ data }) => {
                    if ((data || {}).joinClub) {
                      this.updateClub();
                    } else {
                      //TODO: Show error to user
                      // eslint-disable-next-line no-console
                      console.error("Failed to become a member");
                    }
                  });
              });
            }}
            className="button club-full__cta"
          >
            <span className="club-full__cta-icon">
              <PlusCircle />
            </span>
            Become a member of this club
          </div>
        )}
      </ApolloConsumer>
    ) : (
      <LoginLink
        label="Login/Signup to become a member"
        className="button button--medium button--full club-full__login"
      />
    );

    const title = snapshot.edit ? (
      <div>
        <TextInput
          label="Title"
          name="title"
          onChange={this.handleChange}
          value={snapshot.title}
        />
      </div>
    ) : snapshot.title ? (
      <h1 className="club-full__title"> {snapshot.title} </h1>
    ) : (
      ""
    );

    const subtitle = snapshot.edit ? (
      <div>
        <TextInput
          label="Subtitle"
          name="subtitle"
          onChange={this.handleChange}
          value={snapshot.subtitle}
        />
      </div>
    ) : snapshot.subtitle ? (
      <span className="club-full__subtitle">{snapshot.subtitle}</span>
    ) : (
      ""
    );

    const clubDescription = snapshot.edit ? (
      <div>
        <h2>Description</h2>

        <TextInput
          multiline
          label="Description"
          name="description"
          onChange={this.handleChange}
          value={snapshot.description}
        />
      </div>
    ) : snapshot.description ? (
      <div>
        <h2>Description</h2>
        <ReactMarkdown source={snapshot.description} />
      </div>
    ) : (
      ""
    );

    const codeOfConduct = snapshot.edit ? (
      <div>
        <h2>Code of Conduct</h2>

        <TextInput
          multiline
          label="Code of Conduct"
          name="codeOfConduct"
          onChange={this.handleChange}
          value={snapshot.codeOfConduct}
        />
      </div>
    ) : snapshot.codeOfConduct ? (
      <div>
        <h2>Code of Conduct</h2>
        <ReactMarkdown source={snapshot.codeOfConduct} />
      </div>
    ) : (
      ""
    );

    const bannerImageUrl = snapshot.edit && (
      <div>
        <h2>Banner Image Url</h2>
        <TextInput
          label="Banner Image Url"
          name="bannerImageUrl"
          onChange={this.handleChange}
          value={snapshot.bannerImageUrl}
        />
      </div>
    );

    const imageUrl = snapshot.edit && (
      <div>
        <h2>Club Image Url</h2>
        <TextInput
          label="Club Image Url"
          name="imageUrl"
          onChange={this.handleChange}
          value={snapshot.imageUrl}
        />
      </div>
    );

    const editEmail = snapshot.edit && (
      <div>
        <TextInput
          label="Email"
          name="email"
          onChange={this.handleChange}
          value={snapshot.email}
        />
      </div>
    );

    const editGithub = snapshot.edit && (
      <div>
        <TextInput
          label="Github Url"
          name="github"
          onChange={this.handleChange}
          value={snapshot.github}
        />
      </div>
    );

    const editClubUrl = snapshot.edit && (
      <div>
        <TextInput
          label="Club Url"
          name="clubUrl"
          onChange={this.handleChange}
          value={snapshot.clubUrl}
        />
      </div>
    );

    const editLocation = snapshot.edit && (
      <div>
        <TextInput
          label="Address"
          name="address"
          onChange={this.handleChange}
          value={snapshot.address}
          multiline
        />
        <TextInput
          label="Lat"
          name="lat"
          onChange={this.handleChange}
          value={snapshot.lat}
        />
        <TextInput
          label="Lng"
          name="lng"
          onChange={this.handleChange}
          value={snapshot.lng}
        />
      </div>
    );

    const sidebarContent = snapshot.edit ? (
      <div className="club-full__sidebar-content">
        {editLocation}
        {editEmail}
        {editGithub}
        {editClubUrl}
      </div>
    ) : (
      <ClubInfo club={snapshot} />
    );

    let membersSection = "";

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
        <div key={1}>
          <ApolloConsumer>
            {client => (
              <div
                tabIndex={0}
                role="button"
                onClick={() => {
                  client.mutate({
                    variables: {
                      id: snapshot.id,
                      name: snapshot.title,
                      sortDescription: snapshot.subtitle,
                      imageUrl: snapshot.imageUrl,
                      bannerImageUrl: snapshot.bannerImageUrl,
                      description: snapshot.description,
                      codeOfConduct: snapshot.codeOfConduct,
                      email: snapshot.email,
                      githubUrl: snapshot.github,
                      clubUrl: snapshot.clubUrl,
                      address: snapshot.address,
                      lng: snapshot.lng,
                      lat: snapshot.lat
                    },
                    mutation: editClubMutation,
                    fetchPolicy: "no-cache"
                  });
                  this.handleSave();
                }}
                onKeyDown={e => {
                  returnKeyCheck(e, () => {
                    client.mutate({
                      variables: {
                        id: snapshot.id,
                        name: snapshot.title,
                        sortDescription: snapshot.subtitle,
                        imageUrl: snapshot.imageUrl,
                        bannerImageUrl: snapshot.bannerImageUrl,
                        description: snapshot.description,
                        codeOfConduct: snapshot.codeOfConduct,
                        email: snapshot.email,
                        githubUrl: snapshot.github,
                        clubUrl: snapshot.clubUrl,
                        address: snapshot.address,
                        lng: snapshot.lng,
                        lat: snapshot.lat
                      },
                      mutation: editClubMutation,
                      fetchPolicy: "no-cache"
                    });
                    this.handleSave();
                  });
                }}
                className="member__button button button--submit"
              >
                <Check size={20} />
                <span> Save changes </span>
              </div>
            )}
          </ApolloConsumer>
        </div>
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
        <Helmet>
          <title>
            {[snapshot.title, "|", GatsbyConfig.siteMetadata.title].join(" ")}
          </title>
        </Helmet>

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
              {title}
              {subtitle}
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
            {sidebarContent}
          </div>
          <div className="club-full__description">
            <div>
              {bannerImageUrl}
              {imageUrl}
              {clubDescription}
              {codeOfConduct}
              <div className="club-full__button-list">{buttonList}</div>
            </div>
            <div className="club-full__members-section">{membersSection}</div>
          </div>
        </Layout2ColsUnequal>
      </LayoutContained>
    );
  }
}

export default connect(mapUserToProps)(withApollo(Club));
