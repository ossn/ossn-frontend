export function mapStateToProps(state) {
  return {
    currentUser: state.user.user
  };
}
