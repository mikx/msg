import { createStore, compose, applyMiddleware } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import thunk from 'redux-thunk'

import rootReducer from './reducers'
import rootEpic from './epics/rootEpic'

import { loginWithCookies } from './actions'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const epicMiddleware = createEpicMiddleware(rootEpic)

export const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(thunk, epicMiddleware)),
)

store.dispatch(loginWithCookies())
