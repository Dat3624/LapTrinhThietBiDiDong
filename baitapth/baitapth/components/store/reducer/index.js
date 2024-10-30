import { combineReducers } from 'redux';
import jobsReducer from './jobsReducer/index';

const rootReducer = combineReducers({
  jobs: jobsReducer,
});

export default rootReducer;