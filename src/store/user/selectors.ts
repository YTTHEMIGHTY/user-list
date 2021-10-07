import { createSelector } from "reselect";
import { AppState } from "../rootReducer";

const getUsers   = (state: AppState) => state.user['users'];
const getPending = (state: AppState) => state.user['pending'];
const getError   = (state: AppState) => state.user['error'];

const getUserDetails   = (state: AppState) => state.user['currentUser'];

// const getUsers   = (state: AppState) => state.user.users;
// const getPending = (state: AppState) => state.user.pending;
// const getError   = (state: AppState) => state.user.error;

export const getUsersSelector = createSelector(getUsers, (users) => users);
export const getPendingSelector = createSelector(getPending, (pending) => pending);
export const getErrorSelector = createSelector(getError, (error) => error);

export const getUserDetailsSelector = createSelector(getUserDetails, (currentUser) => currentUser);