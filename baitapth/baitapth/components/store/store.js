import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
 import rootReducer from './reducer/index';
 import rootSaga from './saga/index';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
);

// Run the saga
sagaMiddleware.run(rootSaga);

export default store;