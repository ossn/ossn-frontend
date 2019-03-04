/**
 * A reusable `mapStateToProps` for user data.
 *
 * @params {Object} store
 * @return {Object} user
 **/
export const mapUserToProps = store => {
  return {
    user: store.user
  };
};
