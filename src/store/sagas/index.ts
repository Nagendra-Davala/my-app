import { all } from "redux-saga/effects";
import { watchGetDataSaga } from "./dataSaga";
import { watchUserSaga } from "./userSaga";

export function* watchAllSagas() {
  yield all([watchGetDataSaga(), watchUserSaga()]);
}
