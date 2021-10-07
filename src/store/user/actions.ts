import {
  IUser,
  FETCH_USER_REQUEST,
  FETCH_USER_FAILURE,
  FETCH_USER_SUCCESS,
  FetchUserRequest,
  FetchUserSuccess,
  FetchUserSuccessPayload,
  FetchUserFailure,
  FetchUserFailurePayload,

  FETCH_DETAILS_REQUEST,
  FETCH_DETAILS_FAILURE,
  FETCH_DETAILS_SUCCESS,

  IDetailsRequest,
  IDetailsSuccess,
  FetchDetailsSuccessPayload,
  IDetailsFailure,
  FetchDetailsFailurePayload,
} from "./types";


export const fetchUserRequest = (page: number, users: IUser[]): FetchUserRequest => ({
  type: FETCH_USER_REQUEST,
  payload: {page, users}
});

export const fetchUserSuccess = (
  payload: FetchUserSuccessPayload
): FetchUserSuccess => ({
  type: FETCH_USER_SUCCESS,
  payload,
});

export const fetchUserFailure = (
  payload: FetchUserFailurePayload
): FetchUserFailure => ({
  type: FETCH_USER_FAILURE,
  payload,
});




export const fetchDetailsRequest = (userId: string): IDetailsRequest => ({
  type: FETCH_DETAILS_REQUEST,
  payload: userId
});

export const fetchDetailsSuccess = (
  payload: FetchDetailsSuccessPayload
): IDetailsSuccess => ({
  type: FETCH_DETAILS_SUCCESS,
  payload,
});

export const fetchDetailsFailure = (
  payload: FetchDetailsFailurePayload
): IDetailsFailure => ({
  type: FETCH_DETAILS_FAILURE,
  payload,
});


