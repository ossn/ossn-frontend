/*
	A reusable `mapStateToProps` for user data
*/
export const mapUserToProps = (store) => {
	return {
	      user: store.user
	 };
}
