import actionTypes from '../constants/actions'
import UserState from './models/UserState'

export default function user(state = new UserState(), action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return state
        .withName(action.payload.userData.getName())
        .withProfileImage(action.payload.userData.getProfileImage())
        .withIsLoggedIn(true)
    case actionTypes.LOGOUT_SUCCESS:
      return new UserState()
    default:
      return state
  }
}
