export const selectUserIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectUserIsLoading = state => state.auth.isLoading;

export const selectUserError = state => state.auth.error;
