import { navigate } from "gatsby";

import GatsbyConfig from "../../../../gatsby-config";

/**
 *
 * @param {object} conditions
 */
export function findOne(conditions) {
  return this.find(element =>
    Object.keys(conditions).every(key => conditions[key] === element[key])
  );
}

/**
 *
 * @param {Error} error
 */
export function handleError(error) {
  if (error.toString() == "Error: GraphQL error: record not found") {
    navigate("/404");
  }
}

/**
 *
 * @param {object} user
 */
export function isAdmin(user) {
  return ["admin", "club_owner"].indexOf(user.role) !== -1;
}

/**
 *
 * @param {object} state
 */
export function mapStateToProps(state) {
  return {
    currentUser: state.user.user
  };
}

/**
 * Updates document's title
 *
 * @param {string} title
 */
export function updateDocumentTitle(title) {
  document.title = `${title} | ${GatsbyConfig.siteMetadata.title}`;
}
