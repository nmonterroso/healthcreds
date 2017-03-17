import actionTypes from '../constants/actions'
import User, { initialState } from './models/UserState'

export default function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return new User(state)
        .withName(action.payload.name)
        .withIsLoggedIn(true)
        .getState()
    case actionTypes.LOGOUT_SUCCESS:
      return new User(initialState)
    default:
      return state
  }
}
