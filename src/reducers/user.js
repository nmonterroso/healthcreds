import actionTypes from '../constants/actions'
import User, { initialState } from '../models/User'

export default function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return new User(state)
        .withName(action.payload.name)
        .withIsLoggedIn(true)
        .getState()
    case actionTypes.LOGIN_FAILURE:
      return state
    default:
      return state
  }
}
