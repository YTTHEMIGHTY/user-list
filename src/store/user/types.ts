// User Interface
export interface IUserOld {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  no: number
}

export interface IUserLocation {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

export interface IUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
  no: number;
  gender?: string;
  email?: string;
  dateOfBirth?: string;
  phone?: string;
  location?: IUserLocation;
  registerDate?: string;
  updatedDate?: string;
}

// User Request Wrrapers
export interface IUserResponse {
  data: IUser[];
  total: number;
  page: number;
  limit: number;
}

// User State
export interface UserState {
  pending: boolean;
  users: IUserResponse;
  error: string | null;
  currentUser: IUser;
}


// User Payload - passing b/w saga to reducer
export interface FetchUserSuccessPayload {
  users: IUserResponse;
}

export interface FetchUserFailurePayload {
  error: string;
}


// Action Types
export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// User Actions
export interface FetchUserRequest {
  type: typeof FETCH_USER_REQUEST;
  payload: {page: number, users: IUser[]}
}

export type FetchUserSuccess = {
  type: typeof FETCH_USER_SUCCESS;
  payload: {users: IUserResponse};
};

export type FetchUserFailure = {
  type: typeof FETCH_USER_FAILURE;
  payload: {error: string};
};

// export type UserActions =
//   | FetchUserRequest
//   | FetchUserSuccess
//   | FetchUserFailure;





// User Payload - passing b/w saga to reducer
export interface FetchDetailsSuccessPayload {
  currentUser: IUser;
}

export interface FetchDetailsFailurePayload {
  error: string;
}

// Action Types
export const FETCH_DETAILS_REQUEST = "FETCH_DETAILS_REQUEST";
export const FETCH_DETAILS_SUCCESS = "FETCH_DETAILS_SUCCESS";
export const FETCH_DETAILS_FAILURE = "FETCH_DETAILS_FAILURE";

// User Actions
export interface IDetailsRequest {
  type: typeof FETCH_DETAILS_REQUEST;
  payload: string
}

export type IDetailsSuccess = {
  type: typeof FETCH_DETAILS_SUCCESS;
  payload: {currentUser: IUser};
};

export type IDetailsFailure = {
  type: typeof FETCH_DETAILS_FAILURE;
  payload: {error: string};
};

export type UserActions =
  | FetchUserRequest
  | FetchUserSuccess
  | FetchUserFailure
  | IDetailsRequest
  | IDetailsSuccess
  | IDetailsFailure;