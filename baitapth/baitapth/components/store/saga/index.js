import { all } from 'redux-saga/effects';
import { watchJobs } from './jobsSaga/index';

export default function* rootSaga() {
  yield all([
    watchJobs(),
  ]);
}