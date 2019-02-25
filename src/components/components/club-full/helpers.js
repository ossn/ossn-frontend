export function findOne(conditions) {
  return this.find(element =>
    Object.keys(conditions).every(key => conditions[key] === element[key])
  );
}

export function isAdmin(user) {
  return ["admin", "club_owner"].indexOf(user.role) !== -1;
}

export function mapStateToProps(state) {
  return {
    currentUser: state.user.user
  };
}
