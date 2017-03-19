import actionTypes from '../constants/actions'
import UserState, { initialState } from './models/UserState'

export default function user(state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return new UserState(state)
        .withName(action.payload.userData.getName())
        .withProfileImage(action.payload.userData.getProfileImage())
        .withIsLoggedIn(true)
        .getState()
    case actionTypes.LOGOUT_SUCCESS:
      return new UserState(initialState).getState()
    default:
      return state
  }
}
