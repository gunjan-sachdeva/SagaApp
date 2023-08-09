import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from '../actions';

function* fetchDataSaga(action) {
  try {
    const response = yield call(axios.get, 'https://jsonplaceholder.typicode.com/posts');
    yield put({ type: FETCH_DATA_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_DATA_FAILURE, error });
  }
}

function* dataSaga() {
  yield takeLatest('FETCH_DATA_REQUEST', fetchDataSaga);
}

export default dataSaga;
