import { IUser, IUserResponse, FETCH_USER_REQUEST, FetchUserRequest } from "./types";
import { fetchUserFailure, fetchUserSuccess } from "./actions";
//
import { FETCH_DETAILS_REQUEST, IDetailsRequest } from "./types";
import { fetchDetailsFailure, fetchDetailsSuccess } from "./actions";
//
import { TOKEN_APP_ID } from "../../config/constants"
import axios, { AxiosResponse } from "axios";
import { all, call, put, takeLatest } from "redux-saga/effects";

const getUsers = (page: number) =>
  axios.get<IUserResponse>(`https://dummyapi.io/data/v1/user?page=${page}&limit=20`, 
    { 'headers': { 'app-id': TOKEN_APP_ID } });

const getUserDetails = (userId: string) =>
  axios.get<IUser>(`https://dummyapi.io/data/v1/user/${userId}`, 
    { 'headers': { 'app-id': TOKEN_APP_ID } });


function* fetchUsersSaga(action: FetchUserRequest) {
  const page = action.payload.page;
  let oldUsersList = action.payload.users;
  console.log("_oldUsersList_____",oldUsersList);
  try {
    let response: AxiosResponse<IUserResponse> = yield call(getUsers, page);
    
    let fullUsersList =  oldUsersList.concat(response.data.data);
    fullUsersList.forEach((usr, i) => {
      usr.no = i+1
    });
    response.data['data'] = fullUsersList

    console.log("_newUsersList_____",response.data.data);
    yield put(
      fetchUserSuccess({ users:  response.data})
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
        yield put( fetchUserFailure({ error: e.message, }) );
    }
  }
}


function* fetchDetailsSaga(action: IDetailsRequest) {
  const userId = action.payload;
  try {
    let response: AxiosResponse<IUser> = yield call(getUserDetails, userId);
    console.log("_fetchDetails_____",response.data);
    yield put(
      fetchDetailsSuccess({ currentUser:  response.data})
    );
  } catch (e: unknown) {
    if (e instanceof Error) {
        yield put( fetchDetailsFailure({ error: e.message, }) );
    }
  }
}



function* UserSaga() {
  yield all([
    takeLatest(FETCH_USER_REQUEST, fetchUsersSaga),
    takeLatest(FETCH_DETAILS_REQUEST, fetchDetailsSaga),
  ]);
}

export default UserSaga;