import { call, put, takeEvery } from "redux-saga/effects";
import { setLoading } from "../slices/loadingSlice";
import { getProducts } from "../../Services/ProductService";
import { setData, setError } from "../slices/dataSlice";

function* getDataSaga() {
  try {
    yield put(setLoading(true));
    const { data } = yield call(getProducts);
    yield put(setData(data));
    yield put(setLoading(false));
  } catch {
    yield put(setError("Error fetching data"));
    yield put(setLoading(false));
  }
}

export function* watchGetDataSaga() {
  yield takeEvery("data/getData", getDataSaga);
}
