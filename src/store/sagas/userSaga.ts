import { call, put, takeEvery } from "redux-saga/effects";
import { setLoading } from "../slices/loadingSlice";
import axios from "axios";
import { setUSer } from "../slices/userSlicce";
import { setError } from "../slices/dataSlice";

function* loginSaga(action: any) {
  try {
    yield put(setLoading(true));
    const { email, password } = action.payload;
    const dataObj = {
      email,
      password,
      returnSecureToken: true,
    };
    const apiKey = "";
    const url =
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
      apiKey;
    const { data } = yield call(axios.post, url, dataObj);
    yield put(setUSer(data));
    yield put(setLoading(false));
  } catch (e) {
    yield put(setError(e));
    yield put(setLoading(false));
  }
}

export function* watchUserSaga() {
  yield takeEvery("user/login", loginSaga);
}
