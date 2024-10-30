import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

const API_URL = 'https://67180ab4b910c6a6e02aefed.mockapi.io/api/gk';
function* fecthJobs(){
  try {
    const response = yield call(axios.get, API_URL);
    yield put({ type: 'FETCH_JOBS_SUCCESS', payload: response.data });
  } catch (error) {
    yield put({ type: 'FETCH_JOBS_FAILURE', payload: error.message });
  }
}
function* createJob(action) {
  try {
    const response = yield call(axios.post, API_URL, action.payload);
    yield put({ type: 'CREATE_JOB_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* updateJob(action) {
  try {
    const response = yield call(axios.put, `${API_URL}/${action.payload.id}`, action.payload);
    yield put({ type: 'UPDATE_JOB_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
}

function* deleteJob(action) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put({ type: 'DELETE_JOB_SUCCESS', payload: action.payload });
  } catch (error) {
    console.error(error);
  }
}

export function* watchJobs() {
  yield takeLatest('FETCH_JOBS_REQUEST', fecthJobs);
  yield takeLatest('CREATE_JOB_REQUEST', createJob);
  yield takeLatest('UPDATE_JOB_REQUEST', updateJob);
  yield takeLatest('DELETE_JOB_REQUEST', deleteJob);
}
