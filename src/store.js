import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import { activeEnv } from './settings';

const reducers = combineReducers({
  user: userReducer,
})

const initialState = {}
const middleware = [thunk]

const composeEnhancers =
  (activeEnv === 'development' &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const composedEnhancers = composeEnhancers(applyMiddleware(...middleware))

const store = createStore(reducers, initialState, composedEnhancers)

export default store
