import { all, fork } from "redux-saga/effects";
import UserSaga from "./user/sagas";

export function* rootSaga() {
  yield all([fork(UserSaga)]);
}