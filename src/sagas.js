import { all } from 'redux-saga/effects';
import dataSaga from './sagas/dataSaga';

function* rootSaga() {
  yield all([
    dataSaga(),
    // other sagas
  ]);
}

export default rootSaga;
