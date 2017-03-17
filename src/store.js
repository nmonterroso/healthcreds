import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import { restorePastSession } from './actions/user'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(rootReducer, {},
  composeEnhancers(
    applyMiddleware(thunk),
  ),
)

store.dispatch(restorePastSession())
