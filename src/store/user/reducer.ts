import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_SUCCESS,
  UserActions, 
  UserState
} from "./types";


const initialState: UserState = {
  pending: false,
  users: {
    data: [], 
    total:0, 
    page:0, 
    limit:0
  },
  error: null,
  currentUser: {
    id: '',
    title: '',
    firstName: '',
    lastName: '',
    picture: '',
    no: 0
  }
};


function UserReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        pending: false,
        users: action.payload.users,
        error: null,
      };
    case FETCH_USER_FAILURE:
      return {
        ...state,
        pending: false,
        users: null,
        error: action.payload.error,
        currentUser: null
      };
    case FETCH_DETAILS_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DETAILS_SUCCESS:
      return {
        ...state,
        pending: false,
        currentUser: action.payload.currentUser,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};

export default UserReducer;