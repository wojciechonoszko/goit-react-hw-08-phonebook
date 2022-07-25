const getIsLoggedIn = state => state.quth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetchingCurrentUser = state =>  state.auth.isFetchingCurrentUser;

const authSelectors = {
    getIsLoggedIn,
    getUserName,
    getIsFetchingCurrentUser,
};

export default authSelectors;